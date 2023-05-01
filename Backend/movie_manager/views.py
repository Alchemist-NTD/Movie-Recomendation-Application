from .models import *
from .serializers import *
from rest_framework import generics, status
from rest_framework.response import Response
from django_filters import rest_framework as filters
from .filters import *
from rest_framework.permissions import IsAuthenticated, AllowAny
from .settings import MATRIX
import base64
import os
from django.http import FileResponse, HttpResponse
import sys

class UserRetrieve(generics.RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

class MovieList(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [IsAuthenticated]
    

class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [AllowAny]
    

class MovieView(generics.RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class cfRecView(generics.ListCreateAPIView):
    serializer_class = MovieSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        with open('./movie_manger/models/model_recommed.pkl', 'rb') as f:
            model = pickle.load(f)
            usr_id = self.request.user.id
            def predict(self, user_id):
                items_id = Movie.objects.values_list('id', flat=True)
                pred_val = np.numpy([model.predict(user_id, i).est for i in items_id])
                return [items_id[x] for x in np.argsort(pred_val)]
            rec_id = predict(usr_id)
            return Movie.objects.filter(id__in=rec_id)



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


class cbRecView(generics.ListAPIView):
    serializer_class = MovieSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        #def convertsting(path):
        movie_id = self.request.get_querams.get('movie_id', None)
        with open('./Backend/movie_manger/models/data.txt', 'r') as file:
            lines = file.readlines()
            for line in lines:
            # Chuyển sang dict
                dict_data = eval(line)
                if movie_id not in dict_data:
                    continue
                # Lấy giá trị dạng list bao gồm cả tên film và giá trị
                list_title = [value.split('|') for value in dict_data.values()][0::2]
                return Movie.objects.filter(title__in=list_title)
                    
                
class MovieFilterList(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filterset_class = MovieFilter
    

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
class cfRecView(generics.ListCreateAPIView):
    serializer_class = MovieSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        with open('./movie_manger/models/model_recommed.pkl', 'rb') as f:
            model = pickle.load(f)
            usr_id = self.request.user.id
            def predict(self, user_id):
                items_id = Movie.objects.values_list('id', flat=True)
                pred_val = np.numpy([model.predict(user_id, i).est for i in items_id])
                return [items_id[x] for x in np.argsort(pred_val)]
            rec_id = predict(usr_id)
            return Movie.objects.filter(id__in=rec_id)


class cbRecView(generics.ListAPIView):
    serializer_class = MovieSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        #def convertsting(path):
        movie_id = self.request.get_querams.get('movie_id', None)
        with open('./movie_manger/models/data.txt', 'r') as file:
            lines = file.readlines()
            for line in lines:
            # Chuyển sang dict
                dict_data = eval(line)
                if movie_id not in dict_data:
                    continue
                # Lấy giá trị dạng list bao gồm cả tên film và giá trị
                list_title = [value.split('|') for value in dict_data.values()][0::2]
                return Movie.objects.filter(title__in=list_title)
                    
                