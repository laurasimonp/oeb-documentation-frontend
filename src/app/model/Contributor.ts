export class Contributor {
    private _login: string;
    private _url: string;

	/**
     *Creates an instance of Contributor.
     * @param {string} login
     * @param {string} url
     * @memberof Contributor
     */
    constructor(login: string, url: string) {
        this._login = login;
        this._url = url;
    }

    /**
     * Getter login
     * @return {string}
     */
    public get login(): string {
        return this._login;
    }

    /**
     * Getter url
     * @return {string}
     */
    public get url(): string {
        return this._url;
    }

    /**
     * Setter login
     * @param {string} value
     */
    public set login(value: string) {
        this._login = value;
    }

    /**
     * Setter url
     * @param {string} value
     */
    public set url(value: string) {
        this._url = value;
    }
}