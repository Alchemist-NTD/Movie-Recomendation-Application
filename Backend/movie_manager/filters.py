from django_filters import FilterSet, AllValuesFilter
from django_filters import DateTimeFilter, NumberFilter
from .models import *
from .serializers import *

class MovieFilter(FilterSet):
    
    class Meta:
        model = Movie
        fields = (
                'title',
                'genres',
            )