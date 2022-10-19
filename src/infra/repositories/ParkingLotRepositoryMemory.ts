import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../../core/entities/ParkingLot";
import ParkingLotRepository from "../../core/repositories/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {
  parkingLots = [
    { 
      code: "shopping", 
      capacity: 5,
      openHour: 8,
      closeHour: 22, 
      occupiedSpaces: 0
    }
  ];

  parkedCars = [];
  
  getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLotData = this.parkingLots.find(parkingLot => parkingLot.code === code)
    const parkingLotAdapter = ParkingLotAdapter.create(
      parkingLotData.code,
      parkingLotData.capacity,
      parkingLotData.openHour,
      parkingLotData.closeHour,
      parkingLotData.occupiedSpaces
    )
    
    parkingLotData.occupiedSpaces = this.parkedCars.length
    return Promise.resolve(parkingLotAdapter)
  }
  saveParkedCar(code: string, plate: string, date: Date): void {
    this.parkedCars.push({ code, plate, date })
  }
  
}