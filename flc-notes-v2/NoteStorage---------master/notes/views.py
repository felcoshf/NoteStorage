from django.shortcuts import render
from .models import Note

def source_page(request):
    notes = Note.objects.all()
    return render(request, 'notes/notes.html', {'items': notes})

def notes_page(request):
    note_id = request.GET.get('element_id')
    
    context = {}
    # if note_id:
    #     try:
    #         context['dropped_item'] = Note.objects.get(id=note_id)
    #     except Note.DoesNotExist:
    #         context['dropped_item'] = None
            
    return render(request, 'notes/notes.html', context)
