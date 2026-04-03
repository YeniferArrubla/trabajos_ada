// Ejercicio 10: Registro de Estudiantes
// Crea un sistema para registrar Estudiantes con las siguientes clases:
// Estudiante: Clase que incluye propiedades como nombre, edad y curso, además de un método que muestre la información del estudiante.
// RegistroEstudiantes: Clase que maneje una lista de estudiantes, con métodos para agregar un estudiante y mostrar todos los estudiantes registrados.

class Student {
    constructor(
        public name: string,
        public age: number,
        public course: string
    ){}

    getInformation(): string {
        return `El nombre del estudiante es ${this.name}, tiene ${this.age} años, se encuentra en el curso ${this.course}`
    }
}

class StudentRegister {
  private students: Student[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  showStudents(): void {
    this.students.forEach((student) => {
      console.log(student.getInformation());
    });
  }
}

const student1 = new Student("Ana", 20, "Backend");
const student2 = new Student("Luis", 22, "Frontend");

const register = new StudentRegister();

register.addStudent(student1);
register.addStudent(student2);

register.showStudents();