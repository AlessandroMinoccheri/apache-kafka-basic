import {Kafka} from 'kafkajs'
const msg = process.argv[2];

run();
async function run() {
  try {
    const kafka = new Kafka({
      "clientId": "myapp",
      "brokers": ["localhost:9092"]
    })

    const producer = kafka.producer();
    await producer.connect();

    const partition = msg[0] < "N" ? 0 : 1;
    const result = await producer.send({
      "topic": "Users",
      "messages": [
        {
          "value": msg,
          "partition": partition
        }
      ]
    })

    console.log(`Send succesfully! ${JSON.stringify(result)}`);

    producer.disconnect();
  } catch(ex) {
    console.error(`Something bad happended ${ex}`)
  } finally{
    process.exit(0);
  }


}
