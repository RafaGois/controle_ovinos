export default class Peso {

    private _id: number;
    private _ovino_tag: number;
    private _weight: number;

    constructor (id: number, ovino_tag: number, weight: number) {
        this._id = id;
        this._ovino_tag = ovino_tag;
        this._weight = weight;
    }

    get id () {
        return this._id;
    }

    set id (id: number) {
        this._id = id;
    }

    get ovino_tag () {
        return this._ovino_tag;
    }

    set ovino_tag (ovino_tag: number) {
        this._ovino_tag = ovino_tag;
    }

    get weight () {
        return this._weight;
    }

    set weight (weight: number) {
        this._weight = weight;
    }
}