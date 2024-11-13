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

"""
{
    "id": 9,
    "tags": "Oldschool Hip Hop",
    "licenses": [
        {
            "id": 28,
            "currency": "€",
            "license_type": "B",
            "price": "25.00",
            "beat": 9
        },
        {
            "id": 29,
            "currency": "€",
            "license_type": "P",
            "price": "55.00",
            "beat": 9
        },
        {
            "id": 30,
            "currency": "€",
            "license_type": "U",
            "price": "100.00",
            "beat": 9
        }
    ],
    "artwork_thumbnail": "http://127.0.0.1:8000/media/CACHE/images/artworks/Big-2BL-2BLifestylez-2BInsert/7f23a7982e4e1102ac990f3c31939795.jpg",
    "title": "Quiet Storm",
    "duration": "00:03:37",
    "date": "2023-11-17T23:20:12.424231Z",
    "bpm": 83,
    "spotlight": false,
    "mp3_file": "http://127.0.0.1:8000/media/King_of_New_York_T2VDE3O.mp3",
    "mix_wav_file": null,
    "artwork": "http://127.0.0.1:8000/media/artworks/Big-2BL-2BLifestylez-2BInsert.jpg",
    "index": 0
}
"""
