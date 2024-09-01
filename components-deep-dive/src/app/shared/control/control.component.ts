import { Component, ElementRef, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host: {
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  label = input<string>();

  // Programmatic access to the host element
  private hostElement = inject(ElementRef)

  onClick = () => console.log('Control has been clicked!', this.hostElement);
}
