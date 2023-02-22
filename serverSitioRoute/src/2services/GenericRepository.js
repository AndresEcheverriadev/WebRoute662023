class GenericRepository {
  constructor(dao, model) {
    this.dao = dao;
    this.model = model;
  }

  save = async (data) => {
    return this.dao.save(data, this.model);
  };

  getAll = async (params) => {
    return this.dao.getAll(params, this.model);
  };

  getOne = async (params) => {
    return this.dao.getOne(params, this.model);
  };

  getFiltered = async (params) => {
    return this.dao.getAll(params, this.model);
  };

  updateOne = async (params) => {
    return this.dao.updateOne(params, this.model);
  };

  deleteOne = async (params) => {
    return this.dao.deleteOne(params, this.model);
  };
}

export default GenericRepository;
