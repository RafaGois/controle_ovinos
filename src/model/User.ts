export default class User {
    private _id: number;
    private _name: string;
    private _user: string;
    private _level: number;
    private _token: string;

    constructor(id: number, name: string, user: string, level: number, token: string) {
        this._id = id;
        this._name = name;
        this._user = user;
        this._level = level;
        this._token = token;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get user(): string {
        return this._user;
    }

    set user(user: string) {
        this._user = user;
    }

    get level(): number {
        return this._level;
    }

    set level(level: number) {
        this._level = level;
    }

    get token(): string {
        return this._token;
    }

    set token(token: string) {
        this._token = token;
    }
}
