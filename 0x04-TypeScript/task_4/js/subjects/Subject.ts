namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;
    
    public set setTeacher(v : Subjects.Teacher) {
      this.teacher = v;
    }
  }
}
