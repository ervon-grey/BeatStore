from core.models import Beat
from core.serializers import BeatSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def getBeats(request):
    filter_search = request.GET.get('s', None)
    if filter_search is None:
     beats = Beat.objects.all().filter(for_sale=True).order_by('-date')
    else:
     beats = Beat.objects.all().filter(for_sale=True, title__icontains=filter_search).order_by('-date')
    return Response(BeatSerializer(beats, many=True, context={'request': request}).data)


