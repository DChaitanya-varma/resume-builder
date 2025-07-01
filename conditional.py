#if-elif-else(SYNTAX)
#if(condition) :
#   Statement1
# elif(condition):
#   Statement2
# else:
#   Statement N

age=int(input("enter ur age foe liscence:"))

if(age>=18):
    print("ur are eligible for liscence")
elif(age<18):
    print("not eligible")
else:
    print("ur ageeeeeeeeeee is broken")


#grade
marks=int(input("enter ur marks:"))

if (marks>=90):
    grade="A"
elif(marks>=80 and marks<90):
    grade="B"
elif(marks>=70 and marks < 80):
    grade="C"
else:
    grade="D"

print("grade of the student->",grade)

num=int(input("enter a number:"))
if(num%2==0):
    print(num,"is even")
else:
    print(num,"is odd")


a=4
b=5
c=7
print("The greatest number is:", max(a, b, c))

num=int(input("number:"))
if(num%7==0):
    print("multiple of 7")
else:
    print("not multiple")

