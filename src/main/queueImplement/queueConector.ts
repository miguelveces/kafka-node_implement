/**
 * Created by MAVeces on 12/2/2016.
 */
///<reference path='../../../node_modules/retyped-kafka-node-tsd-ambient/kafka-node.d.ts' />

import kafka = require("kafka-node");
import connections = require('../connection/connectionQueue');
let log = console.log;
class queueConector   implements  queueInterfaceBase{
    constructor(){

    }
    public consumerQueue(){
        let Consumer = kafka.Consumer;
        let topics:Array<{topic:string; partitions: number; time: any; maxNum:number }>=[{topic:"nodeTest2", partitions: 1, time: -1, maxNum: 1}];
        let options = {autoCommit: true, autoCommitMsgCount: 100, autoCommitIntervalMs: 5000,
                       fetchMaxWaitMs: 1000,  fetchMinBytes: 1, fetchMaxBytes: 1024 * 1024,  fromOffset: false, fromBeginning: false };
        let client = new connections();
        let getClient = client.getClient();
        let consumer = new Consumer(getClient, topics, options);
        consumer.on('message', function (message) {
            log(message);
        });
        consumer.on('error', function (err) {
            log('error', err);
        });

    }

    public producerMessage(message:string){
        let  kafkaProducer = kafka.Producer;
        let client = new connections();
        let getClient = client.getClient();
        let producer = new kafkaProducer(getClient);
        let megReturn="veces";
        let payloads:Array<{topic:string; partitions: number; messages:string}> = [ { topic: 'nodeTest2', partitions: 1, messages: message }];

       producer.on('ready', () => {
            producer.send(payloads, function(err, data){
                if(err != null){
                    log("Conection error " + err);

                }

            });
        });


        producer.on('error', (err:any) =>{
            log("Error " + err);

        });

    }

}


//var conn = new queueConector();
//conn.consumerQueue();
//conn.producerMessage("EEEEEEEE");
//dd.consumerQueue()

export = queueConector;