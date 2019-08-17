

export interface Ilogin {
    UserIdentity?:string;
    FirstName?:string;
    LastName?:string;
    MobileNo?:string;
    EmailId?:string;
    Error?:string;
    UserLogin:{
        UserName:string;
        Password:string;
    }
}