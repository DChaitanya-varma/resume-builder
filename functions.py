def calc(a,b):
    sum=a+b
    print(sum)
    return sum

calc(1,5)

def cal_sum(a,b):
     print(a+b)
     return a+b

cal_sum(2,6)

def print_hello():
    print("hello")

output = print_hello()
print(output)

# avg of 3 numbers

def cal_avg(a,b,c):
    sum=a+b+c
    avg=sum/3
    print(avg)
    return avg

cal_avg(98,9,95.5)

#built in func
#print()len()type()reange()

print("dcvarma ")#sep=""
#end="\n"

def cal_product(a=2,b=8):
    print(a*b)
    return a*b

cal_product()

num=[1,33,3,3,3,6,6,45,95,95]

# def print_len(list):
#     print(len(list))

# print_len(num)

x=int(input("enter a number:"))

def type_num(numb):
    if x%2==0:
            print("EVEN")
    else:
         print("ODD")

type_num(x)