//* method Number in javascript

//==============================================================================
//*  1) Number.isNaN() or inNaN()
/*
    *) The Number.isNaN() method determines whether the passed value is NaN and its type is Number. 
    *) It is a more robust version of the original, global isNaN().
    *) if value == NaN return true else return false
    *) return boolean (true or false)

    *) syntax
    Number.isNaN(value)

    let number = 1/"a"
    console.log(number)
    conosle.log(Number.isNaN(number)) -->(return) true

    console.log( isNaN(NaN) )  -->(return) true
*/
//==============================================================================
//*  2) Number.isFinite() or isFinite()
/*
    *) The Number.isFinite() method determines whether the passed value is a finite number 
    *) that is, it checks that the type of a given value is Number, and the number is neither positive Infinity, negative Infinity, nor NaN.
    *) if number !== infinity return true else return false
    *) return boolean (true or false)

    *) syntax
    Number.isFinite(value)

    let number_one = 1 / 0 
    let number_two = 1/ 5
    console.log(number_one)                             -->(return) Infinity
    console.log(number_two)                            -->(return) 0.2
    conosle.log(Number.isFinite(number_one)) -->(return) false
    conosle.log(Number.isFinite(number_two)) -->(return) true
*/
//==============================================================================
//* 3) Number.isInteger() or isInteger()
/*
    *) The Number.isInteger() method determines whether the passed value is an integer.
    *) return boolean (true or false)

    *) syntax
    Number.isInteger(value)

    let name_one = 10
    console.log(Number.isInteger(name_one))  -->(return)  true

    let name_two = "ali"
    console.log(Number.isInteger(name_two))  -->(return)  false
*/
//==============================================================================
//*  4) Number.isSafeInteger() 
/*
    *) The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.
    *) safe integer --> (Math.pow(2,53) - 1)
    *) return boolean (true or false)

    *) syntax
    Number.isSafeInteger(value)

    let number_one = Math.pow(2 , 53)
    let number_two = Math.pow(2, 53) - 1

    console.log(Number.isSafeInteger(number_one))  --->(return) false
    console.log(Number.isSafeInteger(number_two))  --->(return) true

*/
//==============================================================================
//*  5) Number()
/*
    *) Converts to as many as possible
    *) Define a new number using the class

    *) syntax
    Number(value)
    new Number(value)

    let number_one = new Number(12)
    console.log(number_one)

            --------- example

    let name = "10"
    let reuslt = Number(name)
    console.log(result)
    console.log(typeof result)
*/
//==============================================================================
//*  6) valueOf()
/*
    *) return value 

    *) syntax
    valueOf(varible)

    let number = 10
    console.log(number.valueOf())  -->(reutrn) 10
*/
//==============================================================================
//*  7) toFixed()
/*
    *) converts a number into a string, 
    *) rounding to a specified number of decimals.
    *) if the desired number of decimals are higher than the actual number, zeros are added to create the desired decimal length. (12.2 == 12.20000)
    *) default digits == 0
    *) The number is rounded if necessary, 
    *) syntax
    toFixed([digits])

    let number_one = 1234.676
    let number_two = 1234.273

    let result_one = number_one.toFixed()
    console.log(result_one)                 ---->(return) 1235
    console.log(typeof result_one)     ---->(return) string
    let result_one = number_one.toFixed()
    console.log(result_one)                 ---->(return) 1234

    let result_three = number_one.toFixed(2) 1234.68
    let result_three = number_one.toFixed(2) 1234.67

*/
//==============================================================================
//*  8) toExponential()
/*
    *) converts a number into a string, 
    *) The number is rounded if necessary, 
    *) default show Full number
    *) An integer specifying the number of digits after the decimal point. 

    let number = 77.1234;

    console.log(number.toExponential())   ---->(return)  7.71234e+1
    console.log(number.toExponential(4))  ---->(return)  7.7123e+1
    console.log(number.toExponential(2))  ---->(return) 7.71e+1
*/
//==============================================================================
//*  9) toPrecision()
/*
    let num = 13.3714;
    console.log( num.toPrecision())
    console.log(num.toPrecision(2))
    console.log(num.toPrecision(3))
    console.log(num.toPrecision(10))
*/
//==============================================================================
