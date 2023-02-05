const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Request-Headers", "*");
myHeaders.append("api-key", process.env.REACT_APP_MONGODB_KEY);
myHeaders.append("Accept", "application/json");

const raw = JSON.stringify({
  dataSource: process.env.REACT_APP_MONGODB_SOURCE,
  database: process.env.REACT_APP_MONGODB_DATABASE,
  collection: process.env.REACT_APP_MONGODB_COLLECTION,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

export async function find() {
  console.log(process.env);
  fetch(process.env.REACT_APP_MONGODB_URL, requestOptions)
    .then((response) => {
      console.log("aa", response);
      return response;
    })
    .then((response) => console.log("response", response))
    .catch((err) => console.log(err));
}
