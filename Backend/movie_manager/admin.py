from django.contrib import admin
from movie_manager.models import Movie, Rating, User, Matrix

admin.site.register(Movie)
admin.site.register(Rating)
admin.site.register(User)
admin.site.register(Matrix)

