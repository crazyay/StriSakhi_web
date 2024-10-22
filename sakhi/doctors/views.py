from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from .serializers import DoctorCategorySerializer, GetAllDocsSerializer
from .models import DoctorCategory, Doctors
from cloudinary import uploader

class DoctorCategoryCreateView(APIView):
    def post(self, request, *args, **kwargs):
        # Extract the image from request
        image = request.FILES.get('imageUrl')  # Ensure the field name matches

        if not image:
            return Response({'error': 'No image provided.'}, status=status.HTTP_400_BAD_REQUEST)

        # Upload the image to Cloudinary
        upload_result = uploader.upload(image)

        # Create a new category with the uploaded image URL
        serializer = DoctorCategorySerializer(data=request.data)
        if serializer.is_valid():
            # Save the URL from Cloudinary
            category = serializer.save(imageUrl=upload_result['secure_url'])
            return Response(DoctorCategorySerializer(category).data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


     
class GetDoctors(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = GetAllDocsSerializer

    def get_queryset(self):
        c = self.request.query_params.get('location', None)
        category = self.request.query_params.get('category', None)
        queryset = Doctors.objects.all()

        if c:
            c_lower = c.lower()
            queryset = queryset.filter(cities__contains=[c_lower])

            if not queryset.exists():
                return Doctors.objects.none()

        if category:
            try:
                category_instance = DoctorCategory.objects.get(name=category)
                queryset = queryset.filter(category=category_instance)
            except DoctorCategory.DoesNotExist:
                return Doctors.objects.none()

        return queryset.order_by('-rating')

    def get(self, request, *args, **kwargs):
        try:
            queryset = self.get_queryset()
            serializer = self.get_serializer(queryset, many=True)
            return Response({
                'message': 'Data fetched successfully!',
                'data': serializer.data,
                'status': 200,
                'status_text': 'ok'
            }, status=200)
        except Exception as e:
            return Response({
                'message': 'Error!',
                'error': str(e),
                'status': 400,
                'status_text': 'error'
            }, status=400)