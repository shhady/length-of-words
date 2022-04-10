const arr=['boo','doooo','hoo','ro']

let chars = (arr) => {
    let array = [];
    for(let i=0; i<arr.length; i++){
        array.push(arr[i].length);
}   
return array;
}
console.log(chars(arr));

 