import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormatNumberPipe } from "../pipes.pipe";

@Component({
  selector: 'app-input-output',
  standalone : true,
  imports: [CommonModule, FormatNumberPipe],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss'
})
export class InputOutputComponent {
  @Input() result: number | null = null;
}