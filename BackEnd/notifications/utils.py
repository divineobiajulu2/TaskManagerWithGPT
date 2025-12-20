# notifications/utils.py
from .models import Notification
from django.conf import settings

User = settings.AUTH_USER_MODEL

def create_notification(recipient, message):
    """
    Creates a notification for a given user.
    """
    Notification.objects.create(
        recipient=recipient,
        message=message
    )
def get_unread_notifications(user):
    """
    Retrieves all unread notifications for a given user.
    """
    return Notification.objects.filter(recipient=user, read=False)