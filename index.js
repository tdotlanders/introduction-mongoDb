const { MongoClient } = require("mongodb");
DeviceMotionEvent.config();

const dbUrl = process.env.DB_URL;

const client = new MongoClient(dbUrl);

async function main() {
  await client.connect();

  const db = client.db("Database1");
  await db.collection("tests").insertMany([{ test: 1234 }]);

  console.log(await db.collection("tests").find({}).toArray());
}

main()
  .then(() => console.log("done"))
  .catch(() => console.error(err));
