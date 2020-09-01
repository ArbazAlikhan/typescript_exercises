var fullName :(first:string,last:string) =>string;
fullName =function(first:string,last:string){
    return first+" "+last;
}
console.log(fullName('arbaz ali','khan'));

//immediately invoked
(function(first:string,last:string){
    console.log(first+" "+last);
})('Arbaz ali','khan');