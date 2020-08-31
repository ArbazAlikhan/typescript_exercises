//boolean
let paidAccount : boolean =false;
//number
let age:number = 33;
var taxRate : number = 7.5;
//string
var fullName :string = "Arbaz";
//Array
var ages : number[] = [33,28,11];
//tuple
let player : [number,string];
player = [3,"Arbaz"];
//Enum
enum stage {Approved,Pending,Rejected};
let job :stage = stage.Pending;
//Any
var apiData : any[] = [123,'Arbaz'];
//void
function printOut(msg: string) : void{
    console.log(msg);
}