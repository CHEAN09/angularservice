import { ParticapantsService } from './../participants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent  {
  display;
  participants;

  constructor(service:  ParticapantsService){
    this.participants = service.getParticipants();
    this.display = service.getParticipants();
  }
  showMale(){
    this.display = this.participants;
    this.display = this.participants.filter(participant => participant.gender === 'Male');

  }
  showFemale(){
    this.display = this.participants;
    this.display = this.participants.filter(participant => participant.gender === 'Female');
  }
  showAll(){
    this.display = this.participants;
  }
  filterGender(gender: string){
    this.display = this.participants.filter(participant => participant.gender === gender)
  }
 
}
