function fullName(first, last) {
    return first + " " + last;
}
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = otherFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName("Arbaz Ali", "khan"));
console.log(otherFullName("Arbaz Ali", "khan"));
console.log(thirdFullName("Arbaz Ali", "khan"));
//# sourceMappingURL=015_functiondeclarations_vs_expressions.js.map