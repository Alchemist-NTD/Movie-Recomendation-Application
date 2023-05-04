from django.contrib import admin
from django.urls import path, include
from .views import *
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
    TokenBlacklistView,
)

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'', include(router.urls)),
    # path(r'', include(movie_manager_urls)),
    path(r'login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path(r'logout', TokenBlacklistView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('api/token/blacklist/', TokenBlacklistView.as_view(), name='token_blacklist'),
    
    path(r'movie/create', MovieList.as_view(), name="create_movie"),
    path(r'movie/retrieve/<int:pk>', MovieView.as_view(), name="retrieve_movie"),
    path(r'movie/update/<int:pk>', MovieDetail.as_view(), name="update_movie"),
    path(r'movie/destroy/<int:pk>', MovieDetail.as_view(), name="delete_movie"),
    path(r'movie/list/<int:pk>', MovieList.as_view(), name="list_movie"),
    
    path(r'movie/filter/', MovieFilterList.as_view(), name="list_filter_movie"),
    path(r'matrix/retrieve/<int:pk>', MatrixRetrieveView.as_view(), name="retrieve_matrix"),
    # path(r'matrix/create', MatrixCreateView.as_view(), name="retrieve_matrix"),
    path(r'user/retrieve/<str:username>', UserRetrieve.as_view(), name="user_retrieve"),

    path(r'poster/<int:pk>', ImageView.as_view(), name="get_img"),
    path(r'movie/recommender/content/', ImageView.as_view(), name="get_cb_filter"),
    path(r'movie/recommender/collaborative/', ImageView.as_view(), name="get_cf"),
    path(r'movie/rating/', RateMovieView.as_view(), name="rate_movie"),
    path(r'movie/rating/retrieve/<int:user>/<int:movie>', RetrieveRateMovieView.as_view(), name="retrieve_rate"),
]