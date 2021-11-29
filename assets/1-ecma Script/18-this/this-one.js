let bar  = {
    name : "ali shahbaz",
    info : function (){
        console.log(this)
        console.log(this.name)
    }
}

// question one 
bar.info()
setTimeout(bar.info,1000)
// question two
bar.info()
setTimeout(bar.info.bind(bar),1000)