"use strict";

let table_a_generer; // Variable globale pour stocker la table


function ajouter_ligne() {
    let tBody = document.getElementById("table-body");

    // Récupérer les valeurs des inputs
    let idPersonne = document.getElementById("id-Personne").value;
    let nom = document.getElementById("id-nom").value;
    let prenom = document.getElementById("id-prenom").value;
    let email = document.getElementById("id-mail").value;

    // Vérifier si tous les champs sont remplis
    if (!idPersonne || !nom || !prenom || !email) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Création d'une nouvelle ligne (TR)
    let tr_a_generer = document.createElement("tr");

    // Ajouter les colonnes avec les valeurs des inputs
    let valeurs = [idPersonne, nom, prenom, email];
    for (let i = 0; i < valeurs.length; i++) {
        let td_a_generer = document.createElement("td");
        td_a_generer.innerText = valeurs[i];
        tr_a_generer.appendChild(td_a_generer);
    }

    // Génération du bouton MODIFIER
    let td_a_generer = document.createElement("td");
    let btn_modif_a_generer = document.createElement("button");
    btn_modif_a_generer.setAttribute("class", 'btn btn-warning btn-sm me-2');
    btn_modif_a_generer.value = idPersonne;
    btn_modif_a_generer.innerText = "Modifier";
    //btn_modif_a_generer.addEventListener("click", clickModif, false);
    td_a_generer.appendChild(btn_modif_a_generer);

    // Génération du bouton SUPPRIMER
    let btn_suppr_a_generer = document.createElement("button");
    btn_suppr_a_generer.setAttribute("class", 'btn btn-danger btn-sm');
    btn_suppr_a_generer.value = idPersonne;
    btn_suppr_a_generer.innerText = "Supprimer";
    //btn_suppr_a_generer.addEventListener("click", clickSuppr, false);
    td_a_generer.appendChild(btn_suppr_a_generer);

    tr_a_generer.appendChild(td_a_generer);

    // Ajout de la ligne à la TABLE
    tBody.appendChild(tr_a_generer);

    // Réinitialiser les champs du formulaire après l'ajout
    document.getElementById("id-Personne").value = "";
    document.getElementById("id-nom").value = "";
    document.getElementById("id-prenom").value = "";
    document.getElementById("id-mail").value = "";
}

//function clickModif(e) {
// alert("Click sur " + e.target.innerText + " avec la valeur = " + e.target.value);
//}

//function clickSuppr(e) {
   // if (confirm("Voulez-vous vraiment supprimer cette entrée ?")) {
      //  let ligne = e.target.parentNode.parentNode;
        //ligne.parentNode.removeChild(ligne);
  //  }
//}

// Programme Principal
window.addEventListener('load', (event) => {
    // Générer l'en-tête de la table lors du chargement de la page
   

    // Ajouter une nouvelle ligne à la table lors du clic sur le bouton "Confirmer l'ajout"
    let btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
        ajouter_ligne();
    }, false);
});

url = "http://fbrc.esy.es/DWWM22053/Api/api.php/users";