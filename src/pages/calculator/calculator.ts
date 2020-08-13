import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { Clipboard } from '@ionic-native/clipboard';
import { Toast } from '@ionic-native/toast';



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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private clipboard: Clipboard,
    private toast: Toast
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  ngOnInit(){
  	registerLocaleData( es );
  }

  calcularEnvio(){
  	if(this.calcParaEnviar.enviar <=0 || this.calcParaEnviar.enviar == ""){
      this.calcParaEnviar= {
        enviar: "",
        recibir: "",
        comision:""
      }
  	}else{
      this.calcParaEnviar.enviar = Number(this.calcParaEnviar.enviar);
      this.calcParaEnviar.comision = (((this.porcentaje * this.calcParaEnviar.enviar)/100) + this.adicional).toFixed(2);
      this.calcParaEnviar.recibir = (parseFloat(this.calcParaEnviar.enviar) - parseFloat(this.calcParaEnviar.comision)).toFixed(2);
      //console.log("Comision:"+this.calcParaEnviar.comision);
    }
  }

  calcularRecibo(){
    if(this.calcParaRecibir.recibir <= 0 || this.calcParaRecibir.recibir == ""){
      this.calcParaRecibir= {
        recibir: "",
        enviar: "",
        comision:""
      }
    } 
    else {
      var r = (100 - this.porcentaje)/100;
      this.calcParaRecibir.recibir = Number(this.calcParaRecibir.recibir);
      this.calcParaRecibir.enviar = ((parseFloat(this.calcParaRecibir.recibir) + this .adicional)/r).toFixed(2);
      this.calcParaRecibir.comision = (parseFloat(this.calcParaRecibir.enviar) - parseFloat(this.calcParaRecibir.recibir)).toFixed(2);
    }
  }

  hola(){
  	console.log("hola");
  }

  cleanInput(campo){
    console.log(campo);
    if(campo === "recibir"){
      this.calcParaRecibir.recibir = "";
      this.calcularRecibo();
    } 
    if(campo === "enviar"){
      this.calcParaEnviar.enviar = "";
      this.calcularEnvio();
    } 
    else {
      return;
    }
  }

  copyAmount(label, amount){
    this.clipboard.copy(label+" $"+amount);

    this.clipboard.paste().then(
      (resolve: string) => {
        this.toast.show('Copiado', '5000', 'center').subscribe(msg => {
          console.log(msg);
        });
      },
      (reject: string) => {
        console.log('Error: '+reject);
      }
    );

/*    console.log("Copy Amount")
    if(bloque === "recibo"){
      console.log("Bloque de recibo");
      if(this.calcParaRecibir.hasOwnProperty(campo)){
        console.log("calcParaRecibir", campo);
      }
    }if(bloque === "envio"){
      console.log("Bloque de envio");
      if(this.calcParaEnviar.hasOwnProperty(campo)){
        console.log("calcParaEnviar", campo);
      }else{
          console.log("sino");
      }
    }*/
  }

}
