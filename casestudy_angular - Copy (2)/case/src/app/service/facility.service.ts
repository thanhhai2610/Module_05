import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  facilityList: Facility [] = [
    {
      id: 1,
      name: 'Villa 001',
      area: 222,
      cost: 2222,
      maxPeople: 10,
      rentType: 'Day',
      standardRoom: 'Vip',
      descriptionOfOtherConvenience: 'None',
      poolArea: 20,
    },
    {
      id: 2,
      name: 'Room 001',
      area: 222,
      cost: 2222,
      maxPeople: 10,
      rentType: 'Day',
      standardRoom: 'Vip',
      descriptionOfOtherConvenience: 'None',
      poolArea: 20,
    },
    {
      id: 3,
      name: 'House 001',
      area: 222,
      cost: 2222,
      maxPeople: 10,
      rentType: 'Day',
      standardRoom: 'Vip',
      descriptionOfOtherConvenience: 'None',
      poolArea: 20,
    },
    {
      id: 4,
      name: 'House 001',
      area: 222,
      cost: 2222,
      maxPeople: 10,
      rentType: 'Day',
      standardRoom: 'Vip',
      descriptionOfOtherConvenience: 'None',
      poolArea: 20,
    }
  ];

  constructor() {
  }

  getList() {
    return this.facilityList;
  }

}
