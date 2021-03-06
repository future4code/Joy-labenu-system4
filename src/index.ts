import { app } from "./app";
import { createClass } from "./endpoints/createClass";
import { createStudents } from "./endpoints/createStudents";
import { createTeachers } from "./endpoints/createTeachers";
import { getClass } from "./endpoints/getClass";
import { getStudents } from "./endpoints/getStudents";
import { getTeachers } from "./endpoints/getTeachers";
import { setClassMate } from "./endpoints/setClassMate";
import { setClassStudent } from "./endpoints/setClassStudents";
import { setModule } from "./endpoints/setModule";

app.post("/classes", createClass);
app.post("/students", createStudents);
app.post("/teachers", createTeachers)

app.get("/classes", getClass);
app.get("/students", getStudents);
app.get("/teachers", getTeachers);

app.put("/change-module/:id", setModule);
app.put("/change-class-student/:id", setClassStudent);
app.put("/change-class-teacher/:id", setClassMate);