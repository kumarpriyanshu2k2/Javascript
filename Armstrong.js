
const n = prompt("Please enter the number before which you want the Armstrong numbers");
let s =" ";
for (let i = 0; i < n; i++) {
    if(isArmstrong(i)){
        s+=i+"<br>"
    }

   
}
function isArmstrong(n){
    var original = n;
        let sum = 0;
        while(n>0){
            const r = n%10;
            sum += r*r*r;
            n= n/10;
            n=Math.floor(n)
    
        }
        return sum == original;
}
console.log(s);
document.getElementById("demo").innerHTML=s;