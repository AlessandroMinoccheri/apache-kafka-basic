# Apache Kafka basic example 

To start the environment:

```
docker-compose up -d
```

To create the topic `Users`:

```
node topic.js
```

To send something with the producer:

```
node producer.js test
```

To consume messages:

```
node consumer.js
```
