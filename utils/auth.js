
import Cookies from 'js-cookie';

export function postDataAuth(url = ``, token="", data = {}, method='POST') {
    return postData_(url,data,token,method,'json');
}

export function postDataAuthFile(url = ``, token="", data = {}, method='POST'){
    return postData_(url,data,token,method,'file');
}

export function postData(url = ``, data = {},method='POST') {
  // Default options are marked with *
    return postData_(url,data,'',method,'json');
}


function postData_(url='',data={},token='',method='POST',content_type='json'){

    var csrftoken = Cookies.get('csrftoken');

    if (token) {
        var headers = {"Authorization": 'JWT '+ token, 'X-CSRFToken': csrftoken,}
    } else {
        var headers = {'X-CSRFToken': csrftoken,}
    }

	    if (content_type =='json'){
	    	headers["Content-Type"] = "application/json"
	    	data = JSON.stringify(data) 
	    }


	    return fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: headers,
        // redirect: "follow", // manual, *follow, error
        // referrer: "no-referrer", // no-referrer, *client
        body: data, // body data type must match "Content-Type" header
    })
     .then(async (response) => {
        if (response.ok) {

            if (method==='DELETE'){
                var res = {'success':true}
                return res
            }
            else{
            var res = await response.json();
            return res
            }
        }
        else{
            var error = await response.json();
            throw error;
        }
      })
}