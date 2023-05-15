from django.contrib import admin

from .models import Movie

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    fields = (
        "title",
        "genre",
        "year",
        "created_date",
        "updated_date",
    )
    list_display = (
        "title",
        "genre",
        "year",
        "created_date",
        "updated_date",
    )
    readonly_fields = (
        "created_date",
        "updated_date",
    )
