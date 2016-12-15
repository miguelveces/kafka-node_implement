"use strict";
var queueConector = require('../queueImplement/queueConector');
var readline = require('readline');
var async = require('async');
var log = console.log;
var generateMessage2 = (function () {
    function generateMessage2() {
    }
    generateMessage2.prototype.producer = function () {
        var sendMessage = new queueConector();
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        var validate = 0;
        var sentMessageToQueue = function (initialValue, dd) {
            log("veces " + dd);
            rl.question(initialValue + ': ', function (answer) {
                if (validate == 0) {
                    sendMessage.producerMessage(answer, function (message) {
                        log(message);
                        validate++;
                        sentMessageToQueue("do you want sent another message? Yes / No inicio", 1);
                    });
                }
                else {
                    var dd_1 = 0;
                    if (answer.trim().toUpperCase() === 'YES') {
                        log("Write a message:  ");
                        rl.on('line', function (input) {
                            dd_1++;
                            log("Received: " + input + " : " + dd_1);
                            sendMessage.producerMessage(input + dd_1, function (message) {
                                log(message);
                                sentMessageToQueue("do you want sent another message? Yes / No 4", 2);
                            });
                        });
                    }
                    else if (answer.trim().toUpperCase() === 'NO') {
                        log("coming out!");
                        rl.close();
                        return process.exit(0);
                    }
                    else {
                        sentMessageToQueue("do you want sent another message? Yes / No", 3);
                    }
                }
            });
        };
        sentMessageToQueue("Write a message", 5);
    };
    return generateMessage2;
}());
var test = new generateMessage2();
test.producer();
//# sourceMappingURL=gerateMessage2.js.map