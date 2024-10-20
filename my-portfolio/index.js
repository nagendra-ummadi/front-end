var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname){
    for(var tablink of tablinks){
        tablink.classList.remove('active-link')
    }

    for(var tabcontent of tabcontents){
        tabcontent.classList.remove('active-content')
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-content');

}

const sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}