from django.contrib import admin
from .models import Books, Author, Genre

admin.site.register(Books)
admin.site.register(Author)
admin.site.register(Genre)