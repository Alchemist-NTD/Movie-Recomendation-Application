from .models import *
from .serializers import *
from rest_framework import generics, status
from rest_framework.response import Response
from django_filters import rest_framework as filters
from .filters import *
from rest_framework.permissions import IsAuthenticated, AllowAny
from .settings import MATRIX
from django.http import HttpResponse
import os, time
import numpy as np
from .settings import COLLABORATIVE_FILTER


class UserRetrieve(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'username'
    def get_object(self):
        username = self.kwargs.get('username')
        try:
            return User.objects.get(username=username)
        except User.DoesNotExist:
            return status.HTTP_404_NOT_FOUND


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


class ImageView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    
    def get(self, request, *args, **kwargs):
        filename = kwargs.get('pk')
        file_path = f'/src/movie_manager/material/poster/{filename}.jpg'
        if os.path.exists(file_path):
            with open(file_path, 'rb') as f:
                response = HttpResponse(f.read(), content_type='image/jpeg')
                response['Content-Disposition'] = 'attachment; filename="{}.jpg"'.format(filename)
            return response
        else:
            return Response({
                'error': f'The requested shit thing image was not found.{os.path.abspath(__file__)}'
                }, status=404)


class MovieFilterList(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filterset_class = MovieFilter


class cfRecView(generics.ListCreateAPIView):
    serializer_class = MovieSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        if COLLABORATIVE_FILTER != None:
            usr_id = self.kwargs['user_id']
            def predict(user_id):
                items_id = list(Movie.objects.values_list('id', flat=True))
                pred_val = np.array([COLLABORATIVE_FILTER.predict(user_id, i).est for i in items_id])
                sorted_weight = np.argsort(pred_val)
                return [items_id[x] for x in sorted_weight][-20:]
            start = time.time()
            rec_id = predict(usr_id)
            end = time.time()
            exec_time = end - start
            print(f"prediction time take {exec_time} seconds")
            return Movie.objects.filter(id__in=rec_id)


class cbRecView(generics.ListAPIView):
    serializer_class = MovieSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        movie_id = self.kwargs['movie_id']
        print(f"movie id is {movie_id}")
        with open('/src/movie_manager/models/data.txt', 'r') as file:
            for line in file:
                try:
                    dict_data = eval(line)
                    if movie_id != next(iter(dict_data)):
                        continue
                    file.close()
                    list_title = [value.split('|') for value in dict_data.values()][0][0::2]
                    return Movie.objects.filter(title__in=list_title)
                except Exception as e:
                    continue


class RateMovieView(generics.CreateAPIView):
    serializer_class = RatingSerializer
    permission_classes = [IsAuthenticated]
    queryset = Rating.objects.all()


class RetrieveRateMovieView(generics.RetrieveAPIView):
    serializer_class = RatingSerializer
    permission_classes = [IsAuthenticated]
    queryset = Rating.objects.all()

    def get_object(self):
        rate_set = Rating.objects.filter(user=self.kwargs['user'], movie=self.kwargs['movie'])
        if rate_set.exists():
            return rate_set.first()
        return status.HTTP_404_NOT_FOUND
