from django.shortcuts import render

def storage_page(request):
    return render(request, 'storage/drafts.html')