from django.contrib import admin
from django.urls import path, include
# from movie_manager import urls as movie_manager_urls
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
]