from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('', views.Comment_List.as_view()),
    # path('all/', views.Supers_Detail.as_view()),
    ]  