message="hello" 
m="dc"
final=message+" "+m
print(final)
print(len(message))
print(len(final))
print(message[0:3])
print(message[0:])
print(message[-5:-3])
print(message.endswith("lo"))
print(message.capitalize())
message=message.capitalize()
print(m.replace("dc","dcv"))
print(message.find("l"))
print(message.count("l"))

#WAP to input user’s first name & print its length.
str1=str(input("Enter ur first name:"))
print(len(str1),str1)

#WAP to find the occurrence of ‘$’ in a String.
str2="us currency is $$$$"
print(str2.count("$"))