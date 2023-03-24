import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Roomlist } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {
@Input() rooms:Roomlist[] =[];
@Input() tre:string='';
@Output() selectedroom = new EventEmitter<Roomlist>();
selectroom(room:Roomlist){
  this.selectedroom.emit(room)
}
ngOnInit(): void {
    

}
ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
}
}
