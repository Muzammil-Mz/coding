import { json } from "express";
import fs from "fs/promises";
import readline from "readline-sync";

async function registeruser() {
  let db = await fs.readFile("db.json", "utf-8");
  let finaldb = JSON.parse(db);

  let iusername = readline.question("Enter username: ");
  let ipassword = readline.question("enter password: ");

  let check = finaldb.users.find((x) => {
    x.username === iusername;
  });
  if (check) {
    console.log("user already exists");
  } else {
    console.log("successfully registered");
  }

  let object = {
    username: iusername,
    password: ipassword,
    todos: [],
  };
  finaldb.users.push(object);
  let final = JSON.stringify(finaldb);
  await fs.writeFile("db.json", final);
}

async function login() {
  let db = await fs.readFile("db.json", "utf-8");
  let finaldb = JSON.parse(db);
  let iusername = readline.question("enter username: ");
  let ipassword = readline.question("enter password: ");
  let check = finaldb.users.find(
    (x) => x.username === iusername && x.password === ipassword
  );
  if (check) {
    console.log("login successful");
    return check;
  } else {
    console.log("login failed");
    return null;
  }
}

async function addtask(loggededinuser) {
  if (!loggededinuser) {
    console.log("login first");
    return;
  }
  let db = await fs.readFile("db.json", "utf-8");
  let finaldb = JSON.parse(db);
  let title = readline.question("Enter Task Title: ");
  let description = readline.question("Enter Description: ");
  let check = finaldb.users.find((x) => x.username === loggededinuser.username);
  let newtask = {
    id: Date.now(),
    Title: title,
    description: description,
  };
  check.todos.push(newtask);
  let final = JSON.stringify(finaldb);
  await fs.writeFile("db.json", final);
}

async function edittask(loggededinuser) {
  if (!loggededinuser) {
    console.log("login first");
    return;
  }
  let db = await fs.readFile("db.json", "utf-8");
  let finaldb = JSON.parse(db);
  let check = finaldb.users.find((x) => {return x.username === loggededinuser.username});
  if (check.todos.length === 0) {
    console.log("no data found");
  }
  console.log("your to dos ");
  check.todos.find((x) => console.log(`${x.id}, ${x.Title}`));

  let userinput = readline.questionInt("enter id: ");
  let task = check.todos.find((x) => {
    return x.id === userinput;
  });

  if (task) {
    let newTitle = readline.question("Enter new Title");
    let newdes = readline.question("enter new descript");
    task.Title = newTitle || task.Title;
    task.description = newdes || task.description;

    let final = JSON.stringify(finaldb);
    await fs.writeFile("db.json", final);
  } else {
    console.log("no task found");
  }
}

export { registeruser, login, addtask, edittask };
