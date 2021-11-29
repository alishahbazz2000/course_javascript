//*)  iterator in javascript

//==============================================================================
//*) method next()
/*
    const compeny = {
        curEmployee =   0;
        employees = ['max','manu','Anna']

        next(){
            if(this.curEmployee >= this.employees.length){
                return { value: this.employees , done: true}
            }
            const returnValue = {
                value : this.employees[this.curEmployee],
                done : false
            }
            this.curEmployee ++ ;
            return returnValue
        }
    }

    console.log(compeny.next())  --->(return) {value:'max'  , done: true  }
    console.log(compeny.next())  --->(return) {value: 'manu' , done: true }
    console.log(compeny.next())  --->(return) {value: 'Anna' , done: true }
    console.log(compeny.next())  --->(return) {value: 3 , done: false }
    console.log(compeny.next())  --->(return) {value: 4 , done: false }

    ------- or
    
    let employee = compeny.next()
    while (!employee.done){
        console.log(employee.value)
        employee = compeny.next()
    }
    --->(return) max manu anna
*/
//==============================================================================
