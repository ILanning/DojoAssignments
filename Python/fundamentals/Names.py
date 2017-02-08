print "--Part 1--"
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
for i in xrange(0, len(students)):
    print students[i]["first_name"], students[i]["last_name"]

print "\n--Part 2--"
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }
def listNames(arr):
     for i in xrange(0, len(arr)):
         length = len(arr[i]["first_name"]) + len(arr[i]["last_name"])
         print i+1, "-", arr[i]["first_name"], arr[i]["last_name"], "-", length

print "Students"
listNames(users["Students"])
print "Instructors"
listNames(users["Instructors"])
