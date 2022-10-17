import ParkingLot from "../../core/entities/ParkingLot";
import ParkingLotRepository from "../../core/repositories/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {
  parkingLots = [
    new ParkingLot("shopping", 5,8,22, 2)
  ];

  parkedCars = [];
  
  getParkingLot(code: string): Promise<ParkingLot> {
    return Promise.resolve(this.parkingLots.find(parkingLot => parkingLot.code === code))
  }
  saveParkedCar(code: string, plate: string, date: Date): void {
    this.parkedCars.push({ code, plate, date })
  }
  
}