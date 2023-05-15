from django.urls import path

from .views import LogoutView, CheckAuthenticatedView
from .views import SignupView, GetCSRFToken, LoginView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('token/verify/', TokenVerifyView.as_view()),
    path('register', SignupView.as_view()),
    path('login', LoginView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('authenticated', CheckAuthenticatedView.as_view()),
    path('logout', LogoutView.as_view()),
]
