//Task-1
function isEquals(x , y){
       return x==y;
}
var equal = isEquals(10,3);
document.getElementById("output1").innerHTML=equal.toString();

//Task-2
function isBigger(x , y){
       return x>y;
}
var equal = isBigger(10,3);
document.getElementById("output2").innerHTML=equal.toString();

//Task-3
function storeNames(...names){
       return names;
}
const namesArr=storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy');
const formattedString = '[' + namesArr.map(name => "'" + name + "'").join(', ') + ']';
document.getElementById("output3").innerHTML=formattedString;

//Task-4
function getDifference(x,y){
       return Math.abs(x-y);
}
var diff=getDifference(10,8);
document.getElementById("output4").innerHTML=diff;

//Task-5
function negativeCount(numbers) {
       return numbers.filter(num => num < 0).length;
   }
const count=negativeCount([4, 3, 2, 9]);
document.getElementById("output5").innerHTML=count;

//Task-6
function letterCount(str, char) {
       return str.split('').filter(ch => ch === char).length;
   }
var countletter = letterCount("Marry", "r") ;
document.getElementById("output6").innerHTML=countletter;

//Task-7
function countPoints(scores) {
       return scores.reduce((totalPoints, match) => {
           const [x, y] = match.split(':').map(Number);
           if (x > y) {
               return totalPoints + 3;
           } else if (x === y) {
               return totalPoints + 1;
           } else {
               return totalPoints;
           }
       }, 0);
   }

var countpoi=countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100']);
document.getElementById("output7").innerHTML=countpoi;