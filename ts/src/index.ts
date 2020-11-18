/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable id-length */

const stringDOB = "15/01/1975";

/**
 * Cool interface
 */
interface Patient {
  name: string;
  id: number;
  dateOfBirth: Date;
}

/**
 * Cool class
 */
class PatientIdentifier {
  private name: string;
  private id: number;
  private dateOfBirth: Date;
  
  constructor(patient: Patient) {
    this.name = patient.name;
    this.id = patient.id;
    this.dateOfBirth = patient.dateOfBirth;
  }
  
  public showID(): void {
    const value: any = "Name: " + this.name + ", ID: " + this.id + ", D.O.B.: " + this.dateOfBirth;
    console.log(value);
  }
}

const patientParams: Patient = {
  name:"Murphy",
  id: 1, 
  dateOfBirth: new Date(stringDOB)
};

const user: PatientIdentifier = new PatientIdentifier(patientParams);

user.showID();
