/**
 * Created by MAVeces on 12/5/2016.
 */

import queueConector = require('../queueImplement/queueConector');
import connections = require('../connection/connectionQueue');
let readline = require('readline');
let log = console.log;
class GenerateMessage{

    public producer(){
        let sendMessage = new queueConector();
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
        var validate : number = 0;
            let sentMessageToQueue =(initialValue:string) => {
              rl.question(initialValue + ': ',  (answer: string) =>{
                  if (validate == 0){
                      sendMessage.producerMessage(answer);
                      log("message sent");

                      validate ++;
                      sentMessageToQueue("do you want sent another message? Yes / No");
                  }
                  else{
                      if (answer.trim().toUpperCase() === 'YES'){
                        log("Write a message:  ");
                          rl.on('line', (input:string) =>{
                            console.log(`Received: ${input}`);
                            sendMessage.producerMessage(input);
                            console.log("message sent!");
                            sentMessageToQueue("do you want sent another message? Yes / No");

                          });

                    }
                    else if(answer.trim().toUpperCase() === 'NO') {
                          log("coming out!");
                          rl.close();
                          return process.exit(0);
                    }
                    else
                      sentMessageToQueue("do you want sent another message? Yes / No");
                    }
              });
            };

            sentMessageToQueue("Write a message");
    }
}


let test = new  GenerateMessage();
test.producer();


