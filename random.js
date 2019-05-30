
var firstq = Math.floor(Math.random() * (6 - qestion_1 + 1)) + 1; 
var qestion_1 = prompt("Please put low number ");

var secoundq = Math.floor(Math.random() * (6 - 1 + qestion_2)) + 1; 

var qestion_2 = prompt("Plase add higher number");



console.log(qestion_1);
console.log(qestion_2);

qestion_1 = (parseInt(qestion_1));
qestion_2 = (parseInt(qestion_2));

function final(firstq, secoundq) {
  return Math.floor(Math.random() * (secoundq - firstq) + secoundq);
}

