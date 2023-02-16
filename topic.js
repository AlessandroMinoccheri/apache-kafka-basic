import {Kafka} from 'kafkajs'

run();
async function run() {
  try {
    const kafka = new Kafka({
      "clientId": "myapp",
      "brokers": ["localhost:9092"]
    })

    const admin = kafka.admin();
    await admin.connect();

    await admin.createTopics({
      "topics": [{
        "topic": "Users",
        "numPartitions": 2
      }]
    })
    console.log("Created succesfully");

    admin.disconnect();
  } catch(ex) {
    console.error(`Something bad happended ${ex}`)
  } finally{
    process.exit(0);
  }


}
