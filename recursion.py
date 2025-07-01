# def showme(n):
#     if(n==0):       #basecase:controlling the loop recursion
#         return      #base case
#     print(n)
#     showme(n-1)

# showme(5)
# #call stack  
# x=int(input("enter the numbwer:"))
# def fact(x):
#     if(x==0):
#         return 0
#     return fact(x-1)+x

# print(fact(x))


def print_list(list,idx):
    if(idx == len(list)):
        return
    print(list[idx])
    print_list(list, idx+1)

fruits=["mango","dc"]

print_list(fruits,0)