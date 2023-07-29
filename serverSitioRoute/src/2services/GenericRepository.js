class GenericRepository {
  constructor(dao, model) {
    this.dao = dao;
    this.model = model;
  }

  save = async (data) => {
    return this.dao.save(data, this.model);
  };

  getAll = async (params, sort) => {
    return this.dao.getAll(params, sort, this.model);
  };

  getOne = async (params) => {
    return this.dao.getOne(params, this.model);
  };

  getFiltered = async (params, sort) => {
    return this.dao.getAll(params, sort, this.model);
  };

  updateOne = async (find, update) => {
    return this.dao.updateOne(find, update, this.model);
  };

  deleteOne = async (params) => {
    return this.dao.deleteOne(params, this.model);
  };
}

export default GenericRepository;
