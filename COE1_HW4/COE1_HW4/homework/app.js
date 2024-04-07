function reverseNumber(num) {
    var ans=0;
    var sign=1;
    if(num<0){
       sign=-1;
    }

    num=Math.abs(num);
    while(num>0){
        ans=ans*10+(num%10);
        //console.log(ans);
        num=parseInt(num/10);
    }
    return ans*sign;
    
}

function forEach(arr, funccall) {
    for (let i = 0; i < arr.length; i++) {
      funccall(arr[i]);
    }
  }
  
function map(arr, funccall) {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        answer.push(funccall(arr[i]));
      }
      return answer;
}

  

function filter(arr, funccallf) {
    const filanswer = [];
    for (let ic = 0; ic < arr.length; ic++) {
        const fil=funccallf(arr[ic]);
        if (fil !== undefined) {
        filanswer.push(fil);
        }
      }
      return filanswer;
}

function getAdultAppleLovers(data) {
    return map(filter(data, function(person) {
        if(person.age > 18 && person.favoriteFruit === 'apple'){return person;};
      }), function(person) {
        return person.name;
      });
}

function getKeys(obj) {
    const keys = [];
  for (let key in obj) {
    
      keys.push(key);
    
  }
  return keys;
}

function getValues(obj) {
    const values = [];
  for (let key in obj) {
    
      values.push(obj[key]);
    
  }
  return values;
}
console.log(reverseNumber(12345));
console.log(reverseNumber(-56789));
forEach([2, 5, 8], function(ele) { console.log(ele+" "); });
console.log(map([2, 5, 8], function(element) { return element + 3; }));
console.log(map([1, 2, 3, 4, 5], function(element) { return element* 2; })); 
console.log(filter([2, 5, 1, 3, 8, 6], function(el) { if(el>3) {return el ;} }));
console.log(filter([1, 4, 6, 7, 8, 10], function(el) { if(el % 2 === 0){return el;} }));
const input = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      "age": 2,
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      "age": 17,
      "eyeColor": "green",
      "name": "Weiss",
      "favoriteFruit": "banana"
    }
  ];
  
  console.log(getAdultAppleLovers(input));
  console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}));
  console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3}));