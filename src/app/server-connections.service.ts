import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ServerConnectionsService {

  constructor(private http:Http) { }

  getData(){
    return this.http.get("http://127.0.0.1:8000/data").map((res) => res.json() );
  }

  getProfileData(id){
    return this.http.get('http://127.0.0.1:8000/data' + id + '/').map((res) => res.json() );
  }

  postData(body){
    this.http.post('http://127.0.0.1:8000/data', body).subscribe();
  }

  // deleteData(body){
  //   this.http.delete('http://localhost:3000/data/', body).subscribe();
  // }

  updateData(body, id){
    this.http.put('http://127.0.0.1:8000/data' + id + '/', body).subscribe();
  }

}
