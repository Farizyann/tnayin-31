import { IStudents } from "@/type/type";
import { createAppSlice } from "./../../createAppSlice";
import {
  createStudentApi,
  deleteStudentByIdApi,
  getStudentsApi,
  getStudentsByIdApi,
  updateStudentApi,
} from "./studentApi";

interface IState {
  students: IStudents[];
  student: IStudents;
}
const initialState: IState = {
  students: [],
  student: {} as IStudents,
};

export const studentslice = createAppSlice({
  name: "student",
  initialState,
  reducers: (create) => ({
    getstudentsData: create.asyncThunk(
      async () => {
        return await getStudentsApi();
      },
      {
        fulfilled: (state, action) => {
          state.students = action.payload;
        },
      }
    ),
    getstudentByIdData: create.asyncThunk(
      async ({ groupId, id }: { id: number; groupId: number }) => {
        return await getStudentsByIdApi(id, groupId);
      },
      {
        fulfilled: (state, action) => {
          state.student = action.payload;
        },
      }
    ),
    createstudentData: create.asyncThunk(
      async ({ obj, groupId }: { obj: IStudents; groupId: number }) => {
        return await createStudentApi(obj, groupId);
      }
    ),
    updatestudentData: create.asyncThunk(
      async ({
        id,
        obj,
        groupId,
      }: {
        id: number;
        groupId: number;
        obj: IStudents;
      }) => {
        return await updateStudentApi({ id, obj, groupId });
      },
      {
        fulfilled: (state, action) => {
          state.student = action.payload;
        },
      }
    ),
    deletestudentByIdData: create.asyncThunk(
      async ({ groupId, id }: { id: number; groupId: number }) => {
        return await deleteStudentByIdApi(id, groupId);
      }
    ),
  }),
  selectors: {
    selectstudents: (app) => app.students,
    selectstudent: (app) => app.student,
  },
});

export const {
  getstudentsData,
  getstudentByIdData,
  createstudentData,
  updatestudentData,
  deletestudentByIdData,
} = studentslice.actions;
export const { selectstudents, selectstudent } = studentslice.selectors;
