import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  Missions: any
  current_Mission: any
  Mission = false
  

  constructor(private Apispaceservice: Apispaceservice, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Apispaceservice.sendGetRequest().subscribe(data=>{
      this.Missions = data
    })
    this.route.queryParams.subscribe(params => {
      this.current_Mission = params['currentMission']
    })
  }

  public onClick(mission: any){
    if(this.Mission && this.current_Mission == mission){
      this.Mission = false
    }
    else{
      this.Mission = true
      this.current_Mission = mission
    }
  }
}
