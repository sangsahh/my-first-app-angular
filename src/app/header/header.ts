import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed = true;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
