import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})


export class InformationComponent {

  @Input()
  job:string='';
  @Input()
  location:string='';
  @Input()
  phone:string='';
  @Input()
  email:string='';


}
