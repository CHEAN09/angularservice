import { ParticapantsService } from './../participants.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent  {
  
  participants;

  constructor(){
    let service = new ParticapantsService();
    this.participants = service.getParticipants();
  }
  
  showMale() {
   
  }
  ShowFemale(){

  }
  ShowAll(){

  }
}
