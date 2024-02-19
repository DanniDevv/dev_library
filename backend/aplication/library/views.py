from django.shortcuts import render
from .models import Books, Author, Genre


# Book List View
def book_list(request):
    books = Books.objects.all()
    return render(request, 'book_list.html', {'books': books})
# book_detail permite ver el detalle de un libro
def book_detail(request, book_id):
    book = Books.objects.get(id=book_id)
    return render(request, 'book_detail.html', {'book': book})

# Author List View
def author_list(request):
    authors = Author.objects.all()
    return render(request, 'author_list.html', {'authors': authors})
# author_detail permite ver el detalle de un autor
def author_detail(request, author_id):
    author = Author.objects.get(id=author_id)
    return render(request, 'author_detail.html', {'author': author})

# Genre List View
def genre_list(request):
    genres = Genre.objects.all()
    return render(request, 'genre_list.html', {'genres': genres})
# genre_detail permite ver el detalle de un genero
def genre_detail(request, genre_id):
    genre = Genre.objects.get(id=genre_id)
    return render(request, 'genre_detail.html', {'genre': genre})

# def index(request):
#     book_list = Books.objects.all()
#     authors_list = Author.objects.all()
#     genres_list = Genre.objects.all()

#     context = {
#         'books': book_list,
#         'authors': authors_list,
#         'genres': genres_list
#     }
#     return render(request, 'index.html', context)
