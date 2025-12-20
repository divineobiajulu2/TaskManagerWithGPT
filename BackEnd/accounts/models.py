from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('student', 'Student'),
        ('teacher', 'Teacher'),
        ('admin', 'Admin'),
    )

    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    is_validated = models.BooleanField(default=False)
    decline_reason = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.username} ({self.role})"
