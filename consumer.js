const { kafka } = require("./client");
const group = process.argv[2];

async function init() {
    console.log("Connecting Consumer");
    const consumer = kafka.consumer({ groupId: group });
    console.log("Consumer Connected");

    await consumer.subscribe({
        topics: ["rider-updates"],
        fromBeginning: true,
    });

    await consumer.run({
        eachMessage: async ({
            topic,
            partition,
            message,
            heartbeat,
            pause,
        }) => {
            console.log(
                `[Group: ${group}][${topic}][partition-${partition}] : `,
                message.value.toString()
            );
        },
    });
}

init();
