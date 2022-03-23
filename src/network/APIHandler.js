import * as APIDetails from './APIDetails';

export default class APIHandler {
    constructor() {
      if (!APIHandler._instance) {
        APIHandler._instance = this;
      }
      return APIHandler._instance;
    }
    static getInstance() {
      return this._instance;
    }

    static postData = (url,methodName,bodyData, responseHandler) => {

       
        var host = APIDetails.ServiceUrl.HOST_URL;
        const serviceUrl = `${host}${url}`

        fetch(serviceUrl,{
            method:methodName,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(bodyData)
        })

            .then((response) => response.json())
            .then((json) => {
               // alert(json)
                //return json.movies;
                responseHandler(json, "");
            })
            .catch(error => {
                alert("error = "+error)
                responseHandler(null, "OFFLINE_MESSAGE");
            });
    };

  }