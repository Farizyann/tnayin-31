import { IGroup, IStudents } from "./../../type/type";

export const data: { group: IGroup; groups: IGroup[]; student: IStudents } = {
  group: {} as IGroup, 
  groups: [
    { 
      id: 1, 
      name: "Group A", 
      students: [
        { id: 1, name: "John", surname: "Doe" },
        { id: 2, name: "Jane", surname: "Smith" }
      ] 
    },
    { 
      id: 2, 
      name: "Group B", 
      students: [
        { id: 1, name: "Alice", surname: "Johnson" },
        { id: 2, name: "Bob", surname: "Brown" }
      ] 
    }
  ],
  student: {} as IStudents 
};
