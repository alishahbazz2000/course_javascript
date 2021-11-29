//*) Getter and Setter in oop

//==============================================================================
//*) getter and setter
/*
    *) setter is used to set property and getter to read property
    *) give Value without using constrouctor
    *) 

    class Test{
        firstname;
        lastname;
        age;
        * click right --> generate --> setter and getter --> choice propery
        *  automatic create setter and getter
    }

    ----create
    class Test{
        _firstname;
        _lastname;
        _age;

        get firstname(){
            return this._firstname
        }
        set firstname(value){
            this._firstname = value
        }

        * The rest is the same
    } 

    class NumberTest{
        set num(param){
            this.numA = param[0]
            this.numB = param[1]
        }
        sum(){
            return this.numA + this.numB
        }
    }
    
    const sum = new NumberTest()
    sum.num = [10,20]
    console.log(sum.sum())
 */
//==============================================================================
