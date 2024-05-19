import { ShowModel } from "./show.model";

export const getAllShows = () =>  {
  return  ShowModel.find()
}

export const getShowById = (id) =>{
    ShowModel.findById(id)
}