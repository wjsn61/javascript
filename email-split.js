const email = "codecamp@gmail.com"
undefined
email.includes("0")
false
email.includes("@")
true
email.split("0")
['codecamp', 'gmail.com']
email.split("0")[0]
'codecamp@gmail.com'
email.split("0")[1]
undefined
let userMail = email.split("@")[0]
undefined
usermail
'codecamp'
let campany = email.split("@")[1]
undefined
company
'gmail.com'
let maskingmail = []
undefined
maskingmail.push(usermail[0])
1
maskingmail.push(usermail[1])
2
maskingmail.push(usermail[2])
3
maskingmail.push(usermail[3])
4
maskingmail
    (4)['c', 'o', 'd', 'e']
maskingmail.push("*")
5
maskingmail.push("*")
6
maskingmail.push("*")
7
maskingmail.push("*")
8
mas
VM2339: 1 Uncaught ReferenceError: mas is not defined
at < anonymous >: 1: 1
    (anonymous) @VM2339: 1
maskingmail
    (8)['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingmail.join("-")
'c-o-d-e-*-*-*-*'
maskingmail.join("/")
'c/o/d/e/*/*/*/*'
maskingmail.join("")
'code****'
maskingmail.join("") + "@" + company
'code****@gmail.com'
let result = maskingmail.join("") + "@" + company
undefined
result
'code****@gmail.com'
result
'code****@gmail.com'
result
'code****@gmail.com'