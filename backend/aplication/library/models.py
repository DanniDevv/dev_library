from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    imagen_autor = models.ImageField(upload_to='authors/')
    
    def __str__(self):
        return f'{self.name}'

class Genre(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'

class Books(models.Model):
    title = models.CharField(max_length=100)
    imagen_book = models.ImageField(upload_to='books/')
    descriptionbook = models.TextField(default='Sin descripción disponible')
    year_published = models.DateField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    genr = models.ForeignKey(Genre, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title} - {self.author.name} - {self.genr.name} - {self.price}'
