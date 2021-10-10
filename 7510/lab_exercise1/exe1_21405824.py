# ZhuHengxi_21405824

print('Please input the 1st number: ')
a = input()
print('Please input the 2nd number: ')
b = input()
print('Please input the 3rd number: ')
c = input()
if not (a.isdecimal() and b.isdecimal() and c.isdecimal()):
 print('Invalid inputs!')
 exit()
a = int(a)
b = int(b)
c = int(c)

def average(a, b, c):
    d = (a + b + c)/3
    return d

def middle(a, b, c):
    max = a
    min = a
    if a > b:
        min = b
    else:
        max = b

    if c > max:
        midd = max
        max = c
    elif c < min:
        midd = min
        min = c

    return midd

avg = average(a, b, c)
print('The average is', avg)
mid = middle(a, b, c)
print('The middle number is', mid)