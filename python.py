#Load and show an image with Pillow
from PIL import Image
import sys

img = Image.open('jamesSkon.jpg').convert('L')
WIDTH, HEIGHT = img.size; 
#Display image
img.show()
#Save image
img.save('jamesSkon_hundo_gs.jpeg')

#Get basic details about the image
print(img.format)
print(img.mode)
print(WIDTH)
print(HEIGHT)

data = list(img.getdata()) # convert image data to a list of integers 
# convert that to 2D list (list of lists of integers) 
#putting the info in a list
data = [data[offset:offset+WIDTH] for offset in range(0, WIDTH*HEIGHT, WIDTH)]
#converting into a two d list ig

for row in data:
    print(' '.join('{:3}'.format(value) for value in row))

print("If this works we gucci\n")



original_stdout = sys.stdout # Save a reference to the original standard output

with open('pixelValuesJS.txt', 'w') as f:
    sys.stdout = f 
    for i in range (HEIGHT):
      for j in range(WIDTH):
        print(data[i][j])
    sys.stdout = original_stdout 