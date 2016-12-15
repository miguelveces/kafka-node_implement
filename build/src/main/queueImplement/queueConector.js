"use strict";
var kafka = require("kafka-node");
var connections = require('../connection/connectionQueue');
var log = console.log;
var queueConector = (function () {
    function queueConector() {
    }
    queueConector.prototype.consumerQueue = function () {
        var Consumer = kafka.Consumer;
        var topics = [{ topic: "nodeTest2", partitions: 1, time: -1, maxNum: 1 }];
        var options = { autoCommit: true, autoCommitMsgCount: 100, autoCommitIntervalMs: 5000,
            fetchMaxWaitMs: 1000, fetchMinBytes: 1, fetchMaxBytes: 1024 * 1024, fromOffset: false, fromBeginning: false };
        var client = new connections();
        var getClient = client.getClient();
        var consumer = new Consumer(getClient, topics, options);
        consumer.on('message', function (message) {
            log(message);
        });
        consumer.on('error', function (err) {
            log('error', err);
        });
    };
    queueConector.prototype.producerMessage = function (message) {
        var kafkaProducer = kafka.Producer;
        var client = new connections();
        var getClient = client.getClient();
        var producer = new kafkaProducer(getClient);
        var megReturn = "veces";
        var payloads = [{ topic: 'nodeTest2', partitions: 1, messages: message }];
        producer.on('ready', function () {
            producer.send(payloads, function (err, data) {
                if (err != null) {
                    log("Conection error " + err);
                }
            });
        });
        producer.on('error', function (err) {
            log("Error " + err);
        });
    };
    return queueConector;
}());
module.exports = queueConector;
//# sourceMappingURL=queueConector.js.map