import readline from "readline-sync"
import { registeruser,login } from "./users.js";


async function main() {
    while (true) {
        let loggedin = true

        let options = [
            "exit",
            "register user",
            "login",
            "add task",
            "delete task",
            "remove user"
        ]
        options.map((x, value) => console.log(value, x));
        let userinput = readline.questionInt("Choose option: ")
        switch (userinput) {
            case 0:
                console.log("exit");
                process.stop(0)

            case 1:
                registeruser()
                break
            case 2:
                loggedin = await loggedin()
                break
            case 3:
                await addtask(loggedin)
                break
            default:
                console.log("invalid");
                break

        }

readline.question("enter to continue")


    }

}

main()