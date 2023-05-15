from mega import Mega
import os

def sendToMega():
    mega = Mega()
    Mega_email="devdjangoreact@gmail.com"
    Mega_password="gT4pGdPTWS-kQhP"
    m = mega.login(Mega_email, Mega_password)
    
    # m.create_folder('new_folder') 
    # folder = m.find('new_folder')
    # folder_path = "/home/dev/django-on-docker-letsencrypt/app"
    # files = os.listdir(folder_path)
    # files = sorted(files, key=os.path.getmtime)
    # m.upload(files[-1], folder[0])
    
    
    file = m.find('_test.txt')
    m.download(file)


sendToMega()