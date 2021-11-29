//*) Generator  in javascript

//==============================================================================
//*) Generator
/*
    *) The Generator function is a function that when executed, we can stop it and continue later.
    *) Normal functions must be executed to the end when they start, and we have no control over them until the end.
    *) It is interesting to know that behind-the-scenes async functions use Generator functions.
   *) How to write Generator functions is as follows:
   	function* numbers() {
	    // ...
	}
    *) Note the asterisk * before the function name.
    *) In these functions, we use yield instead of return:

    function* numbers() {
	    yield 1;
	    yield 2;
	    yield 3;
	}
    console.log(numbers()) -->(return) Object [Generator] {}

    *) As we can see, an object is returned to us. This object contains a method called next () that returns the yielded values each time we call it:

    function* numbers() {
	    yield 1;
	    yield 2;
	    yield 3;
	}
	const items = numbers();
	console.log(items.next()) -->(return)  Object { value: 1, done: false }

    *)With the first next () we will have the first yielded value and as we can see the output of this method is an object with two properties value and done.

    *) The value property contains the yield.
    *) The done property, which is a boolean, tells us whether the function is finished or not.
    *) If all values are yielded, with the next call (), the value done is equal to true.

    function* numbers() {
	    yield 1;
	    yield 2;
	    yield 3;
	}
	const items = numbers();
	items.next(); // { value: 1, done: false }
	items.next(); // { value: 2, done: false } 
	items.next(); // { value: 3, done: false } 
	items.next(); // { value: undefined, done: true }
	items.next(); // { value: undefined, done: true }


    *) Generator functions are automatically Iterable.
    *)They can be scrolled by the for..of loop. Iterable is an object that can be scrolled like an array and can be used in the for..of loop.
    *) The content of a member of the Iterable object is {value: ..., done: false | true و and when it is in the for..of loop, the loop continues to scroll until the done value is false and the value of the item .value returns

    function* numbers() {
	  yield 1;
	  yield 2;
	  yield 3;
	}
	const items = numbers();
	for (num of items) {
	  console.log(num); 
	}
	----->(return) 
	1
    2
	3

    *) What happens if we use return instead of yield?

    function* numbers() {
	  yield 1;
	  return 2;
	  yield 3;
	}
	 
	const items = numbers();
    console.log(items.next())--->(return)  { value: 1, done: false }
    console.log(items.next())--->(return)  { value: 2, done: true }
    *) As we can see, the value done is equal to true. So apparently the function work is over
    console.log(items.next())--->(return)  { value: undefined, done: true }

    *) As we can see, post-return yields are no longer taken into account.

    function* numbers() {
	  yield 1;
	  yield 2;
	  yield 3;
	  return 4;
	}
	const items = numbers();
	for (num of items) {
	  console.log(num)
	}
    --->(return)
    1
	2
	3
    

    *) Because these functions are Iterable, we can distribute the yielded values in an array with the Spread operator:
    function* numbers() {
	  yield 1;
	  yield 2;
	  yield 3;
	}
	 
	console.log([...numbers()]) --->(return) [1, 2, 3]

*/
//==============================================================================
//*) example best generator
/*
    function* idMaker() {
	  let i = 0;
	  while (true) {
	    yield  ++i
	  }
	}
	const ids = idMaker();
	console.log(ids.next().value)--->(return)  1
	console.log(ids.next().value)--->(return)  2
	console.log(ids.next().value)--->(return)  3
*/
//==============================================================================
//*) These functions can also take parameters:
/*
    function* pow(number, limit) {
	  let pow = 0
	  while (pow < limit) {
	    yield Math.pow(number, pow++)
	  }
	}
	 
	console.log([...pow(2, 5)]) --->(return) [ 1, 2, 4, 8, 16 ]
	console.log([...pow(3, 3)]) --->(return) [ 1, 3, 9 ]
	console.log([...pow(5, 5)]) --->(return) [ 1, 5, 25, 125, 625 ]
*/
//==============================================================================
