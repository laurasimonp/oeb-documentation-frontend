export class Topic {
    private _name: String;
    private _url: String;
    private _description: String;

	/**
     *Creates an instance of Topic.
     * @param {String} [name]
     * @param {String} [url]
     * @param {String} [description]
     * @memberof Topic
     */
    constructor(name?: String, url?: String, description?: String) {
        this._name = name;
        this._url = url;
        this._description = description;
    }

    /**
     * Getter name
     * @return {String}
     */
    public get name(): String {
        return this._name;
    }

    /**
     * Getter url
     * @return {String}
     */
    public get url(): String {
        return this._url;
    }

    /**
     * Getter description
     * @return {String}
     */
    public get description(): String {
        return this._description;
    }

    /**
     * Setter name
     * @param {String} value
     */
    public set name(value: String) {
        this._name = value;
    }

    /**
     * Setter url
     * @param {String} value
     */
    public set url(value: String) {
        this._url = value;
    }

    /**
     * Setter description
     * @param {String} value
     */
    public set description(value: String) {
        this._description = value;
    }


}