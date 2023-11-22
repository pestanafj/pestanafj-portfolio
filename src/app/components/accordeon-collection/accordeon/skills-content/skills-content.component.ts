import { Component, Input, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/items/skills';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-skills-content',
  templateUrl: './skills-content.component.html',
  styleUrls: ['./skills-content.component.css']
})
export class SkillsContentComponent implements OnInit {

  skills?:Skills|any;

  constructor(private profileService:ProfileService){}

  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.profileService.getProfileData().subscribe(
      {
        next: (res) => {
          this.skills = {
            hardSkills:res.skills.hardSkills,
            softSkills:res.skills.softSkills
          }
        },
        error: (err) => console.log(err)
      }
    );
  }
}
