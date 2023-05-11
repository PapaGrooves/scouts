const Users = [
    {
        id: 1,
        fname: "John",
        lname: "Doe",
        email: "johndoe@mail.com",
        disclosure: "Approved",
        dob: new Date("5/15/1998"),
        availability: "Every THU, FRI and SAT",
        is_admin: 0,
    },
    {
        id: 2,
        fname: "Jane",
        lname: "Dane",
        email: "janedane@mail.com",
        disclosure: "Approved",
        dob: new Date("19/7/1993"),
        availability: "Mondays",
        is_admin: 1,
    },
    {
        id: 3,
        fname: "Bane",
        lname: "Bowser",
        email: "b@mail.com",
        disclosure: "Pending",
        dob: new Date("12/5/1948"),
        availability: "Weekends",
        is_admin: 0,
    }
];

export default Users;