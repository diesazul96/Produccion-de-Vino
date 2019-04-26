import { Component, OnInit } from '@angular/core';
import { Parcel } from './parcel';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newParcel',
  templateUrl: 'newParcel.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./newParcel.component.css']
})
export class NewParcelComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed2 = true;
  public newSensor = true;
  public newTreatment = true;

  public parcels: Parcel[];
  private parcel: Parcel;
  parcelCollectionRef: AngularFirestoreCollection<Parcel>;

  private db: AngularFirestore;

  constructor(db: AngularFirestore, config: NgbModalConfig, private modalService: NgbModal) {
    this.db = db;
    this.parcel = new Parcel();
    this.parcelCollectionRef = db.collection<Parcel>('parcels');
    config.backdrop = 'static';
    config.keyboard = false;

    this.parcelCollectionRef.snapshotChanges().subscribe(data => {
      if(data){
        this.parcels = data.map( item =>{
          const data = item.payload.doc.data() as Parcel; //trae los datos de firebase
          data.id = item.payload.doc.id; //trae el id del documento creado een firebase
          return data;
        });
      }
    },
    err => console.log('Error ' + err),
    () => console.log('yay'))

  }

  ngOnInit() {}

  addSensor(name: string){
    this.parcel.sensors.push(name);
    (<HTMLInputElement>document.getElementById("nfInput")).value = '';
    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    li.setAttribute("style", "list-style-type: none; margin-top: 10px;");
    let a = document.createElement("a");
    a.setAttribute("style","color: white; text-decoration: none; font-size: 20px;");
    a.appendChild(document.createTextNode(this.parcel.sensors[this.parcel.sensors.length-1]));
    li.appendChild(a);
    ul.appendChild(li);
    this.newSensor = true;
  }

  addTreatment(name:string){
    this.parcel.treatments.push(name);
    (<HTMLInputElement>document.getElementById("nftInput")).value = '';
    let ul = document.getElementById("ul2");
    let li = document.createElement("li");
    li.setAttribute("style", "list-style-type: none; margin-top: 10px;");
    let a = document.createElement("a");
    a.setAttribute("style","color: white; text-decoration: none; font-size: 20px;");
    a.appendChild(document.createTextNode(this.parcel.treatments[this.parcel.treatments.length-1]));
    li.appendChild(a);
    ul.appendChild(li);
    this.newTreatment = true;
  }

  addParcel(name:string){
    let par = new Parcel();

    par.name = name;
    par.sensors = this.parcel.getValuesSensor();
    par.treatments = this.parcel.getValuesTreatment();

    this.parcel.sensors.length = 0;
    this.parcel.treatments.length = 0;

    return this.db.collection('parcels').add({
      name: par.name, sensors: par.sensors, treatments: par.treatments
    });
  }

  open(content) {
    this.modalService.open(content, { centered: true, size:'sm' });
  }
}
