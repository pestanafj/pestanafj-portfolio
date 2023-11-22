import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/models/items/portfolio';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-portfolio-content',
  templateUrl: './portfolio-content.component.html',
  styleUrls: ['./portfolio-content.component.css']
})
export class PortfolioContentComponent implements OnInit{

  portfolio?:Portfolio|any;
  constructor(private profileService:ProfileService){}

  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.profileService.getProfileData().subscribe(
      {
        next: (res) => {
          this.portfolio = res.portfolio;
        },
        error: (err) => console.log(err)
      }
    );
  }

}
