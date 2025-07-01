info={
    "key"  : "value",
    "name" : "DC",
    "cgpa" : 8.26,
    'is_adult' :False,
     96:69
}

print(info)
print(info["name"])
info["name"]="dalapthirao cvarma"
print(info["name"])
print(info)

null_dict={}
print(null_dict)

#nested dict
student={
    "name":"dc",
    "score":{
        "maths":98,
        "physics":69,
        "chem":99
    }
}
print(student["score"]["chem"])#nested output
print(student["score"])

#dict methods
print(student.keys())       #dict_keys(['name', 'score'])
#even we can typrcast into the list
print(list(student.keys()))

#return all values
print(student.values())     #dict_values(['dc', {'maths': 98, 'physics': 69, 'chem': 99}])


#return all the pairs

print(student.items())      #dict_items([('name', 'dc'), ('score', {'maths': 98, 'physics': 69, 'chem': 99})])
pairs=(list(student.items()))

print(pairs[0])

#returns the value of the key 
print(student["name"])      #if i misplace something it will give the fucking error
print(student.get("name"))  #for the mtds wwwe wont get error ->null value

#to add new fucking things 
new_dict={"city" : "hyd"}
student.update(new_dict)
print(student)


#SETS
#each element in the set must be unique and immutable(no edit )

sett={1,2,3,4,2,2,2,"dc","ddc","hello"}     #set gives the fucking unordered shit o/p
#it ignores the duplicates
print(sett)
print(len(sett))

# collection={} #emptyt dict not empty set 
collection=set() #empty set
print(collection)

#mtds of sets
#difference is set ka elements to immutable aur to sets are mutable hotahai

collection.add(1)   #add anything sstring tuple but not list->unhasable type
print(collection)

# collection.remove(1)
# print(collection)

# sett.clear()  #empties the set
print(sett)

# collection.pop()
# print(collection)

sett.union(collection)


print(sett.intersection(collection))


dictonary={
    "table":["a lind of furniture","list of facts"] #multiple vlaues for a key can be stored in the list
}

setttt={"py","java",'c++',"py","js","java","py","java","c","c++"}
print(len(setttt),setttt)


# marks={}
# x=int(input("enter phy:"))
# marks.update({"phy": x})
# print(marks)


se={
    ("int",9),
    ("float",(9.0))
}
print(se)