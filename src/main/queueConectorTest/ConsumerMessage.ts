/**
 * Created by MAVeces on 12/7/2016.
 */
/**
 * Created by MAVeces on 12/5/2016.
 */
import queueConector = require('../queueImplement/queueConector');
import connections = require('../connection/connectionQueue');

class ConsumerMessage{
    public consumer(){
         let sendMessage = new queueConector();
         sendMessage.consumerQueue();
    }
}

let test = new  ConsumerMessage();
test.consumer();


