var names : string[] = ['arbaz','ali','khan'];
var counter :number =0;
(function(){
    for(let name in names){
        counter++;
    }
})();

console.log(counter);