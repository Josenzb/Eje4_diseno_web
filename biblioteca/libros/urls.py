from django.urls import path
from .views import LibroListCreate, LibroDetail

urlpatterns = [
    path('libros/', LibroListCreate.as_view(), name='lista_libros'),
    path('libros/<int:pk>/', LibroDetail.as_view(), name='detalle_libro'),
]
