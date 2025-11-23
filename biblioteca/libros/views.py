from rest_framework import generics
from .models import Libro
from .serializers import LibroSerializer

# Crear y listar libros
class LibroListCreate(generics.ListCreateAPIView):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer

# Consultar, actualizar y eliminar un libro
class LibroDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer
