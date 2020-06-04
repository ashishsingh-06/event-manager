export class User {
    constructor(
        public firstName:string,
        public lastName:string,
        public mobile:number,
        public email:string,
        public image:File,
        public registrationType:string,
        public noOfTickets:number,
    ){}
}
