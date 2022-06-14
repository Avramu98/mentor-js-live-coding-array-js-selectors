// JS selectors

//Cum luam id-uri
// let myHeader = document.getElementById("myHeader");
// console.log(myHeader);

//Cum luati clase
// let allParagraphs = Array.from(document.getElementsByClassName("myParagraphs"));

// allParagraphs.map((paragraph) => {
//     console.log(paragraph)
// })
// console.log(allParagraphs[3]);

// let selectAllP = Array.from(document.getElementsByTagName("p"));
// selectAllP.map((paragraph, i) => {
//     paragraph.innerHTML = `EU SUNT ELEMENTUL P DE PE POZITIA ${i}`
//     if(i === 1) {
//         paragraph.style = "color: red"
//     }
//   paragraph.style = "color: blue";
// });

// let whatToWear = (weatherCondition) => {
//   let selectAllP = Array.from(document.getElementsByTagName("p"));
  
//   if (weatherCondition === "raining") {
//     selectAllP.map((paragraph) => {
//         paragraph.style = "color: blue";
//       });
//   } else if (weatherCondition === "sunny") {
//     selectAllP.map((paragraph) => {
//         paragraph.style = "color: red";
//       });
//   } else {
//     selectAllP.map((paragraph) => {
//         paragraph.style = "color: green";
//       });
//   }
// };

// whatToWear("sunny")

//Selecteaza dupa query
// let myHeader = document.querySelector("#myHeader");
// console.log(myHeader)

// let paragraphs = document.querySelector(".myParagraphs")

// let paragraphs = document.querySelectorAll(".myParagraphs");
// console.log(paragraphs)

// let selectAllP = document.querySelectorAll("div > p")
// console.log(selectAllP)

// let sayHelloFunction = () => {
//     myHeader.innerHTML = "Am modificat textul dupa click";
//     myHeader.style = "color: green"
// }
