import EnterParkingLot from "../src/core/usecases/EnterParkingLot";
import GetParkingLot from "../src/core/usecases/GetParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repositories/ParkingLotRepositoryMemory";

test("Should enter parking lot", async function () {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
  const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
  
  const parkingLotBeforeEnter = await getParkingLot.execute("shopping")
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)

  await enterParkingLot.execute("shopping", "MMM-0001", new Date("2022-10-17T12:00:00"))
  
  const parkingLotAfterEnter = await getParkingLot.execute("shopping")
  expect(parkingLotAfterEnter.occupiedSpaces).toBe(1)
})