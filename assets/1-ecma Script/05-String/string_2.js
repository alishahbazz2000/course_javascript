// *)  method string in javascript

//==============================================================================
//*  1) concat()
/*
    *) To collect two or more strings
    *)  Is equal to = 
    let name = "ali"
    let family = "shahbaz"
    let age = 20

    let result = name.concat(family,age)                     ---> "alishahbaz20"

                    --or--

    *,... --> seperator
    let result_two = name.concat("*",family , "#" , age)   ---> "ali*shahbaz#20"
*/
//==============================================================================
//*  2) indexOf()
/* 
    *) It starts searching from the beginning
    *) inverse method lastIndexOf() 
    *) The second parameter can control where to start the search
    *) It can return the first search of a word or it can return the first search of a character
    *) Returns the first character in finding string
    *) If this method(indexOf) does not find any value, it returns -1
    *) return number

    indexOf(parameter_one)

    let name = "ali shahbaz"
    console.log(name.indexOf('a'))     --->  iindex = 0
                        ------------------------------------
    indexOf(parameter_one , parameter_two(optional))

    console.log(name.indexOf('a' , 5))   ---> start search as index ==5  (result)  6

*/
//==============================================================================
//*  3) lastIndexOf()
/* 
    *) It starts searching from the end
    *) inverse method indexOf() 
    *)If this method(lastIndexOf) does not find any value, it returns -1


    let name = "ali shahbaz"
    console.log(name.lastIndexOf('a'))     ---> index = 9

*/
//==============================================================================
//* 4) toUppercase() and toLowercase()
/*
    *) Convert all characters in a string to uppercase and lowercase letters

    let name = "Ali sHahBaz"

    let result_one = name.toUpperCase()  ---> ALI SHAHBAZ
    let result_two = name.toLowerCase()  ---> ali shahbaz
*/
//==============================================================================
//*  5) charAt(number)
/* 
    *) This is the reverse of method indexOf(). This field takes the index and returns the character

    let name = "ali shahbaz"
    console.log(name.indexOf('a')) ---->(return) 0

    console.log(name.charAt(0))     ---->(return) 'a'

*/
//==============================================================================
//* 6) charCodeAt(index)
/*
    *) The charCodeAt() method returns the Unicode of the character at the specified index in a string.
    *) return code ascii (number)
    *) default index = 0
    *) If our index value is out of range, our output value is NaN
    *) charCodeAt() will always return a value that is less than 65536.

    let str = "HELLO WORLD";
    let n = str.charCodeAt(0);
    console.log(n)
    let m = str.charCodeAt(str.length - 1)
    console.log(m)

    let default = str.charCodeAt() ===  str.charCodeAt(0);
    console.log(default)

    let result = str.charCodeAt(30)
    console.log(result) ---->(return) NaN 
*/
//==============================================================================
//* 7) slice()
/*
    *) This method takes a number and splits the string and returns a new string

    let name = "ali shahbaz"

    1) slice(parameter_one)
    console.log(name.slice(5))     ---> (return)  "hahbaz"

    2) slice(parameter_one , parameter_two)
    console.log(name.slice(5 , 8)) ---> (return)  "hah"
    (description charcter 5 , 6 , 7 return  character 8 not clude)
*/
//==============================================================================
//* 8) substr()
/*
    *) The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
    *) Works well for negative numbers

    *) syntax
    substr(indexStart , [indexEnd])  (indexEnd ==> optional)

    let name = "ali shahbaz"
    let result_one = name.substr(5)
    console.log(result_one)   ---->(return) "hahbaz"

    let result_two = name.substr(2,6)
    console.log(result_two)   ---->(return) "i sh"

    let result_three = name.substr(-3)
    console.log(result_two)   ---->(return) "baz"
*/
//==============================================================================
//* 9) substring()
/*
    *) The substring () method returns the part of the string between the start and end indexes, or to the end of the string.
    *) Does not work properly for negative numbers

    *) syntax
    substring(indexStart , [indexEnd])  (indexEnd ==> optional)

    let name = "ali shahbaz"
    let result_one = name.substring(5)
    console.log(result_one)   ---->(return) "hahbaz"

    let result_two = name.substring(2,6)
    console.log(result_two)   ---->(return) "i sh"

    let result_three = name.substr(-3)
    console.log(result_two)   ---->(return) "ali shahbaz"
*/
//==============================================================================
//* 10) search()
/* 
    *)The search () method executes a search for a match between a regular expression and this String object.
    *) Returns -1 if the value of your existence is
    *) return number --> index first event find string

    *) syntax 
    search(regexp or string)

    let name = "ali shahbaz"
    let result_one = name.search("ah")
    console.log(result_one)   ---->(return) 6

    let result_two = name.search("an")
    console.log(result_two)   ---->(return) -1
*/
//==============================================================================
//* 11) endsWith()
/*  
    *) The endsWith () method determines whether a string ends with characters from a specified string
    *) Condition
    *) Returns true or false.

    *) syntax
    endsWith(search string , length string)

    *) when length ---> (string start) 0 until length

    let str = "Hello World! Hello";
    let result = str.endsWith("Hello")
    console.log(result)  --->(return) true

    let str = "Hello World! Hello";
    let result = str.endsWith("Hello" , 12) -->Included("Hello World!")
    console.log(result)  --->(return) false

*/
//==============================================================================
//* 12) startsWith()
/*
    *) The startsWith () method determines whether a string begins with the characters of a specified string
    *) Condition
    *) Returns true or false.

    *) syntax
    startsWith(search string , length string)

    *) when length ---> (string start) length until string.length-1

    let str = "Hello World! Hello";
    let result = str.startsWith("Hello")
    console.log(result)  --->(return) true

    let str = "Hello World! Hello";
    let result = str.endsWith("Hello" , 13) -->Included(" Hello")
    console.log(result)  --->(return) false
*/
//==============================================================================

