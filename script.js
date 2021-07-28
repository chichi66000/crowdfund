
/* 1) Open the navbar with the click on icon hamburger*/
let navToogle = document.getElementById('toggle')
let target = document.getElementById('navigation');

// add the class "collapsed" to menu
target.classList.add('collapsed');
// when we click sur icon, we close/ open the menu
navToogle.addEventListener('click', toggleNav)

// function to toggle the class collapsed
function toggleNav () {
        target.classList.toggle('collapsed')    

}


// 2) Open the modal to back the product
// select the buttons to open the modal
let backProject = document.querySelectorAll('.backProject');

// select the section "main" and the section modal
const main = document.getElementById('main');
const modal = document.getElementById('modal');

// add the event to the click for every button to backProject
for ( let i=0; i< backProject.length; i++ ) {
        backProject[i].addEventListener("click", function (event) {
                event.preventDefault();
                openModal();
        })
}

// add the event to close the modal with click
var closemodal = document.querySelector('.modal-close')
closemodal.addEventListener('click', openModal);

// close modal with button Esc
document.onkeydown = function(evt) {
        evt = evt || window.event
        var isEscape = false
        if ("key" in evt) {
              isEscape = (evt.key === "Escape" || evt.key === "Esc")
        } else {
              isEscape = (evt.keyCode === 27)
        }
        // if the section "main" has the class "modal-active", when we touche ESc, the modal will be close
        if (isEscape && main.classList.contains('modal-active')) {
              openModal()
        }
      };

// function openModal to back project
function openModal() {
        // we will add the class to show the modal, and active the cursor
        modal.classList.toggle('opacity-0');
        modal.classList.toggle('pointer-events-none');
        modal.classList.toggle('h-0');
        
        // add the class to the section "main" for opacity and somme style CSS for scroll and background
        main.classList.toggle('modal-active');
        main.classList.toggle('opacity-50');
        main.classList.toggle('bg-gray-200')
}

// 3) Choose the option to back the project

// graphe the button continue, input radio, input number

let pay = document.querySelectorAll('.pay');
let radio = document.querySelectorAll('.radio');
let btnContinue = document.querySelectorAll('.continue');
let backProj = document.querySelectorAll('.backProj');
let confirm = document.querySelectorAll('.confirm');

// to show the product left
let left1 = document.querySelectorAll('.left1');
let left2 = document.querySelectorAll('.left2');
let left3 = document.querySelectorAll('.left3');


// change the style of the div with event mouseenter
for (let y = 0; y< backProj.length; y++) {
        // change the style of the div with event mouseenter
        let product = {};
        backProj[y].addEventListener('mouseenter', () => {
                radio[y].checked = true;
                confirm[y].classList.remove('hidden');
                backProj[y].classList.toggle('border-gray-50');
                backProj[y].classList.toggle('border-cyen'); 

                // for the first funding without money, just send the message thankyou
                btnContinue[0].addEventListener('click', () => {
                        if (radio[0].checked) {
                                console.log("this input 0 value is " + pay[0].value);
                                // add the choice to localstorage
                                product = {
                                        name: 'Mastercraft Bamboo',
                                        price: 0
                                }
                                localStorage.setItem("product", JSON.stringify(product))
                                // go to th page contact
                                window.location.href = "formulaire.html";
                                // close the modal
                                // openModal()
                                
                        }
                        else { alert('Please select an option')}               
                })

                // for the reste of funding: get the input's value then send message thankyou
                for (let i = 1; i< pay.length; i++) {
                        pay[i].addEventListener('change', () => {
                                
                                if (  pay[i].value >= pay[i].min ) {
                                        btnContinue[i].addEventListener('click', () => {
                                                // take the input's value
                                                // send this value to the server; at this moment we haven't yet the server, so just do the console.log the value
                                                console.log("this input's value is " + pay[i].value);
                                                
                                                // add the choice to localstorage 
                                                if (i==1) {
                                                        product = {
                                                                name: 'Bamboo Stand',
                                                                price: pay[1].value
                                                        }
                                                }
                                                if (i== 2) { 
                                                        product = {
                                                                name: 'Black Edition Stand',
                                                                price: pay[2].value
                                                        }
                                                };
                                                if (i== 3) { 
                                                        product = {
                                                                name: 'Mahogany Special Edition',
                                                                price: pay[3].value
                                                        }
                                                }
                                                localStorage.setItem('product',JSON.stringify(product) )
                                                
                                                // go to the page contact
                                                window.location.href = "formulaire.html";
                                                // close the modal
                                                // openModal()

                                        })
                                }
                                if (pay[i].value < pay[i].min) {
                                        alert('Please enter a greater value')
                                }
                        } )
                        
                }

        })

        // change the style with event mousleave
        backProj[y].addEventListener('mouseleave', () => {
                radio[y].checked = false;
                confirm[y].classList.add('hidden');
                backProj[y].classList.toggle('border-gray-50');
                backProj[y].classList.toggle('border-cyen')
        })
}




// function send () {
        
//         modal.classList.toggle('opacity-0');
//         modal.classList.toggle('pointer-events-none');
//         modal.classList.toggle('h-0');

//       // we will add the class to show the modal, and active the cursor
//         thankyou.classList.toggle('opacity-0');
//         thankyou.classList.toggle('pointer-events-none');
//         thankyou.classList.toggle('h-0');
//         // thankyou.classList.toggle('h-auto');

        
// }


// verify if there is a parametre of confirm=true?
let url = window.location.href;
console.log("url " + url);
let params = window.location.search;
console.log("param "+ params);

// send a message to user => show the div of message thankyou
let thankyou = document.getElementById('thankyou');

// if the formulaire is confirm => we wll show the messag thankyou to user
if (params == "?confirm=true") {
        
        main.classList.toggle('modal-active');
        main.classList.toggle('opacity-50');
        main.classList.toggle('bg-gray-200');

      // we will add the class to show the modal, and active the cursor
        thankyou.classList.toggle('opacity-0');
        thankyou.classList.toggle('pointer-events-none');
        thankyou.classList.toggle('h-0');
}

// close modal message succes when cliking the button "Got it" 
let end = document.getElementById('end');
end.addEventListener('click', () => {
        thankyou.classList.toggle('opacity-0');
        thankyou.classList.toggle('pointer-events-none');
        thankyou.classList.toggle('h-0');
        // thankyou.classList.toggle('h-auto');


        main.classList.toggle('modal-active');
        main.classList.toggle('opacity-50');
        main.classList.toggle('bg-gray-200');
})


// 5) Bookmark this page
// no longer supported by the navigator

// 6) Formulaire
