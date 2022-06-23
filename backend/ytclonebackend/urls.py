from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('', views.Allow_Any.as_view()),
    path('post/', views.Protected_View.as_view()),
    ]  