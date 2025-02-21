import readline from "readline-sync"
import { registeruser, login, addtask, edittask } from "./users.js"
async function main() {
    let loggededinuser = true
    while (true) {
        const options = [
            "exit",
            "registeruser",
            "login",
            "add task",
            "edit task",
            "delete task"
        ]

        options.map((x, value) => {
            console.log(value, x);
        })

        let userinput = readline.questionInt("Choose a option: ")
        switch (userinput) {
            case 0:
                console.log("exit");
                process.exit(0)
            case 1:
                await registeruser()
                break
            case 2:
                loggededinuser = await login()
                break
            case 3:
                await addtask(loggededinuser)
                break
            case 4:
                await edittask(loggededinuser)
                break
            case 5:
                await deletetask(loggededinuser)
            default:
                console.log("invalid");
                break
        }
        readline.question("press enter to continue")

    }
}
main()