from django_filters import FilterSet, AllValuesFilter
from django_filters import DateTimeFilter, NumberFilter
from .models import *
from .serializers import *

class MovieFilter(FilterSet):
    from_created_at = DateTimeFilter(field_name='created_at',
                                             lookup_expr='gte')
    to_created_at = DateTimeFilter(field_name='created_at',
                                             lookup_expr='lte')
    

    
    class Meta:
        model = Movie
        fields = (
                'created_at',
                'title',
                'genres',
            )