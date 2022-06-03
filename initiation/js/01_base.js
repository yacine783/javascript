// syntaxe de base

// commentaire sur une ligne 

/* ici, je fais un commentaire sur 
plusieurs lignes */

// -- 1: declarer une variable en JS 
// var Prenom;

// --2: affecter une valeur a une variable
// Prenom = "yasslamenace";

// var Prenom = "yasslamenace";

// -- 3: une instruction se termine TOUJOURS  par un point-virgule, aussi il est possible d'ecrire plusiuers instructions sur une seule ligne 

// inst_1;
// inst_2; inst_3;

// -- 4: afficher une boite de dialogue (2 facon)
// alert ("super, tu es arrivé sur mon site !");
// window.alert ("super, tu es arrivvé sur mon site !");

// -- 5; afficher dans la console (ici, la veuleur de ma variable prenom)
// console.log(Prenom);

// --6: afficher dans la page web
// document.write(" a la pause vous aurez des haribos pik !")

// -- 7: demander à l'utilisateur une valeur ( 2 facons )
// window.prompt ("quesion on est quel jour ?", "jour de la semaine")
// prompt("question: on est quel jour ?", "jour de la semaine")

// -- et pou manipuler cette valeur, je n'oublie pas de la stocker 
// var jour = prompt("Question: onn est quel jour ?", "jour de la semaine");
// console.log(jour);

//-- 8: attention /!\ le JS est sensible a la case ('case sensible')
// mavariable =/= maVariable =/= ma_variable camel case snake case

// -- 9: une variable ne peut pas commencer par un chiffre,, ne doit contenir que des caractéres alphanumérique, et ne peut pas etre un mot réversé (var, for... des éléments natifs du langage JS)

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

// --10: une variable peut etre declarée de facon explicit:
var fruit; 
var fruit = "fraise";
// ou implicite;
var fruit_2 = "coco";
haribo = "tagada";

/*--------------------------------------------*/
// /~~~~~~~~~~~~~~~~~~~~~~~~~~~ les TYPES DE VARIABLES~~~~~~~~~~~~~~~~~~~~/
//--------------------------------------------------------------------------------------------------------

// --1. chaine de caractére (string)
var vacances = "2022"
var destination = "maldive";

// -- .2 un nombre entier (integer ou int)
var annee = 2022;

// 3. un nombre décimal (float)
var nombre_a_virgule = -5.32;

// -- 4. un bbooléen (boulean = VRAI/FAUX = TRUE/FALSE)
var unboolean = false; // -- true

// --5. les constantes

// la déclaration const permet de créer une contante accessible uniquement en lecture. contrairement a une variable sa valeur ne peut plus etre modifié par réaffectation plus bas dans le code.

// une constante ne peut pas etre declaré a nouveau dans le meme script.

// par convention les constantes sont en majiscules 
const PAYS = "france"; // dtring
const AN = '2202'; // string
const BIRTH = 2022; // nombre

// --6. type of permet de connaitre le type de ma variable 
console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof vacances);;

// en JS les variable sont auto-typées 
// on peut convertir une variable de type NUMBRE en STRING et aussi STRING en NUMBER avec les fonctions motives de JS
// -- la fonction parseInt() renvoie un entier a partir d'une chaine de caractéres

var unChiffre = "12";
console.log(unChiffre)
console.log(typeof unChiffre);

// STRING => NUMBER
unChiffre = parseInt(unChiffre);
console.log(typeof unChiffre);

// je ré-effecte une valeur
unChiffre = "12.22"
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => FLOAT
unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// NIMBER => STRING
var nb_en_lettres = 258;
console.log(nb_en_lettres)
console.log(typeof nnbb_en_lettres)

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

// fin




