const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    brokers: ["127.0.0.1:9092"],
    clientId: "kafka-test-app",
});
