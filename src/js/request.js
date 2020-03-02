const request = (url, method, body, callBack) => {
    if (method === undefined || body === undefined) {
        fetch(url)
        .then(respond => respond.json())
        .then(json => callBack(json))
    } else {
        fetch(url, {
            method: method,
            body: JSON.stringify(body)
        })
        .then(respond => respond.json())
        .then(json => callBack(json.data))
    }
}

export default request;