const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Request-Headers", "*");
myHeaders.append("api-key", process.env.MONGODB_KEY);

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
  console.log(process);
  const result = await (
    await fetch(`${process.env.MONGODB_URL}find`, requestOptions)
  ).json();
  console.log(result);
}
