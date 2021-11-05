from kivymd.app import MDApp
from kivy.uix.screenmanager import Screen
from kivy.lang import Builder
from mandel_lib import *

from kivy.core.window import Window
from kivy.utils import platform
if platform in ('win', 'macosx'):
    Window.size = (414, 736)
    Window.top = 50

class InputScreen(Screen):
    def register(self):
        fullname = self.ids.txt_fullname.text
        emailaddress = self.ids.txt_emailaddress.text
        password = self.ids.txt_password.text
        phonenumber = self.ids.txt_phonenumber.text
        print(f'You inputted: {fullname}/{password}/{emailaddress}/{phonenumber}.')

    def clear(self):
        self.ids.txt_fullname.text = ''
        self.ids.txt_emailaddress.text = ''
        self.ids.txt_password.text = ''
        self.ids.txt_phonenumber.text = ''
        

    def cancel(self):
        self.ids.txt_fullname.text = ''
        self.ids.txt_emailaddress.text = ''
        self.ids.txt_password.text = ''
        self.ids.txt_phonenumber.text = ''
        print('CANCEL')

class MyApp(MDApp):
    def build(self):
        Builder.load_file('exe3_21405824.kv')
        screen = InputScreen()
        return screen

MyApp().run()
