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
		enviar: "",
		comision:""
	}
	private calcParaEnviar:any = {
		recibir: "",
		enviar: "",
		comision:""
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
	this.calcParaEnviar.recibir = (this.calcParaEnviar.enviar - this.calcParaEnviar.comision).toFixed(2);
	//console.log("Comision:"+this.calcParaEnviar.comision);
  }

  calcularRecibo(){
	console.log("calcularRecibo()");
	this.calcParaRecibir.recibir = Number(this.calcParaRecibir.recibir);
	this.calcParaRecibir.comision = (((this.porcentaje * this.calcParaRecibir.recibir)/100) + this.adicional).toFixed(2);
	this.calcParaRecibir.enviar = (this.calcParaRecibir.recibir + this.calcParaRecibir.comision).toFixed(2);

  }

}
