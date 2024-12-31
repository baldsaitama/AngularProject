import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { InputOutputComponent } from '../input-output/input-output.component';
import { RoleDirective } from '../Role.directive';


@Component({
  selector: 'app-calculator',
  standalone : true,
  imports: [FormsModule,InputOutputComponent, RoleDirective],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
FirstNumber : number | null = null;
SecondNumber : number | null = null;
result : number | null = null;
operation : string = "";
role: string = 'admin';
constructor(private calculatorService : CalculatorService){}

calculate(operation: string) : void
{
    if(this.FirstNumber === null || this.SecondNumber === null)
    {
      alert("Enter valid numbers!");
      return;
    }
    switch(operation)
    {
      case 'add':
        this.result = this.calculatorService.add(this.FirstNumber, this.SecondNumber);
        break;
      case 'subtract':
        this.result = this.calculatorService.subtract(this.FirstNumber, this.SecondNumber);
        break;
      case 'multiply':
        this.result = this.calculatorService.multiply(this.FirstNumber, this.SecondNumber);
        break;
      case 'divide':
          this.result = this.calculatorService.divide(this.FirstNumber, this.SecondNumber);
        break;
      default:
        alert('Please select an operation.');
    }
}
}
