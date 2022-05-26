export class Students {
  private id: string;
  private name: string;
  private email: string;
  private birth_date: string;
  private classId: string;
  private hobbies: string;

  constructor(
    id: string,
    name: string,
    email: string,
    birth_date: string,
    classId: string,
    hobbies: string
  ) {
    this.classId = classId;
    this.id = id;
    this.name = name;
    this.email = email;
    this.birth_date = birth_date;
    this.hobbies = hobbies;
  }

  public getId() {
    return this.id;
  }
  public getStudentName() {
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

  public setClassId(newClassId: string){
    this.classId = newClassId
  }

  public setHobbies(newHobbies: string) {
    this.hobbies = newHobbies;
  }
}