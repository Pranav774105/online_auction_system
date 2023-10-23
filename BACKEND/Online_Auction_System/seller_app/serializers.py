#from rest_framework import serializers
#from .models import ProductInformation, ProductImages


#class ProductInformationSerializer(serializers.ModelSerializer):

#    class Meta:
#        model = ProductInformation
#        fields = ['product_id', 'product_name', 'product_description', 'product_manufacture_year', 'product_base_price', 'owner', 'product_verify',]
#        read_only_fields = ('product_id',)
        

#class ProductImagesSerializer(serializers.ModelSerializer):
#    product = ProductInformationSerializer(many=True)
#    class Meta:
#        model = ProductImages
#        fields = ['product_images', 'product']
#        read_only_fields = ('product',)
#        depth = 2

from rest_framework import serializers
from .models import ProductInformation, ProductImages
from auction_app.models import User


class ProductImagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductImages
        fields = '__all__'

class ProductInformationSerializer(serializers.ModelSerializer):
    product_images = serializers.ListField(child=serializers.FileField(), write_only=True)
    owner = serializers.HiddenField(default=serializers.CurrentUserDefault())
    #product_varify = serializers.BooleanField()
    product_imagess = ProductImagesSerializer(read_only=True, many=True)

    class Meta:
        model = ProductInformation
        fields = '__all__'

    def create(self, validated_data):
        product_images = validated_data.pop('product_images')
        product = ProductInformation.objects.create(**validated_data)
        for pro_img in product_images:
            obj = ProductImages.objects.create(product=product, product_image=pro_img)
        return product