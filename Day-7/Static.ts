// Static

class Student {
    readonly studentID: number;
    name: string;
    email?: string;
    static schoolName: string = "GreenWood";

    constructor(sid: number, sname: string, email?: string) {
        this.studentID = sid;
        this.name = sname;
        this.email = email;
    }

    displayInfo(): void {
        console.log("Student ID:", this.studentID);
        console.log("Student Name:", this.name);
        if (this.email) {
            console.log("Email:", this.email);
        } else {
            console.log("Email is not provided");
        }
        console.log("schoolName:", Student.schoolName);
    }
}

let s1 = new Student(101, "abc");
let s2 = new Student(102, "xyz", "abc@kp.com");

s1.displayInfo();
s2.displayInfo();




