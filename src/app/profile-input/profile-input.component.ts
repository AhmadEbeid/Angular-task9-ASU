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

  ngOnInit() {
  }

  UserInfoJson;
  image;
  inputValue;
  
  submitMe(UserInfoJson){
    this.UserInfoJson = UserInfoJson.value;

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
