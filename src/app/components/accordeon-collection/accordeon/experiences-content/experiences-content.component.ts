import { Component, OnInit } from '@angular/core';
import { Experiences } from 'src/app/models/items/experiences';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-experiences-content',
  templateUrl: './experiences-content.component.html',
  styleUrls: ['./experiences-content.component.css']
})
export class ExperiencesContentComponent implements OnInit {

  experiences?:Experiences|any;

  constructor(private profileService:ProfileService){}

  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.profileService.getProfileData().subscribe(
      {
        next: (res) => {
          this.experiences = res.professionalExperience;
        },
        error: (err) => console.log(err)
      }
    );
  }

}
