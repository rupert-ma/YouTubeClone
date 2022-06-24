from re import T
from django.shortcuts import render
from django.http import Http404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import Comment, Reply
from .serializers import CommentSerializer, ReplySerializer
from rest_framework.permissions import IsAuthenticated


class Comments_Unprotected(APIView): 
    
    def get_object(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise Http404
    
    # def get(self, request):
    #     comments = Comment.objects.all()
    #     vid_id_param = request.query_params.get('video_id')
    #     comment = comments.filter(video_id=vid_id_param)
    #     serializer = CommentSerializer(comment, many = True)
    #     return Response(serializer.data, status=status.HTTP_200_OK)

    def get(self, request, video_id):
        comments = Comment.objects.all()
        comment = comments.filter(video_id=video_id)
        serializer = CommentSerializer(comment, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class Comments_Protected(APIView):
    permission_classes = [IsAuthenticated]
    def get_object(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise Http404

    def post(self, request):
        print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def put(self, request, pk):
        print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
        comment = self.get_object(pk)
        serializer = CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def get(self, request, pk):
        print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
        comments = Reply.objects.all()
        replies = comments.filter(comment=pk)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class Reply_Protected(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request, pk):
        print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
        
        comments = Reply.objects.all()
        replies = comments.filter(comment=pk)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, pk):
        print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
        reply = {"user":request.user.id, "comment":pk, "text":request.data["text"]}
        serializer = ReplySerializer(data=reply)
        serializer.is_valid(raise_exception=True)
        serializer.save(user = request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)




