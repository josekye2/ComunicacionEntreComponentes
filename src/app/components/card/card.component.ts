import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { MaterialModule } from "../../material/material.module";
import { SliderComponent } from "../slider/slider.component";

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MaterialModule, SliderComponent],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, OnChanges, OnDestroy{
    contador = 0;

    constructor(){
        console.log('constructor');
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.contador++;
        console.log('do Checked: ', this.contador);
    }
    ngOnInit(): void {
        console.log('Ejecución del OnInit')
    }
    /*ngDoCheck(): void {
        this.contador++;
        console.log('do Checked: ', this.contador)
    }*/
    ngOnDestroy(): void {
        console.log('Componente destruido.')
    }
   

    valorDelHijo: number | null = null;

    longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`;

}