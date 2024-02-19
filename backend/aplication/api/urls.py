from django.urls import path
from .views import BookList, BookDetail, AuthorList, AuthorDetail, GenreList, GenreDetail

urlpatterns = [
    path('books/', BookList.as_view(), name='book_list'), 
    path('books/<int:pk>/', BookDetail.as_view(), name='book_detail'),
    path('authors/', AuthorList.as_view(), name='author_list'),
    path('authors/<int:pk>/', AuthorDetail.as_view(), name='author_detail'),
    path('genres/', GenreList.as_view(), name='genre_list'),
    path('genres/<int:pk>/', GenreDetail.as_view(), name='genre_detail'),
]
