from rest_framework import serializers
from .models import UserProfile
from django.contrib.auth.models import User, Group, Permission

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

class PermissionSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Permission
        fields = '__all__'

class GroupSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Group
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    groups = GroupSerializer(many=True)
    user_permissions = PermissionSerializer(many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'groups', 'last_login',
        'is_superuser', "last_name", 'is_staff', 'is_active', 'date_joined', 'user_permissions']
        # fields = '__all__'

    def get_isAdmin(self, obj):
        return obj.is_staff
    
    def get__id(self, obj):
        return obj.id

    def validate_password(self, obj: str) -> str:
        """
        Hash value passed by user.

        :param value: password of a user
        :return: a hashed version of the password
        """
        return make_password(obj)

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email

        return name

class UserSerializerWithToken(UserSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'groups', 'last_login',
        'is_superuser', "last_name", 'is_staff', 'is_active', 'date_joined', 'user_permissions']
        # fields = '__all__'
