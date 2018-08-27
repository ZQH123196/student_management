# from django.contrib import admin
import xadmin
from app.models import *

class StudentsAdmin():
    list_display = ('name', 'sex', 'age', 'address', 'enter_date', 'remarks',)

xadmin.site.register(Student, StudentsAdmin)