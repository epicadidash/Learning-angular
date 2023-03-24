import { Injectable } from '@angular/core';
import { Roomlist } from '../rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class StarService {
  roomList:Roomlist[] =[{
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
getrooms(){
 return this.roomList;
}
  constructor() { }
}
