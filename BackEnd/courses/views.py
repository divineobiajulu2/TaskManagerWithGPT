from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Course, Assignment
from .serializers import CourseSerializer, AssignmentSerializer
from notifications.utils import create_notification

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def teacher_courses(request):
    """
    This view returns all courses that belong to the logged-in teacher.
    Only users with role 'teacher' can access it.
    """
    user = request.user
    
    # Check if user is a teacher
    if user.role != 'teacher':
        return Response({"detail": "You are not allowed to access this resource."}, status=403)
    
    # Get all courses for this teacher
    courses = Course.objects.filter(teacher=user)
    
    # Convert the courses to JSON
    serializer = CourseSerializer(courses, many=True)
    
    # Return JSON response
    return Response(serializer.data)



# List all assignments for a course (teacher view)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_assignments(request, course_id):
    try:
        course = Course.objects.get(id=course_id)
    except Course.DoesNotExist:
        return Response({"detail": "Course not found"}, status=404)
    
    assignments = Assignment.objects.filter(course=course)
    serializer = AssignmentSerializer(assignments, many=True)
    return Response(serializer.data)


# Teacher creates assignment


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_assignment(request):
    user = request.user
    course_id = request.data.get("course")
    if not course_id:
        return Response({"course": "This field is required."}, status=400)

    try:
        course = Course.objects.get(id=course_id, teacher=user)
    except Course.DoesNotExist:
        return Response({"detail": "Not allowed or course not found."}, status=403)

    serializer = AssignmentSerializer(data=request.data)
    if serializer.is_valid():
        assignment = serializer.save(course=course)

        # Notify all students enrolled in the course
        for student in course.students.all():
            create_notification(
                recipient=student,
                message=f"New assignment '{assignment.title}' has been posted in '{course.title}'"
            )

        return Response(serializer.data, status=201)

    return Response(serializer.errors, status=400)




@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_course(request, course_id):
    try:
        course = Course.objects.get(id=course_id)
    except Course.DoesNotExist:
        return Response({"detail": "Course not found."}, status=404)
    
    # Optional: Only allow teacher who owns the course to delete
    if course.teacher != request.user:
        return Response({"detail": "You are not allowed to delete this course."}, status=403)
    
    course.delete()
    return Response({"detail": "Course deleted successfully."}, status=200)