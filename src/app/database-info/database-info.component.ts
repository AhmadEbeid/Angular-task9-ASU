import { Component, OnInit } from '@angular/core';
import { ServerConnectionsService } from '../server-connections.service';
import { Http } from '@angular/http'
import { ProfileInfo } from '../profile-info'

@Component({
  selector: 'app-database-info',
  templateUrl: './database-info.component.html',
  styleUrls: ['./database-info.component.css']
})
export class DatabaseInfoComponent implements OnInit {

  constructor(private server:ServerConnectionsService) { }

  profile = [];
  infoFlagClickMe = 0;
  id;

  ngOnInit() {
    this.server.getData().subscribe((res) => {
      console.log(res)
      for(let i = 0; i < res.length; i++){
        this.profile[i] = res[i];
        //console.log(this.profile)
      }
    });
  }

  refresh(){
    this.server.getData().subscribe((res) => {
      console.log(res)
      for(let i = 0; i < res.length; i++){
        this.profile[i] = res[i];
      }
    });
  }

  clickMe(id){
    this.infoFlagClickMe = 1;
    this.id = id;
  }

  submitMe(UserInfoJson, id){
    this.infoFlagClickMe = 0;
    this.server.updateData(UserInfoJson.value, id);
    setTimeout(()=>{ this.refresh() }, 1)
  }

}







//
// UserInfoJson;
// image;
// inputValue;
//
// submitMe(UserInfoJson){
//   this.UserInfoJson = UserInfoJson.value;
//   //this.server.updateData(UserInfoJson.value);
//   console.log(UserInfoJson.value);
//   this.readThis(this.inputValue);
// }
//
// changeListener($event) : void {
//   this.inputValue = $event.target;
// }
// readThis(inputValue: any): void {
//   var file:File = inputValue.files[0];
//   var myReader:FileReader = new FileReader();
//   myReader.onloadend = (e) => {
//     this.image = myReader.result;
//   }
//   myReader.readAsDataURL(file);
//   myReader.onloadend = (e) => {
//     var rawLog = myReader.result;
//     let raw = {"name":"text2"}
//     var str2 = {"name": "", "image": ""};
//     str2.image = rawLog;
//     str2.name = this.UserInfoJson.name;
//     console.log(str2);
//   };
// }
// input tag
//<input type="file" accept="image/*"  (change)="changeListener($event)">
