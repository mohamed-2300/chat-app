// function jourSemaine (a){
//     if (a==0){
//         return "lundi";
//     }
//     else if (a==1){
//         return "mardi";
//     }
//     else if (a==2){
//         return "mercredi";
//     }
//     else if (a==3){
//         return "jeudi";
//     }
//     else if (a==4){
//         return "vendredi";
//     }
//     else if (a==5){
//         return "samedi";
//     }
//     else if (a==6){
//         return "dimanche";
//     }
//     else {
//         return "veullez entrez un nombre entre 0 et 6 !!!";
//     }
// }
// console.log(jourSemaine(0));

// arrow function 

// const somme = (a,v) =>a+v;
// console.log(somme(5,267));

// const somme2 = (a,b) => {
//     const result = a+b;
//     return result;
// }
// console.log(somme2(5,25));

// function PersonneFlechee() {
//     this.age = 0;
  
//     // `setInterval` utilise une fonction fléchée
//     setInterval(() => {
//       this.age++; // Ici, `this` fait bien référence à `PersonneFlechee`
//       console.log("Âge avec fonction fléchée:", this.age);
//     }, 10);
//   }
  
//   const personne2 = new PersonneFlechee();

// Template Literals
// const stagiaire = {
//     nom:'Mohamed ait bourice',
//     age:21,
//     id:210
// }
// const salutation = `Bonjour ${stagiaire.nom}!!! \nvotre age est : ${stagiaire.age} \nvotre identifiant est : ${stagiaire.id}`
// console.log(salutation);

// const stagiaires = [
//     { id: 1, nom: "Amine", age: 22 },
//     { id: 2, nom: "Salma", age: 24 },
//     { id: 3, nom: "Yassine", age: 21 },
//     { id: 4, nom: "Rania", age: 23 },
//     { id: 5, nom: "Khalid", age: 20 }
//   ];
  
// for (const stagiaire of stagiaires){
//     // console.log(`
//     //     identifiant:${stagiaire.id}
//     //     nom:${stagiaire.nom}
//     //     age:${stagiaire.age}.`)
//     for (const atribue in stagiaire){
//         console.log(atribue+':'+stagiaire[atribue])
//     }
// }
  


// //les modules:

// //   math.js:

// // Définir une fonction
// export function addition(a, b) {
//   return a + b;
// }
// // Exporter une constante
// export const PI = 3.14159;

// //   app.js:
// // Importer des éléments spécifiques depuis math.js
// import { addition, PI } from './math.js';

// console.log(addition(5, 3)); // Affiche : 8
// console.log(PI);             // Affiche : 3.14159

// // Exportation et Importation par Défaut:

// // On peut aussi exporter une valeur par défaut d’un module. 
// // Une exportation par défaut permet d’importer un élément sans accolade.

// // math.js
// export default function multiplication(a, b) {
//   return a * b;
// }

// // app.js
// // Importer l'exportation par défaut
// import multiplication from './math.js';

// console.log(multiplication(5, 3)); // Affiche : 15

// condition if ... else resumer
// let i = 1;
// i == 2?console.log('YES!'):console.log('NO!');

