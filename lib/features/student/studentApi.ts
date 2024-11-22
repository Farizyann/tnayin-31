import { IStudents } from "@/type/type";
import axios from "axios";

export const getStudentsApi = async () => {
  const { data } = await axios.get("http://localhost:3000/api/students");
  return data;
};

export const getStudentsByIdApi = async (id: number, groupId: number) => {
  const { data } = await axios.get(
    "http://localhost:3000/api/students/" + groupId + "/" + id
  );
  return data;
};

export const createStudentApi = async (obj: IStudents, groupId: number) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/add/student/"+groupId,
    obj
  );
  return data;
};

export const updateStudentApi = async ({
  id,
  groupId,
  obj,
}: {
  id: number;
  groupId: number;
  obj: IStudents;
}) => {
  const { data } = await axios.patch(
    "http://localhost:3000/api/students/" + groupId + "/" + id + "/update",
    obj
  );
  return data;
};

export const deleteStudentByIdApi = async (id: number, groupId: number) => {
  const { data } = await axios.delete(
    "http://localhost:3000/api/students/" + groupId + "/" + id + "/delete"
  );
  return data;
};
