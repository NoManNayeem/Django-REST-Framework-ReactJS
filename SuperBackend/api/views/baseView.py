from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


from functools import partial
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes, renderer_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from rest_framework import status
from django.views.decorators.csrf import ensure_csrf_cookie
from django.shortcuts import (get_object_or_404, render, HttpResponseRedirect)
from django.views.decorators.csrf import csrf_exempt

from ..models.account_model import *

#### Hello View ####
@api_view(['GET'])
@permission_classes((AllowAny,))
def hello_view(request,format=None):
    if request.method=="GET":
        content = {"message":"Welcome to home view"}
    else:
        content = {"message":"Products Not Found"}
    return Response(content)



#### Admin View ####
@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def admin_view(request,format=None):
    if request.method=="GET":
        orders = UserAccount.objects.all()
        serializer = UserAccountSerializer(orders, many=True)
        content = serializer.data
    else:
        content = {"message":"Not Found"}
    return Response(content)

#### User View ####
@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def user_view(request,format=None):
    if request.method=="GET":
        content = {"message":"Welcome to USER"}
    else:
        content = {"message":"Not Found"}
    return Response(content)
