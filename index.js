//Ajouter un contact
document.addEventListener('DOMContentLoaded', function (){
    const form = document.querySelector('form');
    const contactsList = document.querySelector('ul');

    form.addEventListener('submit', function (e){
        e.preventDefault() //Empêche le rehargement de la page
        //Récupérer les valeurs du formulaire
        const name = document.getElementById('name').Value;
        const email = document.getElementById('email').Value;
        
        if(name && email){
            //creer une nouvelle entrée de contact
           const newContact = document.createElement('li');
           newContact.textContent = `${name} - ${email}`;
           //jouter le nouveau contact à la liste
           contactsList.appendChild(newContact);

           //Réinitialiser le formulaire
           form.reset();
        }else{
           alert('veillez remplir tous les champs');
        }
    });

});

