function apiComposed(api: string, params: any, baseUrl: string) {
    if (params) {
        Object.keys(params).forEach( key => {
            api = api.replace(`:${key}`, params[key]);
        })
    }
    return baseUrl.concat(api);
}

export function buildUrl(api: string, baseUrl: string, params?: any) {
    return apiComposed(api, baseUrl, params);
}