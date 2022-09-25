export class CalculateService{
  operations :  any = {
    'X':(f:number,s:number)=>{
      return f*s;
    },
    '/':(f:number,s:number)=>{
      return f/s;
    },
    '-':(f:number,s:number)=>{
      return f-s;
    },
    '+':(f:number,s:number)=>{
      return f+s;
    },
    '%':(f:number,s:number)=>{
      return f/s*100;
    }
  }

  Calculate(firstNumber : number, secondNumber : number, operand : string){
    return this.operations[operand](firstNumber,secondNumber);
  }

  static Do(){

  }
}
