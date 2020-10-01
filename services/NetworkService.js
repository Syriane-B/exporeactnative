export async function requestApi(endPoint, method = "GET", data = false) {
  let body;
  const headers = {
    "x-apikey": "5f744ecc2b02c84b29bf858f",
    'accept': "application/json",
    "content-type": "application/json",
    "cache-control": "no-cache",
  };

  if (data) {
    if (method === "GET") {
      const query = qs.stringify(body);
      endPoint = `${endPoint}?${query}`;
    } else {
      body = JSON.stringify(data);
    }
  }
  return fetch("https://myaquafarm-6cd4.restdb.io/rest" + endPoint, {
    method,
    body: body || undefined,
    headers,
  })
    .then((response) => {
      return response.json();
      // if (response.status === 200) {
      //   return response.json();
      // } else if (response.status === 204) {
      //   const data = {};
      //   return {
      //     success: true,
      //     message: "",
      //     data,
      //   };
      // } else {
      //   throw response.statusText;
      // }
    })
    .then((data) => {
      return {
        success: true,
        message: "",
        data,
      };
    })
    .catch((error) => {
      const data = {};
      return {
        success: false,
        message: error,
        data,
      };
    });
}
