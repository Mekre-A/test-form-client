import axios from "axios";

const formUpload = async (data: Object): Promise<Boolean> => {
  console.log(data);
  try {
    return true;
  } catch (error) {
    return false;
  }
};

export default formUpload;
