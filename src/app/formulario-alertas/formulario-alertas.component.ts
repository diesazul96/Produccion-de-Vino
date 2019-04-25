import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface alertasSensor {
  id: string;
  valor: string;
  comparacion: string;
  notificar: boolean;
  activar: boolean;
}

@Component({
    selector: 'formulario-alertas',
    templateUrl: 'formulario-alertas.html',
    styleUrls: ['formulario-alertas.css']
})
export class FormularioAlertas {

  color = "primary";
  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<alertasSensor>;
  alerta: any = {};
  alertas: alertasSensor[];

  constructor(db: AngularFirestore) {
    this.db = db;
    this.userCollectionRef = db.collection<alertasSensor>('alertasSensor');

    this.userCollectionRef.snapshotChanges().subscribe(data => {
      if (data) {
        this.alertas = data.map(item => {
          const data = item.payload.doc.data() as alertasSensor;
          data.id = item.payload.doc.id;
          return data;
        });
      }
    },
      err => console.log('Error ' + err),
      () => console.log('yay'))

  }

  createAlertaSensor() {
    if (!this.alerta.id) {
      this.alerta.id = Date.now();
    } else {
      return this.updatealertasSensor();
    }
    console.log("creando nueva alerta");
    return this.db.collection('alertasSensor').add(
      this.alerta
      ).then(()=>{
        this.alerta = {};
        console.log(this.alerta.valor);
    });
  }

  deleteAlertaSensor() {
    return this.db.collection('alertasSensor').doc(this.alerta.id).delete();
  }

  seleccionarAlerta(a) {
    console.log(a);
    this.alerta = a;
  }

  updatealertasSensor() {
    console.log("update:"+this.alerta.id)
    this.db.doc('/alertasSensor/' + this.alerta.id).update(
      this.alerta
    ).then(()=>{
      this.alerta = {};
      console.log(this.alerta.valor);
  });
  }
}
