export class Parcel{
  id: string;
  name: string;
  sensors: string[];
  treatments: string[];

  constructor(){
    this.sensors = [];
    this.treatments = [];
  }

  getValuesSensor(){
    return this.sensors.slice();
  }

  getValuesTreatment(){
    return this.treatments.slice();
  }
}
