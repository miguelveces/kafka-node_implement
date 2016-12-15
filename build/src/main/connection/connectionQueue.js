"use strict";
var kafka = require("kafka-node");
var connections = (function () {
    function connections() {
        this.server = "ubuntukafka";
        this.port = 2181;
        this.portHttp = 9092;
        this.Client = kafka.Client;
    }
    connections.prototype.getClient = function () {
        return (new this.Client(this.server + ':' + this.port));
    };
    connections.prototype.getClientHttp = function () {
        return "conexion ok";
    };
    return connections;
}());
module.exports = connections;
//# sourceMappingURL=connectionQueue.js.map