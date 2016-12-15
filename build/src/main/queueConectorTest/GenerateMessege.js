"use strict";
var queueConector = require('../queueImplement/queueConector');
var readline = require('readline');
var log = console.log;
var GenerateMessage = (function () {
    function GenerateMessage() {
    }
    GenerateMessage.prototype.producer = function () {
        var sendMessage = new queueConector();
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        var validate = 0;
        var sentMessageToQueue = function (initialValue) {
            rl.question(initialValue + ': ', function (answer) {
                if (validate == 0) {
                    sendMessage.producerMessage(answer);
                    log("message sent");
                    validate++;
                    sentMessageToQueue("do you want sent another message? Yes / No");
                }
                else {
                    if (answer.trim().toUpperCase() === 'YES') {
                        log("Write a message:  ");
                        rl.on('line', function (input) {
                            console.log("Received: " + input);
                            sendMessage.producerMessage(input);
                            console.log("message sent!");
                            sentMessageToQueue("do you want sent another message? Yes / No");
                        });
                    }
                    else if (answer.trim().toUpperCase() === 'NO') {
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
    };
    return GenerateMessage;
}());
var test = new GenerateMessage();
test.producer();
//# sourceMappingURL=GenerateMessege.js.map