export class Students {
  private id: string;
  private studentName: string;
  private email: string;
  private birthDate: Date;
  private classId: string;
  private hobbies: string;

  constructor(
    id: string,
    studentName: string,
    email: string,
    birthDate: Date,
    classId: string,
    hobbies: string
  ) {
    this.classId = classId;
    this.id = id;
    this.studentName = studentName;
    this.email = email;
    this.birthDate = birthDate;
    this.hobbies = hobbies;
  }

  public getId() {
    this.id;
  }
  public getStudentName() {
    this.studentName;
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

  public setHobbies(newHobbies: string) {
    this.hobbies = newHobbies;
  }
}
