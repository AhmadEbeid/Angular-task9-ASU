export class ProfileInfo {

id;
profilePicture;
name;
email;
mobile;
nationalID;
university;
faculty;
major;
minor;
expectedGraduationYear;

constructor(json){
  this.id = json.id;
  this.profilePicture = json.profilePicture;
  this.name = json.name;
  this.email = json.email;
  this.mobile = json.mobile;
  this.nationalID = json.nationalID;
  this.university = json.university;
  this.faculty = json.faculty;
  this.major = json.major;
  this.minor = json.minor;
  this.expectedGraduationYear = json.expectedGraduationYear;
}



}
