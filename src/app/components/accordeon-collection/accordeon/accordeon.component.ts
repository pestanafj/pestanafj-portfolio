import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.css']
})
export class AccordeonComponent implements OnInit{

  @Input()
  accordeonTitle:string = 'Title...'


  ngOnInit(): void {
    this.addEvent();
  }


  addEvent():void{
    const accordeonTriggers:NodeListOf<Element> =
      document.querySelectorAll('.acordeon__container .trigger');

    accordeonTriggers.forEach((trigger)=>{
      trigger.addEventListener('click', (e)=>{
        const accordeon:HTMLElement|null = trigger.parentElement;
        let isOpen:boolean = false;

        if(!(accordeon==null)){
          isOpen = accordeon.classList.contains('open');
          if(isOpen){
              accordeon.classList.remove('open');
          }
          else{
              accordeon.classList.add('open');
          }
        }

      })
    });
  }

}
