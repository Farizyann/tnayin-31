import { IGroup, IStudents } from "./../../type/type";

export const data: { group: IGroup; groups: IGroup[]; student: IStudents } = {
  group: {} as IGroup, 
  groups: [
    { 
      id: 101, 
      name: "Group A", 
      students: [
        { id: 1, name: "John", surname: "Doe" },
        { id: 2, name: "Jane", surname: "Smith" }
      ] 
    },
    { 
      id: 102, 
      name: "Group B", 
      students: [
        { id: 3, name: "Alice", surname: "Johnson" },
        { id: 4, name: "Bob", surname: "Brown" }
      ] 
    }
  ],
  student: {} as IStudents 
};
