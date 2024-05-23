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
