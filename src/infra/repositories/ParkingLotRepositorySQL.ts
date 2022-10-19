import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../../core/entities/ParkingLot";
import ParkingLotRepository from "../../core/repositories/ParkingLotRepository";
import database from '../database/database'

export default class ParkingLotRepositorySQL implements ParkingLotRepository{
  
  async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLot: ParkingLot = await database.oneOrNone(
      `select * from public.parkinglot where code = $1`,
      [code]
    )

    return ParkingLotAdapter.create(
      parkingLot.code, 
      parkingLot.capacity, 
      parkingLot.openHour, 
      parkingLot.closeHour,
      parkingLot.occupiedSpaces
    )
  }
  
  async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
    await database.none(
      `insert into public.parkedcar (code, plate, date) value ($1, $2, $3)`,
      [code, plate, date]
    )
  }

}