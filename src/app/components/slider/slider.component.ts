import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() title: String = '';
  @Output() emisor = new EventEmitter<Number>();
  value = 0;

  cambioSlider(valor: number){
    this.emisor.emit(valor);
  }
}
