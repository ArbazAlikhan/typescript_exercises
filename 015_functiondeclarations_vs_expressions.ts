function fullName(first:string, last:string):string{
    return first+" "+last;
}

var otherFullName:(first:string,last:string)=> string;
otherFullName = function(first:string,last:string){
    return first+" "+last;
}

var thirdFullName:(first:string,last:string)=> string =
otherFullName = function(first:string,last:string){
    return first+" "+last;
}

console.log(fullName("Arbaz Ali","khan"));
console.log(otherFullName("Arbaz Ali","khan"));
console.log(thirdFullName("Arbaz Ali","khan"));