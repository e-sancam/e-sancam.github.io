from msilib.schema import File
import turtle

t = turtle.Turtle()


t.write("Teoribygget". rjust(30))
t.forward(200)
t.left(90)

t.forward(100)
t.left(90)

t.forward(200)
t.left(90)

t.forward(100)
t.left(90)


###2

t.penup()
t.goto(0 , -150)
t.pendown()

t.forward(50)
t.left(90)

t.forward(120)
t.left(90)

t.forward(50)
t.left(90)

t.forward(120)
t.left(90)


t.write("Hall 1". rjust(10))
###3

t.penup()
t.goto(120, -150)
t.pendown()

t.forward(50)
t.left(90)

t.forward(100)
t.left(90)

t.forward(50)
t.left(90)

t.forward(100)
t.left(90)

t.write("Hall 2". rjust(10))
###4

t.penup()
t.goto(0, -220)
t.pendown()

t.forward(50)
t.left(90)

t.forward(40)
t.left(90)

t.forward(50)
t.left(90)

t.forward(40)
t.left(90)

###5
t.write("Hall 3". rjust(60))
t.penup()
t.goto(120, -220)
t.pendown()

t.forward(150)
t.left(90)

t.forward(40)
t.left(90)

t.forward(150)
t.left(90)

t.forward(40)
t.left(90)

