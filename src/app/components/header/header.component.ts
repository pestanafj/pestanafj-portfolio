import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  perfil?:Profile | undefined;

  constructor(
    private profileService:ProfileService,
  ){

  }
  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.profileService.getProfileData().subscribe(
      {
        next: (res) => {
          this.perfil = {
            name: res.name,
            photo:res.photo,
            job:res.job,
            location:res.location,
            phone: res.phone,
            email:res.email,
            skills:res.skills,
            languages: res.languages,
            education: res.education,
            portfolio: res.portfolio,
            professionalExperience: res.professionalExperience
          }

        },
        error: (err) => console.log(err)
      }
    );
  }


}
