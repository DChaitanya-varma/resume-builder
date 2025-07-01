# count=1
# while count<=5:
#     print("hello")
#     count+=1
#print numbers 1 to 5

# i=5
# while i>=1:
#     print(i)
#     i-=1
# print("loop ended")

# i=1
# while i<=100:
#     print(i)
#     i+=1

# a=100
# while a>=1:
#     print(a)
#     a-=1

# n=int(input("enter n:" ))
# i=1
# while i<=10:
#     print(n*i)
#     i+=1 

# nums=[1, 4, 9, 16, 25, 36, 49, 64, 81,100]
# #traverse ->travelling
# idx=0
# while idx<=len(nums)-1:
#     print(nums[idx])
#     idx+=1

# tup=(1, 4, 9, 16, 25, 36, 49, 64, 81,100)

# x=int(input("enter the value:"))
# i=0
# while i < len(tup):
#     if(tup[i]==x):
#         print("found",i)
#     else:
#         print("enter crt value:")
#         break
#     i+=1

# i=1
# while i<=10:
#     if(i%2!=0):
#           i+=1
#           continue  #skip
#     print(i)        #break have a kitkat iit will break
#     i+=1
# tup= (1,2,72,36,35,34)

# for num in tup:
#     print(num)

# str="dcvarma"
# for char in str:
#     if(char=="o"):
#         print("o found")
#         break
#     print(char)
# else:
#     print("END")

# list=[1, 4, 9, 16, 25, 36, 49, 64, 81,100]

# for num in list:
#     print(num)
# Search for a number x in this tuple using loop:

# [1, 4, 9, 16, 25, 36, 49, 64, 81,100]
# x=int(input("enter the value of x:"))
# tup=(1, 4, 9, 16, 25, 36, 49, 64, 81,100)
# idx=0
# for val in tup:
#     if(val==x):
#         print(val,"found at",idx)
#         idx+=1
#     print(val)
# else:
#     print("END")

#range
# n= int(input("enter the number:"))

# for i in range(1,11):
# #     print(n*i)
#     pass

n=4
fact=1
for i in range(1,n+1):
    fact*=i
print(fact)
