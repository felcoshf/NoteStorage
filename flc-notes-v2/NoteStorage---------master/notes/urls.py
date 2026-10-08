from django.urls import path
from . import views

urlpatterns = [
    path('', views.source_page, name='source_page'),
    path('notes/', views.notes_page, name='notes_page'),
]
