//*)  tag Script in html

//=============================================================================
//* <script></script>
/*
    *) JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.
    ------------ in html
    <script>
        alert( 'Hello, world!' );
    </script>

    <script src="/path/to/script.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>

    *) A single <script> tag can’t have both the src attribute and code inside.

    *) Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.

    *) That reduces traffic and makes pages faster.
    *) If src is set, the script content is ignored.

*/
//=============================================================================
