export class Class {
  private id: string;
  private name: string;
  private teachers: string[];
  private students: string[];
  private module: number;

  constructor(
    id: string,
    name: string,
    module: number,
    teachers: string[],
    students: string[]
  ) {
    this.id = id;
    this.name = name;
    this.teachers = teachers;
    this.students = students;
    this.module = module;
  }

  public getId() {
    return this.id;
  }
  public getClassName() {
    return this.name;
  }
  public getModule() {
    return this.module;
  }

  public setTeachers(newTeachers: string[]) {
    this.teachers = newTeachers;
  }
  public setStudents(newStudents: string[]) {
    this.students = newStudents;
  }
  public setModule(newModule: number) {
    this.module = newModule;
  }
}
