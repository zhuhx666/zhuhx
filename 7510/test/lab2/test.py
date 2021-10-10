print('Please input your age')
a = input()
try:
    age = float(a)
    if age >= 18:
        print('You are not a child anymore!')
    else:
        print('Hey, be a good child!')
except ValueError:
    print('Invalid input')
