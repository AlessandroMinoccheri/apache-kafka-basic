import {Kafka} from 'kafkajs'

run();
async function run() {
  try {
    const kafka = new Kafka({
      "clientId": "myapp",
      "brokers": ["localhost:9092"]
    })

    const consumer = kafka.consumer({"groupId": "test"});
    await consumer.connect();
    
    await consumer.subscribe({
      "topic": "Users", 
      "fromBeginning": true
    })

    await consumer.run({
      "eachMessage": async result => {
        console.log(`Received message ${result.message.value} on partition ${result.partition}`)
      }
    })


  } catch(ex) {
    console.error(`Something bad happended ${ex}`)
  } finally{
  }


}
