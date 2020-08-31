var x1 = 0;
while (x1 < 10) {
    console.log(x1);
    x1++;
}
var playrs = [3, 10, 4, 5, 1];
// for in
console.log("For/In");
for (var player in playrs) {
    console.log(player);
}
// for of
console.log("For/Of");
for (var _i = 0, playrs_1 = playrs; _i < playrs_1.length; _i++) {
    var player = playrs_1[_i];
    console.log(player);
}
//# sourceMappingURL=012_loops.js.map