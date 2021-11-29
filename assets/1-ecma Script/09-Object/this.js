//*) keyword this
/*
    *) It is mostly used in open and closed braces (block) --> {}
    
    *) مقدار کلمه کلیدی this، به قسمتی از کد اشاره می‌کنه که توی همین لحظه داره اجرا میشه. مقدار this یک آبجکت هست.

    *) فرض کنیم یک تابع توی جاوا اسکریپت داره اجرا میشه. برای اینکه مقدار this رو متوجه بشیم، فقط کافیه بدونیم کجا و چه جوری این تابع فراخوانی شده. ببینید اینکه یک تابع چه جوری نوشته شده و یا توی کدوم قسمت از کد تعریف شده، روی مقدار this تاثیر نداره. فقط نحوه‌ی فراخوانی اون تابع هست که مقدار this رو تعیین می‌کنه. به بیان ساده تر‌، this به صاحبش اشاره می‌کنه. ما امروز می‌خوایم بدونیم توی شرایط مختلف صاحب یا همون حوزه this چیه.

    ---------------------------------------------
    const person = {
        firstname : 'ali',
        lastname: 'shahbaz',
        age: 20,
        data : function(){
            return this.firstname + this.lastname
        }
    }
    (this --> person)
    ---------------------------------------------
    console.log(this) ---> (refrect to window(object as browser))
    ---------------------------------------------
    <button onclick = "this.style.display = 'none' ">click</button>
    --> ((this --> window) style button display = 'none')
*/
//==============================================================================