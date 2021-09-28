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

  /*constructor(){
    let service = new ParticapantsService();
    this.participants = service.getParticipants();
  }*/
  
  /*showMale() {
   for(let i = 0; i < this.participants.length; i++){
      if(this.participants[i].gender ==='male'){
        this.participants[i]);
      }
   }
  }*/
  constructor(service:  ParticapantsService){
    this.participants = service.getParticipants();
    this.display = service.getParticipants();
  }
  male(){
    this.display = this.participants
    this.display = this.participants.filter(participant => participant.gender === 'Male');

  }
  female(){
    this.display = this.participants
    this.display = this.participants.filter(participant => participant.gender === 'Male');
  }
  showAll(){
    this.display = this.participants;
  }
  /*ShowFemale(){
    for(let i = 0; i < this.participants.length; i++){
      if(this.participants[i].gender ==='female'){
        console.log(this.participants[i]);
      }
   }
  }*/
 
}
