import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent implements OnInit {

  @Input()
  accordeonTitle:String="Title...";

  ngOnInit(): void {
    const accordeonTriggers:NodeListOf<Element> = document.querySelectorAll('.acordeon__container .trigger');

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
