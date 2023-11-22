import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/items/education';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-education-content',
  templateUrl: './education-content.component.html',
  styleUrls: ['./education-content.component.css']
})
export class EducationContentComponent implements OnInit {

  education?:Education|any;

  constructor(private profileService:ProfileService){}

  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.profileService.getProfileData().subscribe(
      {
        next: (res) => {
          this.education = res.education;
        },
        error: (err) => console.log(err)
      }
    );
  }

}
