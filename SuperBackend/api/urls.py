from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.views import obtain_auth_token
from .views import baseView

urlpatterns = [
    # VISITOR
    path('visitor/', baseView.hello_view, name='visitor_view'),

    # ADMIN
    path('admin-user/', baseView.admin_view, name='admin_view'),

    # USER
    path('user/', baseView.user_view, name='user_view'),



    
    ### Auth Token ###
    path('login/api-token-auth/', obtain_auth_token, name='get-token'),
    
]