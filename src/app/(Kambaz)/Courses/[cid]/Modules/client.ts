import axios from "axios";

interface Module {
  _id: string;
  name: string;
  description?: string;
  course: string;
  editing?: boolean;
}

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
export const deleteModule = async (moduleId: string) => {
 const response = await axios.delete(`${MODULES_API}/${moduleId}`);
 return response.data;
};
export const updateModule = async (module: Module) => {
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data;
};
