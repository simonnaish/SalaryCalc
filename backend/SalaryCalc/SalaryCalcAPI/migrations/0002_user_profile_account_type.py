# Generated by Django 3.0.3 on 2020-05-12 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SalaryCalcAPI', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_profile',
            name='account_type',
            field=models.TextField(choices=[('Free', 'Free'), ('Premium', 'Premium')], default='Free'),
            preserve_default=False,
        ),
    ]
