import { Component, OnInit} from '@angular/core';
import { AngularFirestore,} from '@angular/fire/firestore';

@Component({
  selector: 'movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit{
  private db: AngularFirestore;
  constructor(db : AngularFirestore) {
    this.db=db;
  }
  ngOnInit():void {
  }
  public alert(){

    alert("Movimiento registrado correctamente!");
    var list= document.getElementsByClassName("input");
    for (var i = 0; i < list.length; i++) {
      (<HTMLInputElement>list[i]).value = "";
    }

  }
  public createMovimiento(cliente: string, tipoUva: string, cantidad: number, valor: number, fecha:Date){


    return this.alert(),this.db.collection('movimientos').add({
    cliente: cliente,
    tipoUva: tipoUva,
    cantidad: cantidad,
    valor: valor,
    fecha: fecha

    });


  }



}
