import Peso from "./Peso";

export default class Ovino {
    private _id: number;
    private _tag: number;
    private _dtBirth: string;
    private _mother: number;
    private _Pesos: Peso[];
    private _gender: string;
    private _active: boolean;

    constructor (id: number, tag: number, dtBirth: string, mother: number, Pesos: Peso[], gender: string, active: boolean) {
        this._id = id;
        this._tag = tag;
        this._dtBirth = dtBirth;
        this._mother = mother;
        this._Pesos = Pesos;
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

    get Pesos () {
        return this._Pesos;
    }

    set Pesos (Pesos: Peso[]) {
        this._Pesos = Pesos;
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

    set active (active: boolean) {
        this._active= active;
    }
}