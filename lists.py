#it is like a builtin dt array 

#instead of creating all the marks1,2,3,....  we can do marks=[.....]
#       [  0   1     2    3   4   ]
# marks =[94.4,87.5,95.2,33.4,45.1]
# print(marks[0])

# student=["dc",95.5,19,"hyd"]
# print(student)

# #strings->immutable
# #lists ->mutuable we can modify 
# #eg
# student[0]="chaitu"
# print(student)

# # we can also do slicing in the lists

# print(marks[1:4])
# #mtds of the list

# list=[2,1,3]

# #to add one element to the end of the list we use append
# list.append(4)
# print(list) 

#for sorting into ascendng order
# list.sort()
# print(list)

#for descending order (reverse= True)
# list.sort(reverse=True)
# print(list)

# this is for reversing the data in the list
# list.reverse()
# print(list)

#insert a new value
# list.insert(2,6)
# print(list)

# list.remove(6)
# print(list)

# list.pop(0)
# print(list)

#tuples
tup=(2,1,3,1,5,)
print(type(tup))
print(tup[0])
print(tup)

#tup methods
print(tup.index(5))

movies=[]
mov1=input("enter 1 movie:")
mov2=input("enter 1 movie:")
mov3=input("enter 1 movie:")

movies.append(mov1)
movies.append(mov2)
movies.append(mov3)
#movies.append(input("enter the ___ movie "));
print(movies)

list1=["1,2,3,2,1"]
clist=list1.copy()
clist.reverse()

if(clist==list1):
    print("palindrome",clist)
else:
    print("not palindrome")

grade=("c","d","a","a","b","a")
print(grade.count("a"))

Grade=["c","d","a","a","b","a"]
Grade.sort()
print(Grade)