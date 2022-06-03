// alert("miouw");

// -- 1. Addition
// -- INFO -- Je peux déclarer plusieurs variables à la suite 

// je déclare mes variables 

var nb1, nb2, resultat;

// j'affiche des valeurs
nb1 = 10;
nb2 = 5;
nb3 = 45;
nb4 = 85;
// j'utilise mes variables avec un calcul
resultat = nb1 + nb4 / nb3 - nb2 ;

// j'affiche mon resultat dans la console
console.log(resultat);

// --2. soustraction
// -- soustraction de nb1 - nb2 avec l'opérateur " - "
resultat = nb1 - nb2;
console.log(resultat);

// --3. multiplication
// -- multiplication de nb1 * nb2 avec l'operateur "*"
resultat = nb1 * nb2;
console.log(resultat);

// 4. Dévision
// -- Division avec l'opérateur "/"
resultat = nb1 / nb2;
console.log(resultat);

// 5. Module
// -- le modulo retourne le reste d'une division
// -- module de nb1 % nb2 avec l'operateur "%"
resultat = nb1 % nb2;
console.log(resultat);

// -- et maintenantt je ré-affecte une valeur a nnb1
nb1 = 11;
resultat = nb1 % nb2;
console.log( "le reste de la division de " + nb1 + " par " + nb2 + " est egal à : " + resultat);

// --6. ecritures simplifiées
nb1 = 15;
nb1 = nb1 + 5; // egal a 20

nb1 += 10; // nb1 lui meme + quelque chhose
console.log('le resultat de "nb1 += 10;"est ' + nb1); // egal a 30, alternance de quillement simples et doubles pour ne pas casser ma chaine de caractére 

// le raccourci est le meme avec les autres operateurs *, -, /, +,

// si j'utilise une '(apostrophe) dans une phrase concaténés, je peux echapper les caractéres a l'aide d'un anti-slash \ (alt gr + 8)

//fin