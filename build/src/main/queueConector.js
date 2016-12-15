"use strict";
var kafka = require("kafka-node");
var connections = require('./connection/connectionQueue');
var queueConector = (function () {
    function queueConector() {
    }
    queueConector.prototype.consumerQueue = function () {
        var Consumer = kafka.Consumer;
        var Offset = kafka.Offset;
        var topics = [{ topic: "test1", partitions: 0 }, { topic: "test1", partitions: 0 }];
        var options = { autoCommit: false, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024 };
        var client = new connections();
        var getClient = client.getClient();
        var consumer = new Consumer(getClient, topics, options);
        var offset = new Offset(getClient);
        consumer.on('message', function (message) {
            console.log(message);
        });
        consumer.on('error', function (err) {
            console.log('error', err);
        });
    };
    queueConector.prototype.producerMessage = function (message) {
        var kafkaProducer = kafka.Producer;
        var client = new connections();
        var getClient = client.getClient();
        var producer = new kafkaProducer(getClient);
        var payloads = [{ topic: 'test1', partitions: 0, messages: message }];
        producer.on('ready', function () {
            producer.send(payloads, function (err, data) {
                if (err != null) {
                    console.log("Error de conexion " + err);
                    return "OK";
                }
                else {
                    console.log("OK " + data);
                    return "OK";
                }
            });
        });
        producer.on('error', function (err) {
            console.log("error " + err);
            return "Error";
        });
        return "ok";
    };
    return queueConector;
}());
module.exports = queueConector;
//# sourceMappingURL=queueConectorTest.js.map