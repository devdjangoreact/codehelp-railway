from django.contrib import admin

from .models import Category, Post, HashTag


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    fields = (
        "name",
        "slug",
        "parent",
        "created_date",
        "updated_date",
    )
    list_display = (
        "name",
        "slug",
        "parent",
        "created_date",
        "updated_date",
    )
    readonly_fields = (
        "created_date",
        "updated_date",
    )


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    fields = (
        "name",
        "slug",
        "description",
        "category",
        "created_date",
        "updated_date",
    )
    list_display = (
        "name",
        "slug",
        "description",
        "category",
        "created_date",
        "updated_date",
    )
    readonly_fields = (
        "created_date",
        "updated_date",
    )

@admin.register(HashTag)
class HashTagAdmin(admin.ModelAdmin):
    fields = ("name", "post")    
    # list_display = ("post", "name")