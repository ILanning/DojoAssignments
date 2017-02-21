from django.conf.urls import url
from . import views

urlpatterns = [
    url(r"^$", views.index),
    url(r"^add$", views.addAddress),
    url(r"^remove$", views.removeAddress)
]
