export default class Ovino {
    private _id: number;
    private _tag: number;
    private _dtBirth: string;
    private _mother: number;
    private _weight: number;
    private _gender: string;
    private _active: number;

    constructor (id: number, tag: number, dtBirth: string, mother: number, weight: number, gender: string, active: number) {
        this._id = id;
        this._tag = tag;
        this._dtBirth = dtBirth;
        this._mother = mother;
        this._weight = weight;
        this._gender = gender;
        this._active = active;
    }

    get id () {
        return this._id
    }

    get tag () {
        return this._tag;
    }

    set tag (tag: number) {
        this._tag = tag;
    }

    get dtbirth () {
        return this._dtBirth;
    }

    set dtBirth (dtBirth: string) {
        this._dtBirth = dtBirth;
    }

    get mother () {
        return this._mother;
    }

    set mother (mother: number) {
        this._mother = mother;
    }

    get weight () {
        return this._weight;
    }

    set weight (weight: number) {
        this._weight = weight;
    }

    get gender () {
        return this._gender;
    }

    set gender (gender: string) {
        this._gender = gender;
    }

    get active () {
        return this._active;
    }

    set active (active: number) {
        this._active= active;
    }
}