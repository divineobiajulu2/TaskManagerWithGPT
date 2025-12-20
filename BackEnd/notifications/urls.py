from django.urls import path
from .views import notification_list, mark_as_read

urlpatterns = [
    path('', notification_list, name='notification_list'),
    path('mark-read/<int:notification_id>/', mark_as_read, name='mark_as_read'),
]
