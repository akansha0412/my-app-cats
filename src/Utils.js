const HOST = 'https://api.spaceXdata.com'

export const getSpacexData = (data,cb) => {
    const url = `${HOST}/v3/launches`;
    Request(url, cb,data);
  };

  const Request = (url, cb, data = null, type = "GET") => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", "19c4ff12-e027-4320-b844-2cda768714e8");
    myHeaders.append("content-type", "application/json");
    const requestOptions = {
      method: type,
      headers: myHeaders,
      body: data,
    };
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => cb(JSON.parse(result), null))
      .catch((error) => cb(null, error));
  };