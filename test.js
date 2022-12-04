const {LoggingManager} = require("./index.js");

let options = {
    enableColors: true,
    dateFormatting: "hh:mm:ss",
    trace: true
}
const logger = new LoggingManager(options);
let error = new Error();
logger.Log(logger.levels.info, "test");
logger.Log(logger.levels.warn, "test");
logger.Log(logger.levels.error, error);
logger.Log(logger.levels.fatal, "test");


