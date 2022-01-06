import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
  try {
    const db = await connect(MONGODB_URI);

    console.log("DB connection to:", db.connection.name);
  } catch (error) {
    console.error(">>Error: ", error.message);
  }
})();
