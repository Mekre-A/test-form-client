import axios from "axios";

const formUpload = async (data: Object): Promise<Boolean> => {
  console.log(data);
  try {
    await axios.post("http://localhost:4567/signup", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default formUpload;
