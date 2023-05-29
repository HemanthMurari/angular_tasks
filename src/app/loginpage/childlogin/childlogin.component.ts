import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childlogin',
  templateUrl: './childlogin.component.html',
  styleUrls: ['./childlogin.component.css']
})
export class ChildloginComponent {
@Input() products:any;
}
