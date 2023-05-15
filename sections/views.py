from django.http import Http404
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator

from .models import Category, Post, HashTag
from .serializers import CategorySerializer, CategorySerializerDepth , PostSerializer, HashTagSerializer

# from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, AllowAny

# @method_decorator(csrf_protect, name='dispatch')
class CategoryList(APIView):
    permission_classes = [AllowAny]

    def get(self, request, format=None):
        category = Category.objects.all()
        serializer = CategorySerializer(category, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "name": openapi.Schema(type=openapi.TYPE_STRING),
                "slug": openapi.Schema(type=openapi.TYPE_STRING),
                "parent": openapi.Schema(type=openapi.TYPE_STRING),
            },
        )
    )
    def post(self, request, format=None):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @method_decorator(csrf_protect, name='dispatch')
class CategoryListDepth(APIView):
    permission_classes = [AllowAny]

    def get(self, request, format=None):
        category = Category.objects.filter(parent=None)
        serializer = CategorySerializerDepth(category, many=True)
        return Response(serializer.data)


# @method_decorator(csrf_protect, name='dispatch')
class CategoryDetailSlug(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk, format=None):
        category = Category.objects.filter(slug=pk).first()
        if category == None:
            serializer = []
        else:
            serializer = CategorySerializer(category).data

        return Response(serializer)   

# @method_decorator(csrf_protect, name='dispatch')
class CategoryDetail(APIView):
    def get_object(self, pk):
        try:
            return Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        category = self.get_object(pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data)


    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "name": openapi.Schema(type=openapi.TYPE_STRING),
                "slug": openapi.Schema(type=openapi.TYPE_STRING),
                "parent": openapi.Schema(type=openapi.TYPE_STRING),
            },
        )
    )
    def put(self, request, pk, format=None):
        category = self.get_object(pk)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        category = self.get_object(pk)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# @method_decorator(csrf_protect, name='dispatch')
class PostCategory(APIView):
    permission_classes = [AllowAny]

    def get(self, request, pk, format=None):
        category_id = Category.objects.filter(slug=pk).first()
        posts = Post.objects.filter(category=category_id)
        
        serializer = PostSerializer(posts, many=True)
        
        return Response(serializer.data)

# @method_decorator(csrf_protect, name='dispatch')
class PostList(APIView):
    permission_classes = [AllowAny]

    def get(self, request, format=None):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "name": openapi.Schema(type=openapi.TYPE_STRING),
                "slug": openapi.Schema(type=openapi.TYPE_STRING),
                "description": openapi.Schema(type=openapi.TYPE_STRING),
                "category": openapi.Schema(type=openapi.TYPE_STRING),
            },
        )
    )
    def post(self, request, format=None):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @method_decorator(csrf_protect, name='dispatch')
class PostDetail(APIView):
    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "name": openapi.Schema(type=openapi.TYPE_STRING),
                "slug": openapi.Schema(type=openapi.TYPE_STRING),
                "description": openapi.Schema(type=openapi.TYPE_STRING),
                "category": openapi.Schema(type=openapi.TYPE_STRING),
            },
        )
    )
    def put(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# @method_decorator(csrf_protect, name='dispatch')
class HashTagList(APIView):
    permission_classes = [AllowAny]

    def get(self, request, format=None):
        hashtags = HashTag.objects.all()
        serializer = HashTagSerializer(hashtags, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "name": openapi.Schema(type=openapi.TYPE_STRING),
                "post": openapi.Schema(type=openapi.TYPE_STRING),
            },
        )
    )
    def post(self, request, format=None):
        serializer = HashTagSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @method_decorator(csrf_protect, name='dispatch')
class HashTagDetail(APIView):
    def get_object(self, pk):
        try:
            return HashTag.objects.get(pk=pk)
        except HashTag.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        hashtag = self.get_object(pk)
        serializer = HashTagSerializer(hashtag)
        return Response(serializer.data)

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "name": openapi.Schema(type=openapi.TYPE_STRING),
                "post": openapi.Schema(type=openapi.TYPE_STRING),
            },
        )
    )
    def put(self, request, pk, format=None):
        hashtag = self.get_object(pk)
        serializer = HashTagSerializer(hashtag, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        hashtag = self.get_object(pk)
        hashtag.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

