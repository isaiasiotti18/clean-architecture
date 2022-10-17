import EnterParkingLot from "../src/core/usecases/EnterParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repositories/ParkingLotRepositoryMemory";

test("Should enter parking lot", async function () {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
  const parkingLot = await enterParkingLot.execute("shopping", "MMM-0001", new Date("2022-10-17T12:00:00"))
  //expect(parkingLot.code).toBe("shopping")
})