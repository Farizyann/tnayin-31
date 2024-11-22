export interface IGroup {
    id: number
    name: string
    students: IStudents[]
    message?:string
}
export interface IStudents {
    id: number
    name: string
    surname: string
    message?:string
}