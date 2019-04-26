import { Component, OnInit} from '@angular/core';
import { AngularFirestore,} from '@angular/fire/firestore';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  private db: AngularFirestore;
  constructor(db : AngularFirestore) {
    this.db=db;
  }

  ngOnInit():void {
  }
  public alert(){

    alert("Usuario registrado correctamente!");
    var list= document.getElementsByClassName("input");
    for (var i = 0; i < list.length; i++) {
      (<HTMLInputElement>list[i]).value = "";
    }

  }
  public createUsuario(correo: string, nombre: string, pass: string, passConf: string){

    if(pass===passConf){
      return this.alert(),this.db.collection('usuarios').add({
        correo: correo,
        nombre: nombre,
        password: pass
      });
    }else{
      alert("Las contraseñas deben coincidir");
    }

  }


}
