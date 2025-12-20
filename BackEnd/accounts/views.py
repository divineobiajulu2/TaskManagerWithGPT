from django.shortcuts import render

# Create your views here.


from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from .models import User
from notifications.utils import create_notification


# List all pending users (not yet validated)
@api_view(['GET'])
@permission_classes([IsAdminUser])
def pending_users(request):
    users = User.objects.filter(is_validated=False)
    data = [
        {
            "id": u.id,
            "username": u.username,
            "email": u.email,
            "role": u.role
        } for u in users
    ]
    return Response(data)


# Validate a user
@api_view(['POST'])
@permission_classes([IsAdminUser])
def validate_user(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        user.is_validated = True
        user.decline_reason = ""  # clear any previous decline
        user.save()

        # Optional: send notification
        create_notification(
            recipient=user,
            message="Your account has been validated! ✅"
        )

        return Response({"detail": "User validated successfully."})
    except User.DoesNotExist:
        return Response({"detail": "User not found."}, status=404)


# Decline a user with a remark
@api_view(['POST'])
@permission_classes([IsAdminUser])
def decline_user(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        remark = request.data.get("remark", "")
        user.is_validated = False
        user.decline_reason = remark
        user.save()

        # Optional: send notification
        create_notification(
            recipient=user,
            message=f"Your account creation was declined: {remark}"
        )

        return Response({"detail": "User declined successfully."})
    except User.DoesNotExist:
        return Response({"detail": "User not found."}, status=404)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def teacher_only_view(request):
    user = request.user

    if user.role != 'teacher':
        return Response(
            {"detail": "You are not allowed to access this resource."},
            status=403
        )

    return Response(
        {"message": f"Welcome teacher {user.username}!"},
        status=200
    )
