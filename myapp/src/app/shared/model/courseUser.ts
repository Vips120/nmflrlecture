export interface IcourseUser {
    username:string;
    UserLogin: Ilogin;
    // password:string;
    // email:string;
}

export interface Ilogin {
    password:string;
    email:string;
}