import Option from "../1models/Option.js";
import GenericRepository from "./GenericRepository.js";

class OptionService extends GenericRepository {
  constructor(dao) {
    super(dao, Option.collection);
  }
}

export default OptionService;
