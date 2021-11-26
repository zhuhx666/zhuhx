import certifi
import os
os.environ['SSL_CERT_FILE'] = certifi.where()
from kivymd.app import MDApp
from kivy.uix.screenmanager import Screen
from kivy.lang import Builder

from kivy.core.window import Window
from kivy.utils import platform
if platform in ('win', 'macosx'):
    Window.size = (414, 736)
    Window.top = 50

class ScreenA(Screen):
    def clickme(self):
        print('Oh, you click me!')
        self.show_dialog()

    def show_dialog(self):
        dialog = MDDialog(
            title = 'Dialog',
            text = 'This is a dialog window',
            buttons = [
            MDRaisedButton(
                text = 'Print',
                on_release = lambda x: print(x.text)),
            MDRaisedButton(
                text = 'Close',
                on_release = lambda x: dialog.dismiss()),
            ]
        )
        dialog.open()


from kivymd.uix.dialog import MDDialog
from kivymd.uix.button import MDRaisedButton
	


class MyApp(MDApp):
    def build(self):
        Builder.load_file('screenA.kv')
        screen = ScreenA()
        return screen
	


MyApp().run()