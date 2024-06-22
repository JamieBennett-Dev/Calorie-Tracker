from django import forms
from .models import Food, Image

# Create Form Models

class FoodForm(forms.ModelForm):
    """
    A ModelForm class for adding a new food item
    """
    class Meta:
        model = Food
        fields = ['food_name', 'quantity', 'calories', 'fat', 'carbohydrates', 'protein', 'category']

    def __init__(self, *args, **kwargs):
        super(FoodForm, self).__init__(*args, **kwargs)
        for visible in self.visible_fields():
            visible.field.widget.attrs['class'] = 'form-control'

