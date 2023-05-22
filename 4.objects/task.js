function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
        for (let element of marks) {
            this.marks.push(element);
        }
    }
}

Student.prototype.getAverage = function () {
    if (this.marks && this.marks.length != 0) {
        let result = (this.marks.reduce((sum, current) => sum + current, 0)) / this.marks.length;
        return result;
    } else {
        return 0;
    }

}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;

}
