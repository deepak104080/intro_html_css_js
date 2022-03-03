console.log('Console in external script file'); //Will be getting on page load


function fnclick() {
    console.log('function clicked...');

    //select elements value
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;

    console.log('firstName - ', firstName, 'lastname - ', lastName);

    //store in local storage
    localStorage.setItem('fname', firstName);
    localStorage.setItem('lname', lastName);

    //fetch from locastorage
    let fname = localStorage.getItem('fname');
    console.log(fname);

    //write in DOM
    document.getElementById('text_storage').textContent = fname;


    //Other ways of selecting elements
    // document.getElementsByClassName('header')
    // document.getElementsByTagName('div')
    // document.querySelector('div.container')
    // document.querySelectorAll('.header')
}
