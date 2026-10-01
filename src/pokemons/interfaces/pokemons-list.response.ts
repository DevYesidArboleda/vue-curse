export interface Pokedex {
    data:       Data;
    status:     number;
    statusText: string;
    headers:    PokedexHeaders;
    config:     Config;
    request:    Request;
}

export interface Config {
    transitional:      Transitional;
    adapter:           string[];
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
    env:               Request;
    headers:           ConfigHeaders;
    baseURL:           string;
    method:            string;
    url:               string;
    allowAbsoluteUrls: boolean;
}

export interface Request {
}

export interface ConfigHeaders {
    Accept: string;
}

export interface Transitional {
    silentJSONParsing:               boolean;
    forcedJSONParsing:               boolean;
    clarifyTimeoutError:             boolean;
    legacyInterceptorReqResOrdering: boolean;
    advertiseZstdAcceptEncoding:     boolean;
    validateStatusUndefinedResolves: boolean;
}

export interface Data {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}

export interface PokedexHeaders {
    "cache-control":         string;
    "content-length":        string;
    "content-type":          string;
    "x-pokeapi-deploy-date": string;
    "x-pokeapi-hash":        string;
}
