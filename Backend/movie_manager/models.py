from django.db import models
from django.contrib.auth.models import User

class Genres(models.Model):
    name = models.CharField(max_length=512)

class Movie(models.Model):
    title = models.CharField(max_length=512)
    genres = models.ManyToManyField(Genres)
    
    def __str__(self):
        return self.id + ' : ' + self.title
    
class Rating(models.Model):
    pass
    # movie = models.ForeignKey(Movie, to_field='id', on_delete=models.CASCADE)
    