function stringChop(str, size) {
  const myArray=[];
    for (let i=0;i<str.length;i+=size) {
        myArray.push(str.slice(i,i+size));
    }
    return myArray;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
