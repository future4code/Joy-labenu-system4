import { app } from "./app";
import { createClass } from "./endpoints/createClass";
import { getClass } from "./endpoints/getClass";

app.post("/classes", createClass);
app.get("/classes", getClass);
