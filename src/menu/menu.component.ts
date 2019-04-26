import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Parcel } from 'src/newParcel/parcel';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isCollapsed = true;
  public parcels: Parcel[];
  parcelCollectionRef: AngularFirestoreCollection<Parcel>;
  private db: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.db = db;
    this.parcelCollectionRef = db.collection<Parcel>('parcels');
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


}
