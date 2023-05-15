from django.urls import path

from .views import PostList, PostCategory, PostDetail
from .views import CategoryDetail, CategoryList,  CategoryDetailSlug, CategoryListDepth
from .views import HashTagList, HashTagDetail

urlpatterns = [
    path("categorydepth/", CategoryListDepth.as_view()),
    path("category/", CategoryList.as_view()),
    path("category/<int:pk>/", CategoryDetail.as_view()),
    path("categoryslug/<str:pk>/", CategoryDetailSlug.as_view()),

    path("posts/", PostList.as_view()),
    path("post/<int:pk>/", PostDetail.as_view()),
    path("<str:pk>/posts/", PostCategory.as_view()),

    path("hashtag/", HashTagList.as_view()),
    path("hashtag/<int:pk>/", HashTagDetail.as_view()),
]
