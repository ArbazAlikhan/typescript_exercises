var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('arbaz ali', 'khan'));
//immediately invoked
(function (first, last) {
    console.log(first + " " + last);
})('Arbaz ali', 'khan');
//# sourceMappingURL=0185_immediately_invoked_args.js.map