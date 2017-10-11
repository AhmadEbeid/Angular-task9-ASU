import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerConnectionsService } from '../server-connections.service';
import { Http } from '@angular/http'

@Component({
  selector: 'app-profile-idinfo',
  templateUrl: './profile-idinfo.component.html',
  styleUrls: ['./profile-idinfo.component.css']
})
export class ProfileIdinfoComponent implements OnInit {

  id;
  private sub: any;
  profile;
  
  constructor(private route: ActivatedRoute, private server:ServerConnectionsService) {}
  

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });

    this.server.getProfileData(this.id).subscribe((res) => {
      this.profile = res;
      console.log(this.profile);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  UserInfoJson;
  image;
  inputValue;
  profileEmpty;
  profileSize;
  
  submitMe(UserInfoJson){
    this.UserInfoJson = UserInfoJson.value;

    if(this.profileEmpty == 0){
      this.readThis(this.inputValue);
    }else{
      this.UserInfoJson["ProfilePicture"] = this.profile.ProfilePicture;
      this.server.updateData(this.UserInfoJson, this.id);
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
        this.UserInfoJson["ProfilePicture"] = rawLog;
        this.server.updateData(this.UserInfoJson, this.id);
        this.profile = this.UserInfoJson;
      };
    }else{
      this.profileSize = 1;
    }
   
  }

}
