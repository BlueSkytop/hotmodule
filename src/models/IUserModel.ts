export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IUserDetail {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    bloodGroup: string;
    height: string;
    weight: string;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
    domain: string;
    ip: string;
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: {
            lat: string;
            long: string;
        };
    };
}