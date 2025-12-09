// datatypes
var p = 20;//number
var q = "Hello"; //string
var bool = true; //boolean
var r = null;  //null
var s ; //undefined

// ARRAY
var arr = [1,2,3,4,5]; //array
console.log(arr);

//obj
var object = { //object
    name : "Raj",
    age : 20,
}   

//Artimetic operation[+,-,*,/,%]
var a = 10;
var b =" 10";
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Relational operator[>,<,>=,<=,==,!=]
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);

//assignment operator[=,+=,-=,*=,/=,%=]
a = 10;
b= 2;
console.log(a);
console.log(a+=10);
console.log(a-=10);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);

//logical operator[&&,||,!] 
a=true;
b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);

//for loop
/*
for(initialization;condition;increment/decrement){
    //code
}*/
for(var i=0;i<=10;i++){
    console.log(i);
}
/* while loop
while(condition){
    //code
}*/
var j=0;
while(j!==5){
    j++;
    console.log(j);
}
console.log(j);
/*do while loop
do{
    //code
}while(condition);*/

a=0;
do{
    console.log(a);
}while(a===1);

//conditional statement
//if 
a=5;
if(a%2===0){
    console.log("a is even");
}
//if.else
    if(a%2===0){
        console.log("a is even");
    }
    else{
        console.log("a is odd");
    }
    //else.if
    var marks = 90;
    if(marks>=90){
        console.log("O");
    }
    else if(marks>=70){
        console.log("A");
    }
    else if(marks>=50){
        console.log("B");
    }
    else{
        console.log("Fail");
    }

    //switch
    var day = 1;
    switch(day){
        case 1: {
            console.log("Sunday");
            break;
        }
        case 2:{
            console.log("Monday");
            break;
        }
        case 3: {
            console.log("Tuesday");
            break;
        }
        case 4:{
            console.log("wednesday");
            break;
        }
        case 5:{
            console.log("Thursday");
            break;
        }
        case 6:{
             console.log("Friday");
            break;
        }
        case 7:{
            console.log("Saturday");
            break;
        }
        default:{
            console.log("Invalid");
    }
}
//Ternary operator[? :]
var age = 20;
var result = age>=18 ? "Eligible" : "Not Eligible";
console.log(result);

//ternary operator
var marks = 90;
var result = marks>=90 ? "O" : marks>=70 ? "A" : marks>=50 ? "B" : "Fail";
console.log(result);
let a = 10; // Global scope
if(true){
    let t= 20;  //let block scope
    console.log(t);
}
console.log(t,b);

//for..in(object)
var obj = {
    name:"Raj",
    age:20,
    marks:90,
};
for(int i in obj){
    console.log(i,obj[i]);
}
let a = 10; // Global scope
if(true){
    let a = 20;  //let block scope
    console.log(a);
}
console.log(a,b);