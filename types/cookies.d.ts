interface CookiesOptions {
	expires?: string | number | Date,
	path?: string,
	domain?: string,
	secure?: boolean
}

declare module 'js-cookie' {
	function get(key: string): (string | null);
	function set(key: string, value: any, options?: CookiesOptions): void;
	function remove(key: string, options?: CookiesOptions): void;
	function getJson(key?: string): string | null | object | number;
}

