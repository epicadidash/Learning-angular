import {Component, OnInit} from '@angular/core';
import { Room, Roomlist } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
title:string = 'Room 101'
hiderooms=false
numberofRooms = 12
rooms: Room = {
  availableRooms:10,
  bookedRooms:5,
  totalRooms:20
}
roomList:Roomlist[] = []
ngOnInit(): void {
    this.roomList =[{
      roomNumber:1,
      roomType:'Deluxe Room',
      amenitites:'AC , Free Wifi , TV, Bathroom',
      price:500,
      photos:'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fexplore&psig=AOvVaw2r2uCkWt1cKb1WC5CUcrl4&ust=1679423602035000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjCgsyS6_0CFQAAAAAdAAAAABAD',
      checkintime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    },
    {
      roomNumber:2,
      roomType:'Deluxe Room',
      amenitites:' TV, Bathroom',
      price:400,
      photos:'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fexplore&psig=AOvVaw2r2uCkWt1cKb1WC5CUcrl4&ust=1679423602035000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjCgsyS6_0CFQAAAAAdAAAAABAD',
      checkintime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    },
    {
      roomNumber:3,
      roomType:'Private Suite',
      amenitites:'AC , Free Wifi , TV, ',
      price:100,
      photos:'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fexplore&psig=AOvVaw2r2uCkWt1cKb1WC5CUcrl4&ust=1679423602035000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjCgsyS6_0CFQAAAAAdAAAAABAD',
      checkintime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
    }]
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
