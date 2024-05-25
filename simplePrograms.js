const input=[1,2,3,4]
    const input1=input.map((e)=>e*6);
    console.log(input1);
// ___________________________________________________
    const akila=[
        {
            name:'aki',age:20
        },
        {
            name:"akila",age:1,
        },
        {
            name:"akilaaa",age:3,
        },
    ]
    const ages=input.filter((e)=>e>1);
    console.log(ages);
// _______________________________________________________________________
    const array=input.reduce((total,e1)=>total+e1,20)
    console.log(array);

  const  array2=[
        ["a","b","c"],
        ["a","b","c","d","c"],
    ]

    // let result={'a':1,'b':2}
    // result['c']=1
console.log(array2.flat().reduce((accu,e)=>{
    if(accu[e]){
        accu[e]++
        
    }else{
        accu[e]=1
        
    }
    return accu

},{}));
// _______________________________________________________________________
const arr=[4,5,4,3,1,6,1,6,3,-1,-5,-8];
console.log(arr.filter((e)=>e>0))


const arr1=[1,1,2,3,2]
console.log(arr1.reduce((acc,curr)=>{
        if(!acc.includes(curr)){
           acc.push(curr)
        }
        return acc;
},[]))
// ______________________________________________________________________
const aa="Akila Web Dev";
let upper= ' '
for(let i=0;i< aa.length;i++){
    if(aa[i]>='A' && aa[i]<='Z'){
            upper=upper+aa[i]
    }
}
console.log(upper);
___________________________________________Prime or not 1, 2,3, 5, 7, 11________________________________________________________//
const a=prompt("Enter the Number:");
    let isPrime=true;
    if(a==1){
        console.log("The num is Prime");
    }else if(a>1){
        for(let i=2;i< a;i++){
            if(a%i==0)
            isPrime=false;
        break;

        }
    }
    if(isPrime){
        console.log("number is a prime number");
    }else{
        console.log("Number is not a Prime Number");
    }


// Greatest among 3 numbers

 const a=prompt("Enter the first number:");
        const b=prompt("Enter the second number:");
        const c=prompt("Enter the third number:");
        if(a>b && a>c){
            console.log("The A is a Biggest number...");

        }else if(b>a && b> c){
            console.log("B is the Biggest number");
        }else{
            console.log("C is the gratest one");
        }

// _________________________________________________Greatest number among 3 numbers using build in method________________________________________________________
const a=parseFloat(prompt("Enter the First Number :"));
       const b=parseFloat(prompt("Enter the second Number"));
       const c=parseFloat(prompt("Enter the Third Number:"));

       const d=Math.max(a,b,c);
       console.log("The Greatest number is" +d);


const a=parseInt(prompt("Enter the first number:"));
      const b=parseFloat(prompt("Enter the second number:"));
      const c=Math.max(a,b);
     console.log(c);
// ________________SumOfArray____________________________________________________________________
 let a=[1,2,3,4];
     
     const sumofnum=()=>{
        return  a.reduce((acc,curr)=>{return acc+curr})
     }
      console.log(sumofnum())



// ______________Prime number__________________________________________________________________________
const a=parseInt(prompt("Enter the Number:"));
     const b=parseInt(prompt("Enter the second number:"));
     for(let i=a;i<=b;i++){
        let flate=0;
        for(let j=2;j<i;j++){
            if(i%j==0){
                flate=1;
                break;
            }
            if(i>1&& flate==0){
                console.log("The Prime num is:"+i)
            }
        }
     }
