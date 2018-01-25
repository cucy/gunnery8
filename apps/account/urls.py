from django.conf.urls import url
from .views import AuthLoginView

urlpatterns = [
    url(r'^login/$', AuthLoginView.as_view(), name='login'),
]
