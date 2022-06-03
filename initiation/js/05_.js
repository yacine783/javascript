// alert('test');

// ----structure de base IF

// if (true){// par defaut les conditions a verifier le IF verifie si elle est vrai
//     /*..... code.....*/

// }

// var nb1 = 10;
// if (nb1 < 50){
//     console.log("nb1 est bien inférieur à 50")
// }

// if (true){
//     // code si VRAI
// }else {
//     //code si FAUX 
// }

// if(nnb1 > 50){
//     console.log("nnb1 est bien superieure a 50");
// }else{
//     console.log{"nb1 n'est pas superieure a 50"};
// }

// EXERCICE

// on utilise le IF pour verifier l'age de l'internaute
// => s'il est majeur je lui souhaite le bienvenue
// => s'il est mineur je (1) lui signele et (2) le renvoie vers un autre site

// 1 -- 

 // 1-- jr devlarela majorité legale
 var majoriteFR = 18;

 //2 je demande l'age en s'assurant que nous avons un number 
 var age = parseInt(prompt("indiquez votre age ?"));

 //3 je verifie si mon internaute est majeur
 if(age >= majoriteFR){ //Bievenue si c'est vrai
    alert("bienvenu, vous etes majeur");
 }
 else{
     // s'il est mineur je lui signale
     alert("allez voir un autre super site...");
     // et ensuite je redirige vers w3scools
     document.location.href = "https://www.w3schools.com/js/js_if_else.asp"
 }
