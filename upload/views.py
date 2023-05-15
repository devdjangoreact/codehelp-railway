from django.shortcuts import render
from django.core.files.storage import FileSystemStorage


def image_upload(request):
    if request.method == "POST" and request.FILES["image_file"]:
        image_file = request.FILES["image_file"]
        fs = FileSystemStorage()
        filename = fs.save(image_file.name, image_file)
        image_url = fs.url(filename)
        print(image_url)
        return render(request, "upload.html", {
            "image_url": image_url
        })
    return render(request, "upload.html")

def terminal(request):
    # Spawn a new terminal process
    process = subprocess.Popen(['python', 'manage.py', 'shell'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    # Get the output and errors from the process
    output, errors = process.communicate()

    # Return the output to the user
    return HttpResponse(output)