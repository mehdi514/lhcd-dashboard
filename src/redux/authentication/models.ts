export interface Address {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zipcode: string;
}

export interface User {
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    street: string,
    city: string,
    state: string,
    zip: string,
    avatar: string,
    county: string,
    workPlace: Workplace;
}

export interface Workplace {
    businessName: string;
    address: Address;
}
