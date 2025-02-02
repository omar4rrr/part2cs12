#Importing library 
import code

#Data to encode 
qr = qr.codeQRCode(version =1,
					box_size = 10,
					border = 5)

#adding data to the instance 'qr'
qr.add_data(data)

qr.add_data(data)

qr.make(fit = True)
img = qr.make_image(fill_color = 'white',
					back_color = "black")
