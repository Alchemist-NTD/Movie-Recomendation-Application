from .models import *
from .serializers import *
from rest_framework import generics, status
from rest_framework.response import Response
from django_filters import rest_framework as filters
# from ..filters import *
from rest_framework.permissions import IsAuthenticated



class MovieList(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [IsAuthenticated]

class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [IsAuthenticated]

class MovieView(generics.RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

