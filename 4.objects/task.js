function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age
}
let student1 = new Student ("Tony", "male", 36);
let student2 = new Student ("Dan", "male", 45);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName
}

Student.prototype.addMark = function(mark){
  if(this.marks === undefined){
    this.marks = [];
    this.marks.push(mark);
  }
  else {
    this.marks.push(mark)
  }
}

Student.prototype.addMarks = function(...theMarks) {
  if(this.marks === undefined){
    this.marks = theMarks;
  }
  else {
    for (let i = 0; i < theMarks.length; i++) {
      this.theMarks.push(theMarks[i]);
    }
  }

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.theMarks.length; i++){
  sum += this.theMarks[i]};
  }
  return sum / this.theMarks.length;
}

Student.prototype.exclude = function(reason) {
  this.exclude = reason;
  delete this.subject;
  delete this.marks;

}
let student3 = new Student("Tony", "male", 37);
 student3.setSubject("Algebra");
 student3.addMark(5);
 student3.addMark(4);
 student3.addMark(5);
 console.log(student3);