#!C:\Python27\python.exe
# Import modules for CGI handling
#import cgi, cgitb
# Create instance of FieldStorage
#form = cgi.FieldStorage()
# Get data from fields

#first_name = form.getvalue('area')
#print("Content-type:text/html")
#print
#print("")
#print("")
#print("Hello - Second CGI Program")
#print("")
#print("")
#print("
#   Hello %s %s
#   " % (first_name))
#print("")
#print("")
#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb 

# Create instance of FieldStorage 
form = cgi.FieldStorage() 

# Get data from fields
first_name = form.getvalue('area')
print(first_name)
