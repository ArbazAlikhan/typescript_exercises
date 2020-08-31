//boolean
var paidAccount = false;
//number
var age = 33;
var taxRate = 7.5;
//string
var fullName = "Arbaz";
//Array
var ages = [33, 28, 11];
//tuple
var player;
player = [3, "Arbaz"];
//Enum
var stage;
(function (stage) {
    stage[stage["Approved"] = 0] = "Approved";
    stage[stage["Pending"] = 1] = "Pending";
    stage[stage["Rejected"] = 2] = "Rejected";
})(stage || (stage = {}));
;
var job = stage.Pending;
//Any
var apiData = [123, 'Arbaz'];
//void
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=007_types.js.map