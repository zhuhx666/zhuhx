def C():
    txt = 'COMP 7510'
    b = 0
    for a in txt:
        b += 1
        a = txt[b-1:b]
        print(a + '.')

C()