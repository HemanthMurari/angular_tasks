import { Component, OnInit } from '@angular/core';
import { ProdService } from '../services/prod.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  hemanth:any;
  constructor(private api:ProdService){}
  ngOnInit(){
    this.api.get().subscribe(res=>{
      this.hemanth=res;
    })
  }

}
