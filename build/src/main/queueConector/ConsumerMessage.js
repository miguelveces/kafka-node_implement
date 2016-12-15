"use strict";
var queueConector = require('../queueImplement/queueConector');
var ConsumerMessage = (function () {
    function ConsumerMessage() {
    }
    ConsumerMessage.prototype.consumer = function () {
        var sendMessage = new queueConector();
        sendMessage.consumerQueue();
    };
    return ConsumerMessage;
}());
var test = new ConsumerMessage();
test.consumer();
//# sourceMappingURL=ConsumerMessage.js.map