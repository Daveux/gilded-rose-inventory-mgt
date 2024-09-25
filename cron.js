const cron = require("node-cron")
const {update_quality} = require("./gilded_rose");
//Schedules cron to automate quality updates daily at 12am
const cronJob = cron.schedule("0 0 * * *", async () => {
    console.log("Running cron job");
     update_quality();
    console.log("Cron jobs run successfully");
});

cronJob.start();