export interface Room{
    availableRooms:number;
    bookedRooms:number;
    totalRooms:number
}
export interface Roomlist{
    roomNumber:number
    roomType:string,
    amenitites:string,
    price:number,
    photos:string,
    checkintime:Date,
    checkoutTime:Date
}