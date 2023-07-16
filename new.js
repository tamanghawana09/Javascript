// JavaScript Where To
// The <script> Tag
/* In HTML, JavaScript code is inserted between <script> and </script> tags. 
<script>
    document.getElementById("demo").innerHTML = "My First JavaScript"
</script> */


// JavaScript Functions and Events
/* A JavaScript function is a block of JavaScript code, that can be executed when "called" for.
For example, a function can be called when an event occurs, like when the user clicks a button */

//JavaScript in <head> or <body>
/* You can place any number of scripts in an HTML document.
Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.
 */

//External JavaScript
//Scripts can also be places in external files:
//External file: myScript.js
/*
function myFunction(){
    document.getElemenById("demo").innerHTML = "paragraph changed"
}

External scripts are practical when the same code is used in many different web pages.
JavaScript files have the file extension .js
To use an external script, put the name of the script file in the src(source) attribute of a <script> tag:

<script  src ="myScript.js"></script>
 */

// you can place an external script reference in <head> or <body> as you like.
// The script will behave as if it was located exactly where the <script> tag is located.