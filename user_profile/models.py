from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, default='')
    city = models.CharField(max_length=20, default='')
    first_name = models.CharField(max_length=255, default='')
    last_name = models.CharField(max_length=255, default='')
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username