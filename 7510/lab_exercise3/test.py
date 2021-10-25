from kivymd.app import MDApp
from kivy.uix.screenmanager import Screen
from kivy.lang import Builder
from mandel_lib import *

class SignInScreen(Screen):
    def signIn(self):
        email = self.ids.email_field.text
        email = email.strip()
        password = self.ids.password_field.text
        password = password.strip()
        group = self.ids.group_field.text
        group = group.strip()
        
        if len(email) == 0 or len(password) == 0 or len(group) == 0:
            self.ids.label.text = \
            'Please input email, password, and discussion group ID!'
        else:
            self.ids.label.text = 'Discuss'
            print(email, password, group)

class MyApp(MDApp):
        def build(self):
            Builder.load_file('SignInScreen.kv')
            return SignInScreen()

if __name__ == '__main__':
    MyApp().run()
