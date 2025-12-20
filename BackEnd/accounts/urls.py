from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import CustomTokenObtainPairView, teacher_only_view
from . import views
 
urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/pending-users/', views.pending_users, name='pending_users'),
    path('api/validate-user/<int:user_id>/', views.validate_user, name='validate_user'),
    path('api/decline-user/<int:user_id>/', views.decline_user, name='decline_user'),
    path('api/teacher-only/', teacher_only_view, name='teacher_only'),
]
