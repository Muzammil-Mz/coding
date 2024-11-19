function delaymessage(name,time){
    return setTimeout(() => {
        console.log(`hey ${name,time}  `);
        
    }, time * 1000);
}
delaymessage ("suhail",4)