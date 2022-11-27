import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facilityList : Facility [];

  constructor(private _facilityService:FacilityService) { }

  ngOnInit(): void {
    this.facilityList = this._facilityService.getList();
  }

}
