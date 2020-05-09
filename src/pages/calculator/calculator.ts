import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
	public porcentaje:number = 5.40;
	public adicional:number = 0.30;
	private calcParaRecibir:any = {
		recibir: "",
		enviar: 0,
		comision:0
	}
	private calcParaEnviar:any = {
		recibir: 0,
		enviar: "",
		comision:0
	}
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  calcularEnvio(){
  	if(this.calcParaEnviar.enviar <=0){
  		return;
  	}
  	this.calcParaEnviar.enviar = Number(this.calcParaEnviar.enviar);
	this.calcParaEnviar.comision = (((this.porcentaje * this.calcParaEnviar.enviar)/100) + this.adicional).toFixed(2);
	this.calcParaEnviar.recibir = (parseFloat(this.calcParaEnviar.enviar) - parseFloat(this.calcParaEnviar.comision)).toFixed(2);
	//console.log("Comision:"+this.calcParaEnviar.comision);
  }

  calcularRecibo(){
	console.log("calcularRecibo()");
	var r = (100 - this.porcentaje)/100;
	this.calcParaRecibir.recibir = Number(this.calcParaRecibir.recibir);
	this.calcParaRecibir.enviar = ((parseFloat(this.calcParaRecibir.recibir) + this .adicional)/r).toFixed(2);
	this.calcParaRecibir.comision = (parseFloat(this.calcParaRecibir.enviar) - parseFloat(this.calcParaRecibir.recibir)).toFixed(2);
  }

  hola(){
  	console.log("hola");
  }

}
