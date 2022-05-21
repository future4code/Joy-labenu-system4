enum Specialities {
  JavaScript = "JS",
  CSS = "CSS",
  React = "React",
  TypeScript = "TS",
  POO = "Programação Orientada a Objetos",
}

export class Teachers {
  private id: string;
  private name: string;
  private email: string;
  private birth_date: string;
  private classId: string;
  private specialities: Specialities;

  constructor(
    id: string,
    name: string,
    email: string,
    birth_date: string,
    classId: string,
    specialities: Specialities
  ) {
    this.classId = classId;
    this.id = id;
    this.name = name;
    this.email = email;
    this.birth_date = birth_date;
    this.specialities = specialities;
  }

  public getId() {
    return this.id;
  }
  public getTeacherName() {
    return this.name;
  }
  public getEmail() {
    return this.email;
  }
  public getBirthDate() {
    return this.birth_date;
  }
  public getclassId() {
    return this.classId;
  }
  public setSpecialities(newSpeciality: Specialities) {
    this.specialities = newSpeciality;
  }
}
