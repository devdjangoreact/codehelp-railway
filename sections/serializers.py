from rest_framework import serializers

from .models import Category, Post, HashTag


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
        read_only_fields = (
            "id",
            "created_date",
            "updated_date",
        )

class CategorySerializerDepth(serializers.ModelSerializer):

    children = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'children']
        read_only_fields = (
            "id",
            "created_date",
            "updated_date",
        )
        depth = 10


    def get_children(self, obj):
        if obj.children:
            depth = getattr(self.Meta, 'depth', None)
            if not depth:
                depth = self.context.get('depth', 0)

            if depth:
                return CategorySerializerDepth(obj.children.all(),
                                        many=True,
                                        context={'depth': depth - 1}).data
            else:
                return [child.id for child in obj.children.all()]
        else:
            return []
            


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"
        read_only_fields = (
            "id",
            "created_date",
            "updated_date",
        )

    # def to_representation(self, instance):
    #     response = super().to_representation(instance)
    #     response['category'] = CategorySerializer(instance.category).data
    #     return response

    # def to_representation(self, instance):
    #     self.fields['category'] =  CategorySerializer(read_only=True)
    #     return super(PostSerializer, self).to_representation(instance)


class HashTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = HashTag
        fields = "__all__"
        read_only_fields = ("id",)

