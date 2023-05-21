from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, default="", blank=True)
    city = models.CharField(max_length=20, default="", blank=True)
    first_name = models.CharField(max_length=255, default="", blank=True)
    last_name = models.CharField(max_length=255, default="", blank=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username
