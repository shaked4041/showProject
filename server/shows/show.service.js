import ShowModel from "./show.model";

export const getAllShows = () => {
  return ShowModel.find()
}

export const getFullShowById = async (id) => {
  const show = await ShowModel.findById(id)
  .populate('artist')
  .lean(); 
  return show;
}

export const getShowById = (id) => {
  return ShowModel.findById(id)
}

export const getShowsByCategory = async (category) => {
  return await ShowModel.find({ category: category })
}

export const getShowsByArtist = async (artist) => {
  return await ShowModel.find({ artist: artist })
}


export const createNewShowService = (show) => ShowModel.create(show)