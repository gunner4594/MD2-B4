
export class Employee {
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _birthDay: Date;
    private _address: string;
    private _jobPosition: string;

    constructor(id: number, firstName: string, lastName: string, birthDay: Date, address: string, jobPosition: string) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDay = birthDay;
        this._address = address;
        this._jobPosition = jobPosition;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get birthDay(): Date {
        return this._birthDay;
    }

    set birthDay(value: Date) {
        this._birthDay = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get jobPosition(): string {
        return this._jobPosition;
    }

    set jobPosition(value: string) {
        this._jobPosition = value;
    }
}