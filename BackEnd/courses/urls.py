from django.urls import path
from .views import teacher_courses, delete_course, list_assignments, create_assignment

urlpatterns = [
    path('api/teacher-courses/', teacher_courses, name='teacher_courses'),
    path('api/delete-course/<int:course_id>/', delete_course, name='delete_course'),
    path('api/<int:course_id>/assignments/', list_assignments, name='list_assignments'),
    path('api/<int:course_id>/assignments/create/', create_assignment, name='create_assignment')
]
