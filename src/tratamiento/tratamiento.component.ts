import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AngularFirestore,} from '@angular/fire/firestore';

@Component({
  selector: 'tratamiento',
  templateUrl: './tratamiento.component.html',
  styleUrls: ['./tratamiento.component.css'],
  encapsulation: ViewEncapsulation.None,//https://stackoverflow.com/questions/44210786/style-not-working-for-innerhtml-in-angular-2-typescript

})
export class TratamientoComponent implements OnInit{
  private db: AngularFirestore;
  constructor(db : AngularFirestore) {
    this.db=db;
  }

  ngOnInit():void {
  }

  public alert(){
    alert("Tratamiento registrado correctamente!");
    var list= document.getElementsByClassName("input");
    for (var i = 0; i < list.length; i++) {
      (<HTMLInputElement>list[i]).value = "";
    }
  }
  public append(id: string):void{

    var r = document.getElementById(id);
    r.insertAdjacentHTML('afterbegin', '\
        <div class="half">\
          <input #'+id+' type="text" class="half"/>\
        </div>');
  }

  public createTratamiento(origen: string, quim: string, ferts: string[], pests: string[], fungs: string[]){


      return this.alert(),this.db.collection('tratamientos').add({
        origen: origen,
        contenidoQuimico: quim,
        Fertilizantes: ferts,
        pesticidas: pests,
        fungicidas: fungs
      });


  }




}
