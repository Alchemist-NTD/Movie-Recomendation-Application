from .models import *
from .serializers import *
from rest_framework import generics, status
from rest_framework.response import Response
from django_filters import rest_framework as filters
# from ..filters import *
from rest_framework.permissions import IsAuthenticated, AllowAny
from .settings import MATRIX
import base64



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


class MovieFilter(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = []
    

class MatrixRetrieveView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = MatrixSerializer
    queryset = Matrix.objects.all()
    
    
# class MatrixCreateView(generics.CreateAPIView):
#     permission_classes = [AllowAny]
#     serializer_class = MatrixSerializer
#     queryset = Matrix.objects.all()
    
#     def post(self, request):
        
#         Matrix.objects.create(**{'matrix': np.array([[1, 2, 3], [3, 4, 5]]).tobytes()})
#         return Response({})
