import os
from django.db import models

# verbose_name 作为说明注释使用，可用于 csv 导出


class Student(models.Model):
    name = models.CharField(verbose_name='姓名', max_length=50)
    sex = models.CharField(verbose_name='性别', max_length=50)
    age = models.IntegerField(verbose_name='年龄')
    address = models.CharField(verbose_name='家庭住址', max_length=250)
    enter_date = models.DateField(verbose_name='入学时间')
    remarks = models.TextField(verbose_name='备注', blank=True)
    pass
    def get_photo(self, filename):
        return os.path.join('photo', '%s_%s' % (self.name, self.sex))
    photo = models.ImageField(verbose_name='照片', upload_to=get_photo, blank=True, null=True) # upload_to指定图片上传的途径，如果不存在则自动创建
