import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-hijo',
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Output() messageEvent = new EventEmitter<string>();
  mensaje: string = '';
  sendMessage(){
    this.messageEvent.emit(this.mensaje);
  }
}
