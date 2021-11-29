let request  = new XMLHttpRequest();

// 1) open("type method(POST, GET)"  , "Url or File" , Boolean(false( not async) , true(async default)) )

request.open("Get","test.txt" , false)

//2) send()

request.send()

console.log(request)