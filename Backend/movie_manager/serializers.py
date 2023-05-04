from rest_framework import serializers
from movie_manager.models import *
import numpy as np
import base64

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        
        instance = self.Meta.model(**validated_data)
        
        if password is not None:
            instance.set_password(password)
        
        instance.is_active = False
        instance.save()
        return instance

class MovieSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movie
        fields = '__all__'
        extra_kwargs = {
            'id': {'required': False}
        }

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance
    
    
class RatingSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Rating
        fields = '__all__'
        extra_kwargs = {}
        
    def create(self, validated_data):
        movie = validated_data['movie']
        user = validated_data['user']
        rate_set = Rating.objects.filter(movie=movie, user=user)
        
        if rate_set.exists():
            rate_obj = rate_set.first()
            rate_obj.rating = validated_data['rating']
        else:
            rate_obj = self.Meta.model(**validated_data)

        rate_obj.save()
        return rate_obj
            
class MatrixSerializer(serializers.ModelSerializer):
    matrix_response = serializers.SerializerMethodField()
    
    class Meta:
        model = Matrix
        fields = ['id', 'name', 'matrix_response']
        extra_kwargs = {
            'name': {'required': False},
            'matrix_response': {'required': False},
        }
        
    def get_matrix_response(self, obj):
        # print(np.array([[1, 2, 3], [3, 4, 5]]).tobytes() == obj.matrix)
        # print(obj.matrix)
        # my_buffer = obj.matrix.encode('latin-1')
        # if len(my_buffer) % 4 != 0:
        #     my_buffer += b'\x00' * (4 - len(my_buffer) % 4)
        # print(np.frombuffer(obj.matrix, dtype=np.int64))
        return np.frombuffer(obj.matrix, dtype=np.int64).reshape(2, 3)
