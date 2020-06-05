export class Repository {
    private _id: string;
    private _name: string;
    private _topics: string[];
    private _description: string;
    private _url: string;
    private _contributors: string[];
    private _languages: string[];
    private _license: string;
    private _readme: string;

	/**
     *Creates an instance of Repository.
     * @param {string} id
     * @param {string} name
     * @param {string[]} topics
     * @param {string} description
     * @param {string} url
     * @param {string[]} contributors
     * @param {string[]} languages
     * @param {string} license
     * @param {string} readme
     * @memberof Repository
     */
    constructor(id?: string, name?: string, topics?: string[], description?: string, url?: string, contributors?: string[], languages?: string[], license?: string, readme?: string) {
        this._id = id;
        this._name = name;
        this._topics = topics;
        this._description = description;
        this._url = url;
        this._contributors = contributors;
        this._languages = languages;
        this._license = license;
        this._readme = readme;
    }

    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter topics
     * @return {string[]}
     */
    public get topics(): string[] {
        return this._topics;
    }

    /**
     * Getter description
     * @return {string}
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Getter url
     * @return {string}
     */
    public get url(): string {
        return this._url;
    }

    /**
     * Getter contributors
     * @return {string[]}
     */
    public get contributors(): string[] {
        return this._contributors;
    }

    /**
     * Getter languages
     * @return {string[]}
     */
    public get languages(): string[] {
        return this._languages;
    }

    /**
     * Getter license
     * @return {string}
     */
    public get license(): string {
        return this._license;
    }

    /**
     * Getter readme
     * @return {string}
     */
    public get readme(): string {
        return this._readme;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter topics
     * @param {string[]} value
     */
    public set topics(value: string[]) {
        this._topics = value;
    }

    /**
     * Setter description
     * @param {string} value
     */
    public set description(value: string) {
        this._description = value;
    }

    /**
     * Setter url
     * @param {string} value
     */
    public set url(value: string) {
        this._url = value;
    }

    /**
     * Setter contributors
     * @param {string[]} value
     */
    public set contributors(value: string[]) {
        this._contributors = value;
    }

    /**
     * Setter languages
     * @param {string[]} value
     */
    public set languages(value: string[]) {
        this._languages = value;
    }

    /**
     * Setter license
     * @param {string} value
     */
    public set license(value: string) {
        this._license = value;
    }

    /**
     * Setter readme
     * @param {string} value
     */
    public set readme(value: string) {
        this._readme = value;
    }
}
