// alert('hi');

// l'operateur de comparaison == signifie 'egal à'
// il permet de verifier qui les VALEURS de 2 variables sont indentiques

var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2); // retourne TRUE

// l'operateur de comparaison === signifie "strictement égal à"
// il permet de verifier la VALEUR  et lz type 
console.log(nb1 === nb2);//retourne FALSE 

// -- l'operateur != signifie "différent de .. en VaLEUR"
console.log(nb1 != nb2); // retourne FALSE

// -- l'opérateur !== signifie "strictement différent de ... en VALEUR et en TYPE
console.log(nb1 !== nb2)// retourne TRUE

// ----------------------------------------------

// EXERCICE
/* j'arrive sur un espace sécurisé au moyen du prenom et de l'age.
je dois saisir mon prenom et mon age pour authentifier sur le site (les infos sont en BiquadFilterNode, ici dans mes variables
 prenom et age.)
en cas d'echec une alerte m'informe du probléme.
si tout se passe bien, un message de bienvenue m'acceuille.*/


var prenom, monage, mdp;
prenom = "Tom"
monage = 28;
mdp = "bibi;"

var prenomlogin = prompt("Quel est votre prenom ?");

if (prenomlogin === prenom){
    var agelogin = parseInt(prompt("votre age /"));

    if (agelogin === monage) {
        var mdplogin = prompt("le mot de passe ?")
        if (mdplogin === mdp){
            alert("bienvenu" + prenomlogin);
        }else{
            alert("Pb de mon de passe !");
        }
    }else{
        alert("erreur d'age");
    }
}else{
    alert("attetion, prenom non reconnu");
}