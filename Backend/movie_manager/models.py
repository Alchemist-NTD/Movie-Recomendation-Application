from django.db import models
from django.contrib.auth.models import AbstractUser


class Movie(models.Model):
    id = models.AutoField(primary_key=True, default=0)
    title = models.CharField(max_length=512, default='')
    genres = models.CharField(max_length=1024, default='')
    poster = models.ImageField(upload_to='./movie_manager/material/poster/', default='./movie_manager/material/poster/0.jpg')
    
    def __str__(self):
        return str(self.id) + ' : ' + self.title
    
    
class User(AbstractUser):
    id = models.AutoField(primary_key=True, default=1)
    username = models.CharField(null=False, default="", max_length=128, unique=True)
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    def __str__(self):
        return str(self.id) + ' : ' + self.username
    
    
class Rating(models.Model):
    movie = models.ForeignKey(Movie, default=1, to_field='id', on_delete=models.CASCADE)
    user = models.ForeignKey(User, default=1, to_field='id', on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)