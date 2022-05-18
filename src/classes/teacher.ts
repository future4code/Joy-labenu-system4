enum Specialities {
  JavaScript = "JS",
  CSS = "CSS",
  React = "React",
  TypeScript = "TS",
  POO = "Programação Orientada a Objetos",
}

export class Teachers {
  private id: string;
  private teacherName: string;
  private email: string;
  private birthDate: Date;
  private classId: string;
  private specialities: Specialities;

  constructor(
    id: string,
    teacherName: string,
    email: string,
    birthDate: Date,
    classId: string,
    specialities: Specialities
  ) {
    this.classId = classId;
    this.id = id;
    this.teacherName = teacherName;
    this.email = email;
    this.birthDate = birthDate;
    this.specialities = specialities;
  }

  public getId() {
    this.id;
  }
  public getteacherName() {
    this.teacherName;
  }
  public getEmail() {
    this.email;
  }
  public getBirthDate() {
    this.birthDate;
  }
  public getclassId() {
    this.classId;
  }
  public setSpecialities(newSpeciality: Specialities) {
    this.specialities = newSpeciality;
  }
}
