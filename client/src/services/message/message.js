import Axios from "../Axios"


export const createMessage = (data)=>{
    const URL = "/message/create"
    return Axios.post(URL,data)
}

export const getDetailMessage = (id) => {
  const URL = `/message/detail/${id}`;
  return Axios.get(URL);
};
