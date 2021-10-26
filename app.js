// --------------------question 1------------------------------
const d = new Date();
console.log(d)
let day  = document.getElementById("day")

console.log(d.getDay())
switch (d.getDay()) {
    case 0:
        day.innerHTML = " sunday";
        break;
    case 1:
        day.innerHTML = " monday";
        break;
    case 2:
        day.innerHTML = " tuesday";
        break;
    case 3:
        day.innerHTML = " wednesday";
        break;
    case 4:
        day.innerHTML = " thursday";
        break;
    case 5:
        day.innerHTML = " friday";
        break;
    case 6:
        day.innerHTML = "sunday";
        break;
}
const time = document.getElementById("time");
let hour = d.getHours();
let minute =d.getMinutes();
let second = d.getSeconds();
time.innerHTML = `${hour}:${minute}:${second}`


// --------------------question 2----------------------------------

let q2date = document.getElementById("q2date"); 
let date2= d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
q2date.innerHTML=`${month}-${date2}-${year} OR  ${date2}-${month}-${year} `

// --------------------question 3----------------------//
let area=()=>{
 let side1 =+document.getElementById("1side").value
 let side2 =+document.getElementById("2side").value
 let side3 =+document.getElementById("3side").value
 let s= (side1+side2+side3)/2;
 console.log(s)
 let areacal = document.getElementById("areacal");
 let cal = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
 console.log(cal)
 areacal.innerHTML = cal;
}
///--------------------Question 4----------------
let a="saylani"
let b=a.length
animation()
function animation(){
    setInterval(function(){
        a= a.slice(b-1)+a.slice(0,b-1);
        let saylani =document.getElementById("saylani");
        saylani.innerHTML=a
    },1000)

}


// --------------------question 5---------------------//
function check(){
    let leap =+document.getElementById("leap").value
    let leap_result = document.getElementById("leap_result")
    if( (leap % 4 == 0) || (leap % 400 == 0) )
    {
        leap_result.innerHTML=(`${leap} is leap year`)
    }
    else{
        leap_result.innerHTML=(`${leap} is not a leap year`)
    }

}
// -------------------Question no: 6----------------------------------
for (i = 2014; i <= 2050; i++)
    {
   let D = new Date(i,0,1)
    if ( D.getDay() === 0 ){
        let ul = document.getElementById("ul")
        let p = (`1st January is being a Sunday ${i}`);
        let li = document.createElement('li')
        let text = document.createTextNode(p)
        li.appendChild(text)
        ul.appendChild(li)
    }
}
// ----------------------Question 7----------------------------------
// let guess = prompt("Enter a guess number between 1 To 10")
// let guessnumber = Math.round((Math.random()*10)+1);
// console.log(guessnumber)
// if(guess == guessnumber )
// {
//     alert("Good work")
// }
// else{
//     alert("Not match")
// }
// ----------------------Question 8----------------------------------


const today=new Date()
var aug14=new Date(today.getFullYear(),7,14)

if(today.getMonth()>=7 && today.getDate()>14)
{
    aug14.setFullYear(aug14.getFullYear()+1)
}

var one_day=1000*60*60*24
var result=Math.ceil((aug14.getTime()-today.getTime())/(one_day))
console.log(result)
 let august=document.getElementById("august")
 august.innerText=result+" days left until next 14 August!"

// ----------------------Question 9----------------------------------
let muldiv=()=>{
let fnum =+document.getElementById("fnum").value;
let snum =+document.getElementById("snum").value;
let multi =document.getElementById("multi")
let divide =document.getElementById("divide")
let mul= fnum* snum
let div= fnum / snum
multi.innerHTML= mul;
divide.innerHTML = div
}
//----------------------Question 10----------------
let convert=()=>
{
    let temp= +document.getElementById("temp").value;
    if(temp != 0)
    {
       let farh =  (9 * (temp / 5)) + 32
       let celciuspara = document.getElementById("celcius")
       celciuspara.innerHTML= `${temp} \xB0C is ${farh} \xB0f `


    }
}
let convert1=()=>
{
    let temp1= +document.getElementById("temp1").value;
    if(temp != 0)
    {
       let cels =  (temp1 - 32) * 5 / 9
       let farhenheitpara = document.getElementById("farhenheit")
       farhenheitpara.innerHTML= `${temp1} \xB0f is ${cels} \xB0C `


    }
}

//---------------Question 11-----------------------------
let sum=()=>
{
    let sum1 =+document.getElementById("sum1").value
    let sum2 =+document.getElementById("sum2").value
    let sumpara = document.getElementById("sumpara");
    if(sum1 === sum2)
    {
      let summ =(sum1+sum2)*3
      sumpara.innerHTML = summ
      

    }
    else{
        sumpara.innerHTML = sum1+sum2
    }
    sum1 = '';
      sum2 = '';
}


