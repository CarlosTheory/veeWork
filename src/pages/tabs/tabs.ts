import { Component } from '@angular/core';

//Paginas que van en tabs
import { CalculatorPage } from '../calculator/calculator';
import { PricesPage } from '../prices/prices';

@Component({
	templateUrl:'tabs.html'
})

export class TabsPage {
	tab1Root = CalculatorPage;
	tab2Root = PricesPage;

	constructor (){

	}
}