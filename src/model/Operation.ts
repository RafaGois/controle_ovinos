export default class Operation {
    private _success: boolean;
    private _message: string;

    constructor(success: boolean, message: string) {
        this._success = success;
        this._message = message;
    }

    get success() {
        return this._success;
    }

    set success(success: boolean) {
        this._success = success;
    }

    get message() {
        return this._message;
    }

    set message(message: string) {
        this._message = message;
    }
} 