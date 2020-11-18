/**
 * cool interface
 */
interface Patient {
  name: string;
  id: number;
  dateOfBirth: Date;
}

/**
 * cool class
 */
class OtherPatientIdentifier {
  private name: string;
  private id: number;
  private dateOfBirth: Date;
  
  constructor(patient: Patient) {
    this.name = patient.name;
    this.id = patient.id;
    this.dateOfBirth = patient.dateOfBirth;
  }
  
  public show_id(): void {
    const value: any = "Name: " + this.name + ", ID: " + this.id + ", D.O.B.: " + this.dateOfBirth;
    console.log(value);
  }
}

var otherStringDOB: any = "15/01/1975";
const otherPatientParams: Patient = { name:"Murphy", id: 1, dateOfBirth: new Date(stringDOB) };

let otherUser: OtherPatientIdentifier = new OtherPatientIdentifier(otherPatientParams);

otherUser.show_id();
