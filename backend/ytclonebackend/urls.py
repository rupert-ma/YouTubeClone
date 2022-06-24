from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('<str:video_id>', views.Comments_Unprotected.as_view()),
    path('post/', views.Comments_Protected.as_view()),
    path('post/<int:pk>', views.Comments_Protected.as_view()),
    path('reply/', views.Reply_Protected.as_view()),
    path('reply/<int:pk>', views.Reply_Protected.as_view())
    ]  