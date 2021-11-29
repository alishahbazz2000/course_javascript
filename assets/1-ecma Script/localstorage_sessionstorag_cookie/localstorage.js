//*) Local Storage in javascript

//==============================================================================
//*) info local storage and session storage
/*
    *) Storing information in the browser
    *) It works like a small database
    *) In local storage information must be stored a string shape
    *) The locations of local storage and session storage inside inspect are inside the tab Application 

    *) Difference local storage and session storage
    *) local storage has an expiration time and is not easily erased
    *) session storage works similarly to local storage, except that if the browser is closed, the information inside it will be deleted
*/
//==============================================================================
//*) start localStorage
/*
    //*) 1) setItem()
    *) key and value to the format string
    localStorage.setItem("key","value")

    localStorage.setItem("firstName","ali")
    localStorage.setItem("lastName","shahbaz")


    //*) 2) clear()
    *) Clears all information inside it
    localStorage.clear()


    //*) 3) removeItem()
    *) Clears the data
    localStorage.removeItem("key")

    localStorage.removeItem("firstName")
    localStorage.removeItem("lastName")


    //*) 4) getItem()
    *) Returns the defined data
    localStorage.getItem("key")

    console.log(localStorage.getItem("firstName"))
    console.log(localStorage.getItem("lastName"))

    *) add multiple value in local(array , object) use JSON and method JSON(strigify , parse)
*/
//==============================================================================
//*) start sessionStorage
//*) 1) setItem()
/*
    *) key and value to the format string
    sessionStorage.setItem("key","value")

    sessionStorage.setItem("firstName","ali")
    sessionStorage.setItem("lastName","shahbaz")
*/
//==============================================================================
//*) example localStorage
/*


*/
//==============================================================================
