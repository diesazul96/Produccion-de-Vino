import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

export interface User{
  id: string;
  correo: string;
  password: string;
}

@Component({
  selector: 'app-inicioSesion',
  templateUrl: 'inicioSesion.component.html',
  styleUrls: ['./inicioSesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  public users: User[];
  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<User>;

  constructor(db: AngularFirestore, config: NgbModalConfig, private modalService: NgbModal, private router: Router) {
    this.db = db;
    this.userCollectionRef = db.collection<User>('usuarios');

    this.userCollectionRef.snapshotChanges().subscribe(data => {
      if(data){
        this.users = data.map( item =>{
          const data = item.payload.doc.data() as User; //trae los datos de firebase
          data.id = item.payload.doc.id; //trae el id del documento creado een firebase
          return data;
        });
      }
    },
    err => console.log('Error ' + err),
    () => console.log('yay'))
  }

  ngOnInit() {}

  logIn(user: string, password: string, content){
    var flag = false;
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].correo == user && this.users[i].password == password){
        flag = true;
        this.router.navigateByUrl(`${'/menu'}`);
      }
    }
    if(flag == false){
      this.modalService.open(content, { centered: true, size:'sm' });
    }
  }
}
