import Day from "../1models/Day.js";
import GenericRepository from "./GenericRepository.js";

class DayService extends GenericRepository {
  constructor(dao) {
    super(dao, Day.collection);
  }
}

export default DayService;