//* 13) includes()
/*
    *) The includes() method determines whether a string contains the characters of a specified string.
    *) This method returns true if the string contains the characters, and false if not.
    *) The includes() method is case sensitive.
    *) return true or false
    *) syntax
    string.includes(searchvalue, start)

    let data = "Hello world, welcome to the universe.";
    let result = data.includes("world");
    console.log(result)  -->(return) true

    let data = "Hello world, welcome to the universe.";
    let result = data.includes("World");
    console.log(result)  -->(return) false

    let data = "Hello world, welcome to the universe. world";
    let result = data.includes("world" ,12);
    console.log(result)  -->(return) true

    let data = "Hello world, welcome to the universe.";
    let result = data.includes("world" ,12);
    console.log(result)  -->(return) false

*/
//==============================================================================
//* 14) replace()
/*
    *) Replace one string or character with another string or character
    *) replace first Event or first string
    *) The original string is left unchanged.
    *) The pattern can be a string or a RegExp
    *) syntax
    ----->replace(old_string or regex , new_string or function)

    let data = "ali shahbaz ali"
    let result = data.replace("ali","nima")
    console.log(result)      ----->(return) "nima shahbaz ali"

    *) replace all Event or all string
    *) global  --->(use) /old_strig/g
    
    let data = "ali shahbaz ali"
    let result = data.replace(/ali/g,"nima")
    console.log(result)      ----->(return) "nima shahbaz nima"   

    *) case-insensitive
    let data = "Ali shahbaz"
    let result = data.replace(/ali/i,"nima")
    console.log(result)      ----->(return) "nima shahbaz"
    
    *) case-insensitive and global
    let data = "Ali shahbaz ali"
    let result = data.replace(/ali/ig,"nima")
    console.log(result)      ----->(return) "nima shahbaz nima"   

    *) function
    let str = "Mr Blue has a blue house and a blue car";
    let result = str.replace(/blue|house|car/gi, function (x) {
    return x.toUpperCase();
    }); -->(return) "Mr BLUE has a BLUE HOUSE and a BLUE CAR"

    *) regex 
    let name_one = /(\w+)\s(\w+)/;
    let name_two = 'John Smith';
    let result = name_two.replace(name_one, '$2, $1');
    console.log(newstr);  -->(return) "Smith, John" 
*/
//==============================================================================
//* 15) replaceAll()
/*
    *) Replace one string or character with another string or character
    *) replace all Event or all string
    *) The original string is left unchanged.
    *) The pattern can be a string or a RegExp

    let data = "ali shahbaz ali"
    let result = data.replace("ali","nima")
    console.log(result)      ----->(return) "nima shahbaz nima"
*/
//==============================================================================
//* 16) toString()
/*
    *) It turns everything into a string

    let name-one = 10
    let name_two = name_one.toString()
    console.log(name_two)              -->(return) "10"
    console.log(typeof name_tow)  -->(return) string
*/
//==============================================================================
//* 17) valueOf()
/*
    *) The valueOf() method of String returns the primitive value of a String object as a string data type. 
    *) This value is equivalent to String.prototype.toString().

    let name = "ali shahbaz"
    let result = name.valueOf()
    console.log(result)   -->(return) "ali shahbaz"
*/
//==============================================================================
//* 18) trim()
/*
    *) Used to destroy space from beginning to end

    let name = "    my name is ali    "
    console.log(name.trim())            --->(return) "my name is ali"

*/
//==============================================================================
//* 19) trimEnd()   
/*
    *) The trimEnd() method removes whitespace from the end of a string

    let name = "     my name is  ali            "
    let result = name.trimEnd()
    console.log(result)  -->(return)  "     my name is  ali"
*/
//==============================================================================
//* 20) trimStart()
/*
    *) The trimStart() method removes whitespace from the beginning of a string

    let name = "     my name is  ali            "
    let result = name.trimEnd()
    console.log(result)  -->(return)  "my name is  ali            "
*/
//==============================================================================
//* 21) repeat()
/*
    *) It repeats the string as usual
    *) syntax
    repeat(number)

    let name_one = "my name is ali"
    const result_one = name_one.repeat(2)  -->(return) my name is ali my name is ali
*/
//==============================================================================
//* 22) spilt()
/*
    *) Convert string to array by separator  --> split("sperator")

    let name = "my name is ali shahbaz"
    console.log(name.split(" ")) --->(return) ['my','name','is','ali','shshbaz]
*/
//==============================================================================
//* 23) String.fromCodePoint(code)
/*
    *) Takes the ski code and returns the letter or number or ...
    
    console.log( String.fromCodePoint(90) )  --> Z
    console.log(String.fromCharCode(97))    ----> a
*/
//==============================================================================
//* 24) codePointAt(position character)
/*
    *) return code ascii

    let str = "ali"
    console.log(str.codePointAt(0))   -->(return) 97
    console.log(str.codePointAt(1))   -->(return) 108
    console.log(str.codePointAt(2))  -->(return)  105
*/
//==============================================================================
//*) match(regexp)
/*
    *) Executes a search for a match within a string based on a regular expression. 
    *) It returns an array of information or null if no match is found.   
    
---> match(regexp) //select integers only
var intRegex = /[0-9 -()+]+$/;  
 
var myNumber = '999';
var myInt = myNumber.match(intRegex);
console.log(isInt);
---> output: 999
 
var myString = '999 JS Coders';
var myInt = myString.match(intRegex);
console.log(isInt);
---> output: null

*/
//==============================================================================
