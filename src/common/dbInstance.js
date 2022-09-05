const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Request-Headers", "*");
myHeaders.append(
  "api-key",
  "LkSYYI4Lf65DJKCiJ5VR7vbHalQANiv934rRKGppbPzsg3et43rOuYGe4UW9YHnK"
);
myHeaders.append("Accept", "application/json");

const raw = JSON.stringify({
  dataSource: "Cluster0",
  database: "tacticsboard",
  collection: "tactics",
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

export async function find() {
  console.log(process.env);
  fetch(
    `https://data.mongodb-api.com/app/data-kauew/endpoint/data/v1/action/find`,
    requestOptions
  )
    .then((response) => {
      console.log("aa", response);
      return response;
    })
    .then((response) => console.log("response", response))
    .catch((err) => console.log(err));
}
