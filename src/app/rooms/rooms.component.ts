import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, Roomlist } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit {
title:string = 'Room 101'
hiderooms=false
numberofRooms = 12
rooms: Room = {
  availableRooms:10,
  bookedRooms:5,
  totalRooms:20
}
roomList:Roomlist[] = []
ngAfterViewInit(): void {
}
ngOnInit(): void {
}
selectRoom(room:Roomlist){
console.log(room)
}
toogle(){
this.hiderooms = !this.hiderooms
}
Addroom(){
  const room:Roomlist ={
      roomNumber:4,
      roomType:'Deluxe Room',
      amenitites:'AC , Free Wifi , TV, Bathroom',
      price:500,
      photos:'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fexplore&psig=AOvVaw2r2uCkWt1cKb1WC5CUcrl4&ust=1679423602035000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjCgsyS6_0CFQAAAAAdAAAAABAD',
      checkintime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    
  };
  this.roomList = [...this.roomList,room]
}
}
