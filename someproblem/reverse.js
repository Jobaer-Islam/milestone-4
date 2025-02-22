//  Given a product description as a string, reverse the order of the words while keeping the characters in each word unchanged.


const str = "Ya Allah, I wanna be a purest -withoutSin- Person!"

let words = str.split(" ");
let reversed  = "";

for(let i = words.length-1; i >= 0 ; i--){
    let element = words[i];
    reversed += element;
    if(i > 0){
        reversed += " ";
    }
}
console.log(reversed);


// Shortcut Way

let rev = str.split(" ").reverse().join(" ");
console.log(rev)



