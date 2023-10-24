const { kafka } = require('./client')

async function init() {
    const admin = kafka.admin();
    console.log("Admin Connecting...");
    admin.connect();
    console.log("Admin Connection Success!");

    console.log("Creating Topics");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2,
            },
        ],
    });
    console.log("Topic Created");

    console.log("Disconnecting...");
    await admin.disconnect();
    console.log("Admin Disconnected");
}

init();