// ----------------------Question 12----------------------------------
let checknum=()=>
{
let number= +document.getElementById("number").value
let GivenNumber = document.getElementById("givenNumber")
if((Math.abs(100-number) <= 20)||(Math.abs(400-number) <= 20))
{
    GivenNumber.innerHTML="True";
}
else{
    GivenNumber.innerHTML="True";
}
}
// ----------------------Question 13----------------------------------
let largest=()=>
{
    let num1= +document.getElementById("num1").value
    let num2= +document.getElementById("num2").value
    let num3= +document.getElementById("num3").value
    let largestNumber = document.getElementById("largestNumber")
    let largest;
    if(num1 >= num2)
    {
        largest=num1
        largestNumber.innerHTML =largest
    }
    else
    {
        largest = num2
        largestNumber.innerHTML =largest
    }
    if(num3 > largest)
    {
        largest=num3
        largestNumber.innerHTML =largest
    }
}
// ----------------------Question 14----------------------------------
let capital=()=>
{
    let string = document.getElementById("string").value
    let string1=string[2].toUpperCase() + string.substring(4)
    let captital= document.getElementById("capital")
    captital.innerHTML= string1
}
//----------------------Question 15---------------------------------

let hourfunc=()=>{
    let Daynum =+document.getElementById("Daynum").value
    if(Daynum > 0)
    {
        let hourmin= Daynum*24;
        let min = Daynum * 24 *60
        let hour =document.getElementById("hour")
        hour.innerHTML = `${hourmin} Hour and ${min}minute left `
       
    }
}
//----------------------Question 16---------------------------------
let reverse=()=>{
   let arr1=[];
   a=1;
   for(i=0; i<4; i++){
       arr1[i]= document.getElementById(a).value
       a++
   }
   let arrpara= document.getElementById("arrpara")
   arr1.reverse()
   arrpara.innerHTML=`The reverse Array is ${arr1} `
}
//----------------------Question 17---------------------------------
let larg=()=>{
    let arr2=[];
    a=5;
    for(i=0; i<3; i++){
        arr2[i]= document.getElementById(a).value
        a++
    }
    let max;
    if(arr2[0] > arr2[2] )
    {
        max = arr2[0];
    }
    else
    {
        max = arr2[2];
    }
    let newarr =[];
    for(j=0; j<arr2.length; j++)
    {
        newarr[j] = max;
    }
    let largpara = document.getElementById("largpara")
    largpara.innerHTML= `larger value between the first or last is : ${newarr}`
    console.log(largpara)
}
//----------------------Question 18---------------------------------
let greater=()=>
{
    let arr3=[];
    let a=8;
    let temp;
    let max;
    for(i=0; i<3; i++)
    {
        arr3[i] = document.getElementById(a).value
        a++

    }
    console.log(arr3)
    for(i=0; i<arr3.length; i++)
    {
        for(j=0; j<arr3.length; j++)
        {
            if(arr3[i] < arr3[j])
            {
                temp=arr3[i]
                arr3[i]=arr3[j]
                arr3[j] = temp

            }
            max=arr3[i];

        }
    
    }
    console.log(arr3)
    let greater=document.getElementById("greater")
        greater.innerHTML=`Kth Greatest Number is : ${max}`;
        console.log(max)
}
//----------------------Question 19-----------------------------

let arr19 = [9,6,4,6,2,6,09,6];
let array= document.getElementById("array")
array.innerHTML= `Array : ${arr19}`
var num ;
var next=0;
for(i=0; i<arr19.length; i++)
{
    var pre=0;
    for(j=0; j<arr19.length;j++)
    {
        if(arr19[i]===arr19[j])
        {
            pre++
        }
        
    }
    if(next<pre)
        {
            num =arr19[i]
            next =pre
        }

    
   let most = document.getElementById("mostappear")
   most.innerHTML= `${num} is ${next} time in above array`
}






//----------------------Question 20---------------------------------
let arr = [1,2,4,3,4,2,7,6,4]
let givenarr = document.getElementById("givenarr")
givenarr.innerHTML = ` Given Array is : ${arr}`
let replace=()=>
{
    let targ = +document.getElementById("targ").value
    let replace = +document.getElementById("replace").value
    console.log(targ)
    console.log(replace)
    for(i=0; i< arr.length; i++){
        if(arr[i] === targ)
        {
            arr[i] = replace
        }
        
    }
    let reparr= document.getElementById('reparr')
    reparr.innerHTML = `replaced array is : ${arr}`
}