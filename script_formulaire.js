let message = document.getElementById('thankyou');
let main1 = document.getElementById('main');

let formumaire = document.getElementById('formulaire');
formulaire.addEventListener ('submit', function valider (e) {
    e.preventDefault();

    // get the elements of formulaire
    let name = document.getElementById('name');
    let tel = document.getElementById ('tel');
    let email = document.getElementById ('email');
    let address = document.getElementById ('address');

    // validation the informations
    let tel_validation = /[0-9]{10}/;   // tel with 10 numbers;
    let email_validation = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;     // format of email
    let name_validation =/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/i                                   //  format name without number
    let address_validation = /^[a-zA-Z0-9\s,.'-]{3,}$/ 

    // check the input of formulaire

    if (name_validation.test(name.value) == false) {
        console.log("name: " + name.value); 
        alert("name : format invalid");
        e.preventDefault (); e.stopPropagation ();}

    if (tel_validation.test(tel.value) == false) { 
        alert("tel : format invalid");
        e.preventDefault (); e.stopPropagation ();}

    if (email_validation.test(email.value) == false) { 
        alert("email : format invalid");
        e.preventDefault (); e.stopPropagation ();}

    if (address_validation.test(address.value) == false) { 
        alert("address : format invalid");
        e.preventDefault (); e.stopPropagation ();}

    // if all is OK => send to the serveur
    else {
        // send the informations of client to the server
        const data = {
            name: name.value,
            address: address.value,
            tel: tel.value,
            email: email.value,
        }
        // the product
        let product = JSON.parse(localStorage.getItem('product'));
        console.log(data);
        console.log(product);

        // let optionFetch = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body:JSON.stringify({'contact':data,
        //             'product': product})
        // }
        // send to URL of server backend, wait for the response
        // let response = fetch('http://localhost:3000/api/teddies/order', optionFetch); 
        // response.then( async (data) => {
        //     try{ let info = await data.json();
        //     localStorage.setItem('orderId', info.orderId);// récupérer orderID reçu du serveur et stocker
        //     window.location.href = 'confirmationJs.html';// aller sur la page de confirmation quand tout ok

        //     }catch(error){ alert('erreur' + error)}
        // })

        // give a thankyou message and retour to home
        window.location.href = 'index.html?confirm=true';

        // send a message to user => show the div of message thankyou
        // send()
        

        // function send () {
        //     console.log("message");
        //     main1.classList.toggle('opacity-50');
        //     main1.classList.toggle('bg-gray-200');

        //     // we will add the class to show the modal, and active the cursor
        //     thankyou.classList.toggle('opacity-0');
        //     thankyou.classList.toggle('pointer-events-none');
        //     thankyou.classList.toggle('h-0');
        //         // thankyou.classList.toggle('h-auto');

                
        // }
    }
})