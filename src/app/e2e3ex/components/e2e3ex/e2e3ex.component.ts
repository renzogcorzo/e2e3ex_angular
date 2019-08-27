import { Component, OnInit } from '@angular/core';
import { E2e3exService } from '../../e2e3ex.service';
import { Ubigeo } from '../../models/ubigeo.model';

@Component({
  selector: 'app-e2e3ex',
  templateUrl: './e2e3ex.component.html',
  styleUrls: ['./e2e3ex.component.less']
  
})
export class E2e3exComponent implements OnInit {

  constructor(private e3e3eService: E2e3exService) { }

  ubigeos: any;
  departamentos: Ubigeo[] = [];
  provincias: Ubigeo[]= [];
  distritos: Ubigeo[]= [];

  ngOnInit() {
    this.getUbigeos();
  }
  resetUbigeos(){
    this.departamentos = [];
    this.provincias = [];
    this.distritos = [];
  }
  getUbigeos(){
    this.e3e3eService.getUbigeos().subscribe((data) => {
      this.ubigeos = data;
      this.resetUbigeos();
      this.parseUbigeos();
    });
  }
  parseUbigeos(){
    let rows: any = this.ubigeos.split('\n');
    for(let i = 0; i<rows.length; i++){
      let cols = rows[i].split('/');
      
      let group1, group2;    
      var re = new RegExp(/[“]+/g);
      
      //departaments
      if(cols.length === 3 && this.isEmptyString(cols[1]) && this.isEmptyString(cols[2])){
        let ubigeo: Ubigeo = new Ubigeo();
        group1 = this.trimString(cols[0]).split(' ');
        ubigeo.codigo = group1[0];
        group1.shift();
        ubigeo.nombre = group1.join(' ');
        
        ubigeo.codigoPadre = '-';
        ubigeo.nombrePadre = '-';
        this.departamentos.push(ubigeo);
      }
     
      //provincias
      else if(cols.length === 3 && !this.isEmptyString(cols[1]) && this.isEmptyString(cols[2])){
       
        let ubigeo: Ubigeo = new Ubigeo();
        group1 = this.trimString(cols[1]).split(' ');
        group2 = this.trimString(cols[0]).split(' ');
    
        ubigeo.codigo = group1[0];
        group1.shift();
        ubigeo.nombre = group1.join(' ');

        ubigeo.codigoPadre = group2[0];
        group2.shift();
        ubigeo.nombrePadre = group2.join(' ');

        this.provincias.push(ubigeo);
      }
      //distritos
      else if(cols.length === 3 && !this.isEmptyString(cols[1]) && !this.isEmptyString(cols[2])){

        let ubigeo: Ubigeo = new Ubigeo();
        group1 = this.trimString(cols[2]).split(' ');
        group2 = this.trimString(cols[1]).split(' ');
        
        ubigeo.codigo = group1[0];

        group1.shift();
        ubigeo.nombre = group1.join(' ');

        ubigeo.codigoPadre = group2[0];
        group2.shift();
        ubigeo.nombrePadre = group2.join(' ');

        this.distritos.push(ubigeo);
      }
      
    };
    

      
  }

  isEmptyString(s){
    return this.trimString(s).length === 0;
  }

  trimString(s){
    var re1 = new RegExp(/[“]+/g);
    var re2 = new RegExp(/[”]+/g);
    var re3 = new RegExp(/["]+/g);
    return s.replace(re1, '').replace(re2, '').replace(re3, '').trim();
  }

}
