// function  Student(name,grade){
//     this.name = name;
//     this.grade = grade;
// }

// let Saby = Student("sabina", "5")


class Student{
    __name
    __grade
    __gpa
    __age
    __courses

    static whomi(){
        console.log('Welcome, Student of Andy International School')
    }

    constructor(name,grade,gpa,age,courses = []){
        this.__name = name,
        this.__grade = grade,
        this.__gpa = gpa,
        this.__age = age,
        this.__courses = courses;
        
    }
    setname(value){
        if (value.length<20){
            this.name = value;
        }else{
            console.log("Your Name cannot be more than 20 characters")
        }
    }
    setage(value){
      if (value>0){
          this.age = value;
      }else{
          alert("Invalid Age")
      }
    }
    setGrade(value){
        if (value > 0){
            this.grade = value;
        }else{
            alert("Invalid grade")
        }
    }
    setGpa(value){
        if (value > 1){
            this.gpa = value;
        }else{
            alert(" We cannot admit you, sorry")
        }
    }
    setCourses(){
        if( value.length>5){
            this.courses = value;
        }else{
            alert("subjects cannot be more than 5.")
        }
    }

    getName(){
        return this.name 
    }

   getAge(){
       return this.age
   }

   getGrade(){
    return this.grade
   }
 
    getGpa(){
        return this.gpa
    }
    getCourses(){
        return this.courses
    }

    sayHello(){
        console.log(` Welcome, ${this.__name}. It is a pleasure to admit a ${this.__age} years old with ${this.__gpa} gpa into ${this.__grade}th grade.`)
    }
    printCourses(){
        
        for ( let i=0; i<this.courses.length;i++){
            console.log(this.courses[i]);
        }
    }
    calculateGpa(newGpa){
        this.gpa = newGpa;
    }
}

// second assignment 


class HighSchooler extends Student {

  constructor(name,grade,gpa,age,courses){
   super(name,grade,gpa,age,courses);
  }
}

let studentRoll = [];

function createStudent(name,grade,gpa,age,courses){
  let newStudent = new Student(name,grade,gpa,age,courses);
  console.log(newStudent)
  return newStudent
}

function enrollStudent(student){
     studentRoll.push(student)
}

function searchStudent(student){
    return student.name.toLowerCase.includes === 'Sabina';
}
studentRoll.filter(searchStudent);



function filterStudentsByGrade (student){
  return student.grade>5; 
}
studentRoll.filter(filterStudentsByGrade);


function filterStudentsByAge(student){
    if (5<student.age<20){
        return;
    }
}
studentRoll.filter(filterStudentsByAge);


