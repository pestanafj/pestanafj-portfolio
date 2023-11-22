import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/app/models/items/languages';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-languages-content',
  templateUrl: './languages-content.component.html',
  styleUrls: ['./languages-content.component.css']
})
export class LanguagesContentComponent implements OnInit {


  languages?:Languages|any;

  constructor(private profileService:ProfileService){}

  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.profileService.getProfileData().subscribe(
      {
        next: (res) => {
          this.languages = res.languages;
        },
        error: (err) => console.log(err)
      }
    );
  }
}
