from turtle import* 


#we want to paint a hous

#step 1: draw a square
width(7)

color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90) 
#end of square


#droving a door

forward(70)
begin_fill()
color("yellow")
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#droving1  window 

color("#897058")
penup()
goto(66, 120)
pendown()

right(60)
forward(60)
right(90)
forward(60)
right(90)
forward(60)
right(90)
forward(60)

#drowing2 window

color("#897058")
penup()
goto(130, 120)
pendown()

right(180)
forward(60)
right(90)
forward(60)
right(90)
forward(60)
right(90)
forward(60)

exitonclick()