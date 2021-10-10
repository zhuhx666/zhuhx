from firebase import Firebase
config = {...}
myfirebase = Firebase(config)
storage = myfirebase.storage()


def download(src, dst):
    try:
        storage.child(src).download(dst)

    except AttributeError as x:
        print(f'{src} does not exist')
        print('Error detail: ', x)
        return

    except FileNotFoundError as x:
        print('Invalid destination')
        print('Error detail: ', x)
        return

    except PermissionError as x:
        print(f'{dst} is write-protected')
        print('Error detail: ', x)
        return

    except IsADirectoryError as x:
        print(f'{dst} is a directory')
        print('Error detail: ', x)
        return

    finally:
        print('task is ended')
        
    print(f'{path} is downloaded to {to}.')


print('Please input the path of the file you want to delete:')
path = input()
print('Please input the destination for storing the downloaded file:')
to = input()
if len(path) == 0 or len(to) == 0:
    print('You must input the source path and the destination')
    exit()
download(path, to)
