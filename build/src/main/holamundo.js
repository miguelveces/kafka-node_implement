"use strict";
var holamundo = (function () {
    function holamundo() {
    }
    holamundo.prototype.consumerQueue = function () {
    };
    holamundo.prototype.producerMessage = function (message) {
        return message;
    };
    return holamundo;
}());
module.exports = holamundo;
//# sourceMappingURL=holamundo.js.map