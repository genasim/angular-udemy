import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';

type ButtonType = "button" | "submit" | "menu" | "reset"

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  icon = input<string>()
  title = input<string>()
  type = input<ButtonType>("button")

  click = output<void>()

  iconStyles = computed(() => `icon bi bi-${this.icon()}`)
}
