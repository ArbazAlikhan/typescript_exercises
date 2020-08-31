var fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Arbaz', 'Ali khan'));
var gradeGenerator1 = function (grade) {
    if (grade < 60) {
        return 'F';
    }
    else if (grade >= 60 && grade < 70) {
        return 'D';
    }
    else if (grade >= 70 && grade < 80) {
        return 'C';
    }
    else if (grade >= 80 && grade < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
};
console.log(gradeGenerator1(45));
console.log(gradeGenerator1(100));
console.log(gradeGenerator1(80));
//# sourceMappingURL=014_arrow_function.js.map