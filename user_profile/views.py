from rest_framework.views import APIView
from rest_framework.response import Response
from .models import UserProfile
from .serializers import UserProfileSerializer
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib import auth
from rest_framework.response import Response
from user_profile.models import UserProfile
from .serializers import UserSerializer, UserSerializerWithToken, UserProfileSerializer
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import Http404
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema


class GetUserProfileView(APIView):
    def get(self, request, pk, format=None):
        try:
            user = User.objects.get(pk=pk)
            username = user.username
            user_profile = UserProfile.objects.get(pk=pk)
            serializer = UserProfileSerializer(user_profile)
            return Response({ 'profile': serializer.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when retrieving profile' })



class UpdateUserProfileView(APIView):

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "first_name": openapi.Schema(type=openapi.TYPE_STRING),
                "last_name": openapi.Schema(type=openapi.TYPE_STRING),
                "phone": openapi.Schema(type=openapi.TYPE_STRING),
                "city": openapi.Schema(type=openapi.TYPE_STRING),
            },
        )
    )
    def put(self, request, pk, format=None):
        try:
            user = User.objects.get(pk=pk)
            username = user.username

            data = self.request.data
            first_name = data['first_name']
            last_name = data['last_name']
            phone = data['phone']
            city = data['city']

            UserProfile.objects.filter(user=user).update(first_name=first_name, last_name=last_name, phone=phone, city=city)

            user_profile = UserProfile.objects.get(user=user)
            user_profileSerializer = UserProfileSerializer(user_profile)
            
            return Response({ 'profile': user_profileSerializer.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when updating profile' })


class CheckAuthenticatedView(APIView):
    def get(self, request, format=None):
        user = self.request.user

        try:
            isAuthenticated = user.is_authenticated

            if isAuthenticated:
                return Response({ 'isAuthenticated': 'success' })
            else:
                return Response({ 'isAuthenticated': 'error' })
        except:
            return Response({ 'error': 'Something went wrong when checking authentication status' })

# @method_decorator(csrf_protect, name='dispatch')
class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )
    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "username": openapi.Schema(type=openapi.TYPE_STRING),
                "password": openapi.Schema(type=openapi.TYPE_STRING),
                "re_password": openapi.Schema(type=openapi.TYPE_STRING),
            },
        )
    )
    def post(self, request, format=None):
        data = self.request.data

        username = data['username']
        password = data['password']
        re_password  = data['re_password']

        try:
            if password == re_password:
                if User.objects.filter(username=username).exists():
                    return Response({ 'error': 'Username already exists' })
                else:
                    if len(password) < 6:
                        return Response({ 'error': 'Password must be at least 6 characters' })
                    else:
                        user = User.objects.create_user(username=username, password=password)

                        user = User.objects.get(id=user.id)

                        user_profile = UserProfile.objects.create(user=user, first_name='', last_name='', phone='', city='')

                        data = UserSerializerWithToken(user).data

                        refresh = RefreshToken.for_user(user)
                        data["refreshToken"] = str(refresh)
                        data["accessToken"] = str(refresh.access_token)

                        return Response({ 'success': 'User created successfully', "user":data, "token": str(refresh.access_token)})
            else:
                return Response({ 'error': 'Passwords do not match' })
        except:
                return Response({ 'error': 'Something went wrong when registering account' })


# @method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes = (permissions.AllowAny, )
    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "username": openapi.Schema(type=openapi.TYPE_STRING),
                "password": openapi.Schema(type=openapi.TYPE_STRING),
            },
        )
    )
    def post(self, request, format=None):
        data = self.request.data

        username = data['username']
        password = data['password']
        
        try:
            user = auth.authenticate(username=username, password=password)
            
            if user is not None:
              
                auth.login(request, user)
            
                data = UserSerializerWithToken(user).data
                
                refresh = RefreshToken.for_user(user)
                data["refreshToken"] = str(refresh)
                data["accessToken"] = str(refresh.access_token)
            
                user_profile = UserProfile.objects.get(user=user)
                user_profileSerializer = UserProfileSerializer(user_profile)
                
                data["ability"] = [{'action': 'manage','subject': 'all'}]
 
                data["user_profile"] = user_profileSerializer.data

                return Response({ 'success': 'User authenticated', "user":data, "token": str(refresh.access_token)})
               
            else:
                return Response({ 'error': 'Error Authenticating' })
        except:
            return Response({ 'error': 'Something went wrong when logging in' })

class LogoutView(APIView):
    def post(self, request, format=None):
        try:
            auth.logout(request)
            return Response({ 'success': 'Loggout Out' })
        except:
            return Response({ 'error': 'Something went wrong when logging out' })

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        csrftoken = request.META.get('CSRF_COOKIE')
        return Response({ 'success': 'CSRF cookie set', "CSRF_COOKIE": csrftoken })

class DeleteAccountView(APIView):
    def delete(self, request, pk, format=None):

        try:
            User.objects.filter(id=pk).delete()

            return Response({ 'success': 'User deleted successfully' })
        except:
            return Response({ 'error': 'Something went wrong when trying to delete user' })
