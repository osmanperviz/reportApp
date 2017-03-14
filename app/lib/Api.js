class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Mashape-Key': 'dfghjkopoiuhgfdfvgbhjkliuytgf'
    }
  }

  static get(route) {
    return Api.xhr(route, null, 'GET')
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'localhost:4000'
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
    options.headers = Api.headers
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if(resp.ok) {
        return json
      }
      return json.then(err => {throw err})
    })
  }
}

export default Api
