// alert("Hi");


/*

   La concatenation
*/


var annee = 2017; // a quoi sert une var, différentes types de var
var futur = 5;
var calcul = annee +futur;
console.log(calcul);
document.write(calcul + "<br>");

var mois = "6";
var calcul2 = annee + mois;
console.log(calcul2); // -> <br> parce que pas de calcul avec des string
document.write(calcul2 + "<br>")

var DebutPhrase = "Aujourd'hui ";
var Nbstagiaires = 12;
var SuitePhrase = " stagiaires";
var FinPhrase = "Sont presents.";

document.write(DebutPhrase + Nbstagiaires + SuitePhrase + " " + FinPhrase)
// le " " est utile quand on a des données recupérées directement de l'utilisateur

