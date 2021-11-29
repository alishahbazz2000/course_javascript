//*) Closure  in javascript

//==============================================================================
//*) closure
/*
    *) کلاژر (Closure) چیزی بیشتر از یک تابع معمولی نیست. اما چیزی هست که باید درک بشه
    *) نوشتن یک تابع داخل  یک تابع دیگه هست
    *) تابعی که یک تابع دیگه رو ریترن میکند


    function jump(){
        return function(){
            console.log("hello")
        }
    }
    jump()  -->(this closure)
    *) صدا زدن تابع درونی jump
    jump()();

    *) مهمترین نکته این هست که این چه مسایلی رو حل میکند و یا کجا استفاده میشود
    *) دانستن فهم متغییر های سراسری و محلی
    *) با استفاده از این میتوانیم دیتای امنی داشته باشیم هم از بیرون برنامه قابل تغییر نیست
    *) Closure یا کلاژر، به تابعی گفته میشه که توی یک تابع دیگه تعریف میشه که می‌تونه علاوه بر متغیرهای حوزه‌ی خودش، به متغیرهای حوزه‌ی تابع بیرونی هم دسترسی داشته باشه.

    function counter(){
        let init =  0
        return  function(){
            init ++
            return init
        }
    }

    const  jump_one = counter()
    console.log(jump_one())
    console.log(jump_one())
    console.log(jump_one())
    --->(return)
    1
    2
    3

    const  jump_two = counter()
    console.log(jump_two())
    console.log(jump_two())
    console.log(jump_two())
    console.log(jump_two())
    --->(return)
    1
    2
    3
    4

    cosole.log(init)--->(encapsulation) error

    ---- or not use closure local varible
    
    function counter () {
        let init = 0
        init ++
        return init
    }
    console.log(counter())
    console.log(counter())
    console.log(counter())
    --->(return)
    1
    1
    1

    ---- or not use closure  global varible

    let init = 0
    function counter (){
        init ++
    }
    counter()
    counter()
    counter()
    --->(return)
    1
    2
    3

    function speed (){
        init ++
    }
    speed()
    speed()
    speed()
    speed()
    --->(return)
    4
    5
    6
    7


*/
//==============================================================================
//*)     چرا از کلاژر استفاده کنیم؟
/*
    همونطور که دیدیم استفاده از متغیرهای سراسری مشکلات خاص خودشون رو دارن. اطلاعات امن نیستن و میشه توسط همه‌ی قسمت‌های برنامه اونها رو دستکاری کرد. وقتی از کلاژر استفاده کردیم، متغیر counter توی تابع init به یک پراپرتی private تبدیل شد. یعنی فقط توی خود تابع قابل دیدن هست. و مهمترین کاربرد کلاژرها همین هست: امنیت و ثبات اطلاعات!

*/