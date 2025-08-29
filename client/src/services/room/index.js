import Axios from "../Axios";

export const createRoom = (newPerson) => {
  const URL = "/room/create";
  const data ={
    name:newPerson
  }
  return Axios.post(URL, data);
};

export const getAllRooms = ()=>{
  const URL = "/room/getAll"
  return Axios.get(URL)
}
export const detailRoom =(id)=>{
  const URL = `/room/details/${id}`
  return Axios.get(URL)
}
