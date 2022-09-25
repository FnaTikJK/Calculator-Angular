import {Component, OnInit} from "@angular/core";
import {CalculateService} from "../calculate.service";


@Component({
  selector: 'app-calculator',
  templateUrl: 'calculator.component.html',
  styleUrls: [ 'calculator.component.css' ],
})
export class CalculatorComponent implements OnInit{
  screen : string = "0";
  firstNumber : number = NaN;
  secondNumber : number = NaN;
  operand : string = "";

  calculateService = new CalculateService();

  ngOnInit():void {}
  PressKey(key : string) : void{
    if (typeof this.calculateService.operations[key] === 'function'){ //CalculateService.operations[key]
      if (typeof this.calculateService.operations[this.screen] !== 'function') {
        this.firstNumber = parseFloat(this.screen);
        this.secondNumber = NaN;
      }
      this.screen = key;

    }
    else if(key === 'C'){
      this.Clear();
    }
    else if(key === '<'){
      this.screen = this.screen.substring(0,this.screen.length-1);
      if(this.screen.length === 0)
        this.screen = "0";
    }
    else if(key === '+/-'){
      this.screen = String(parseInt(this.screen) * (-1));
    }
    else if(key === '.'){
      if (!this.screen.includes(".")){
        this.screen += key;
      }
    }
    else if(key === '='){
      if(!(isNaN(this.firstNumber) || this.operand ==="")) {
        if (isNaN(this.secondNumber))
          this.secondNumber = parseFloat(this.screen);
        this.screen = this.calculateService.Calculate(this.firstNumber, this.secondNumber, this.operand);
        this.firstNumber = parseFloat(this.screen);
      }
    }
    else{
      if (typeof this.calculateService.operations[this.screen] === 'function')
      {
        this.operand = this.screen;
        this.screen = "0";
      }
      if(this.screen === "0")
        this.screen = "";
      this.screen += key;
    }
  }

  private Clear(){
    this.screen  = "0";
    this.firstNumber = NaN;
    this.secondNumber = NaN;
    this.operand = "";
  }
}
