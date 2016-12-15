/**
 * Created by MAVeces on 12/2/2016.
 */
///<reference path='../../../node_modules/retyped-kafka-node-tsd-ambient/kafka-node.d.ts' />

import kafka = require("kafka-node");


class connections{

public server: string;
public  port: number;
public portHttp: number;
private Client: any;
  constructor(){
       this.server = "ubuntukafka";
       this.port= 2181;
      this.portHttp = 9092;
      this.Client = kafka.Client;
  }
    public getClient(): any{
     //   var conn =
        return (new this.Client(this.server + ':' + this.port));

    }

        public getClientHttp(){


                return "conexion ok";
        }
}

export = connections;