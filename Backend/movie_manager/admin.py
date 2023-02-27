from django.contrib import admin
from movie_manager.models import Movie, Genres, Rating

admin.site.register(Movie)
admin.site.register(Genres)
admin.site.register(Rating)
