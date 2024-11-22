import { IGroup } from "@/type/type";
import axios from "axios";

export const getGroupsApi = async () => {
  const { data } = await axios.get(
    "http://localhost:3000/api/groups"
  );
  return data;
};

export const getGroupByIdApi = async (id: number) => {
  const { data } = await axios.get(
    "http://localhost:3000/api/groups/" + id
  );
  return data;
};

export const createGroupApi = async (obj: IGroup) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/add/group",
    obj
  );
  return data;
};

export const updateGroupApi = async ({
  id,
  obj,
}: {
  id: number;
  obj: IGroup;
}) => {
  const { data } = await axios.patch(
    "http://localhost:3000/api/groups/" + id+"/update",
    obj
  );
  return data;
};

export const deleteGroupByIdApi = async (id: number) => {
  const { data } = await axios.delete(
    "http://localhost:3000/api/groups/" + id+"/delete"
  );
  return data;
};