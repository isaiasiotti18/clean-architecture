import GetParkingLot from "../core/usecases/GetParkingLot/GetParkingLot";
import ParkingLotRepositorySQL from "../infra/repositories/ParkingLotRepositorySQL";

export default class ParkingLotController {
  static async getParkingLot(params, body) {
    const parkingLotRepositorySQL = new ParkingLotRepositorySQL()
    const getParkingLot = new GetParkingLot(parkingLotRepositorySQL)
    const parkingLot = await getParkingLot.execute(params.code)
    return parkingLot
  }
}