from django.shortcuts import render
from django.http import Http404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import Comment, Reply
from .serializers import CommentSerializer, ReplySerializer

# Create your views here.


class Comment_List(APIView):
    def get(self, request):
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)

class Comment_Detail(APIView):
    def get_object(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise Http404
    
    def get(self, request):
        comments = Comment.objects.all()
        vid_id_param = request.query_params.get('video_id')
        print(vid_id_param)
        comment = comments.filter(video_id=vid_id_param)
        serializer = CommentSerializer(comment, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    
