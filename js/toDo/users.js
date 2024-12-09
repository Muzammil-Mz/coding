import { readFile } from "fs"
import readline from "readline-sync"
import fs from "fs/promises"


async function registeruser() {
    let db=fs.readFile("db.json","utf-8")
    let finaldb=JSON.parse(db)
    let iusername=readline.question("enter your name :")
    let ipassword=readline.question("enter password: ",{hideEchoBack})
    let check=finaldb.users.find((x)=>x.username===iusername)
    if (check){
        console.log("user already exists");
        
    }else{
        console.log("Sucessfully registered");
        
    }
    let object={username:iusername,password:ipassword,todo:[]}
    finaldb.users.push(object)
    let final=JSON.stringify(finaldb)
    await fs.writeFile("db.json",final)

}


async function login(){
    let db=fs.readFile("db.json","utf-8")
    let finaldb=JSON.parse(db)
    let iusername=readline("enter username")
    let ipassword=readFile("enter password")
    let check=finaldb.users.find((x)=>(iusername===username && ipassword ===ipassword))
    if (check){
        console.log("Login Success");
        
    } else {
        console.log("login failed");
        
    }

}

export {registeruser,login}