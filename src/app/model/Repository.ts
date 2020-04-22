import { Topic } from './Topic';

export class Repository {
    private _name: string;
    private _topics: string[];
    private _owner: string;
    private _contributors: string[];
    private _readme: any;

	/**
     *Creates an instance of Repository.
     * @param {string} name
     * @param {string[]} topics
     * @param {string} owner
     * @param {string[]} contributors
     * @param {*} readme
     * @memberof Repository
     */
    constructor(name?: string, topics?: string[], owner?: string, contributors?: string[], readme?: any) {
		this._name = name;
		this._topics = topics;
		this._owner = owner;
		this._contributors = contributors;
		this._readme = readme;
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
     * Getter owner
     * @return {string}
     */
	public get owner(): string {
		return this._owner;
	}

    /**
     * Getter contributors
     * @return {string[]}
     */
	public get contributors(): string[] {
		return this._contributors;
	}

    /**
     * Getter readme
     * @return {any}
     */
	public get readme(): any {
		return this._readme;
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
     * Setter owner
     * @param {string} value
     */
	public set owner(value: string) {
		this._owner = value;
	}

    /**
     * Setter contributors
     * @param {string[]} value
     */
	public set contributors(value: string[]) {
		this._contributors = value;
	}

    /**
     * Setter readme
     * @param {any} value
     */
	public set readme(value: any) {
		this._readme = value;
	}
}
