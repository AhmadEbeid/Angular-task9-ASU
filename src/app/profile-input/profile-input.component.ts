import { Component, OnInit } from '@angular/core';
import { ServerConnectionsService } from '../server-connections.service';
import { Http } from '@angular/http'


@Component({
  selector: 'app-profile-input',
  templateUrl: './profile-input.component.html',
  styleUrls: ['./profile-input.component.css']
})
export class ProfileInputComponent implements OnInit {

  profileEmpty;
  profileSize;

  constructor(private server:ServerConnectionsService) { }


  UserInfoJson;
  image;
  inputValue;
  profile = [];
  emailExists = 0;
  mobileExists = 0;
  nationalIDExists = 0;


  ngOnInit() {
    this.server.getData().subscribe((res) => {
      console.log(res)
      for(let i = 0; i < res.length; i++){
        this.profile[i] = res[i];
        //console.log(this.profile)
      }
    });
  }

  submitMe(UserInfoJson){
    this.UserInfoJson = UserInfoJson.value;

    for(let i = 0; i < this.profile.length; i++){
      
      this.emailExists = ((this.profile[i].Email == this.UserInfoJson.Email) ? 1 : 0);
      this.mobileExists = ((this.profile[i].Mobile == this.UserInfoJson.Mobile) ? 1 : 0);
      this.nationalIDExists = ((this.profile[i].National_ID == this.UserInfoJson.National_ID) ? 1 : 0);
      
      if(this.nationalIDExists || this.emailExists || this.mobileExists){
        return;
      }
    }

    if(this.profileEmpty == 0){
      this.readThis(this.inputValue);
    }else{
      this.profileEmpty = 1;
    }
  }
  
  changeListener($event) : void {
    this.profileEmpty = 0;
    this.inputValue = $event.target;
  }
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.image = myReader.result;
    }
    if(file.size < 510000){
      myReader.readAsDataURL(file);
      myReader.onloadend = (e) => {
        var rawLog = myReader.result;
        console.log(rawLog);
        this.UserInfoJson["ProfilePicture"] = rawLog;
        this.server.postData(this.UserInfoJson);
        location.reload();
      };
    }else{
      this.profileSize = 1;
    }
   
  }

}
