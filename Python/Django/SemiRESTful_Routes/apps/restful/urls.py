from django.conf.urls import url
from . import views

"""
Routes:
    Product Index          -> Index              GET
    Show Product           -> Show/(ID)          GET
    Edit Product Page      -> Show/(ID)/edit     GET
    Edit Product Submit    -> Show/(ID)          POST
    Destroy Product Submit -> Show/(ID)/Destroy  POST
    Add Product Page       -> Show/New           GET
    Add Product Submit     -> Index              POST
"""

urlpatterns = [
    url(r"^$", views.redir, name = "Redir"),
    url(r"^products$", views.index, name = "Index"),
    url(r"^products/(?P<id>\d*)$", views.show, name = "Show"),
    url(r"^products/new$", views.new, name = "Create"),
    url(r"^products/(?P<id>\d*)/edit$", views.edit , name = "Edit"),
    url(r"^products/(?P<id>\d*)/destroy$", views.destroy, name = "Destroy")
]
