from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=64)
    slug = models.CharField(max_length=64, unique=True)
    parent = models.ForeignKey("self", models.DO_NOTHING, null=True, blank=True, db_column='parent', related_name="children")
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"


class Post(models.Model):
    name = models.CharField(max_length=64)
    slug = models.CharField(max_length=64, unique=True)
    description = models.CharField(max_length=8192, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"


class HashTag(models.Model):

    name = models.CharField(max_length=64, unique=True)
    post = models.ManyToManyField(Post)

    def __str__(self):
        return self.name