export interface IGroup {
    id: number
    name: string
    students: IStudents[]
}
export interface IStudents {
    id: number
    name: string
    surname: string
}