const moment = require("moment");
const { hooks } = require("./controllers/hooks");
const { terminal } = require("./controllers/terminal");
class LoggingManager {
    config;
    dateFormat;
    #colors = {
        red: "\u001b[31m",
        gold: "\u001b[33m",
        brightRed: "\u001b[31;1m",
        reset: "\u001b[0m"
    };
    #levels = {
        warn: "WARN",
        error: "ERROR",
        info: "INFO",
        fatal: "FATAL",
    } ;
    /**
     * 
     * @param {Object} inConfig 
     */
    constructor(inConfig) {
        if(inConfig) {
            this.config = inConfig
        } else {
            this.config = {
                enableColors: false,
            }
        }
    }
    /**
     * @param {string} level
     * @param {string} message    
     */
    Log(level, message) {
        if(this.config.dateFormatting) {
            this.dateFormat = moment(Date.now()).format(this.config.dateFormatting);
        } else {
            this.dateFormat = moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a");
        }
        terminal(this, level, message);
        hooks(this, level, message);
    }
    get levels() {
        return this.#levels;
    }
    get colors() {
        return this.#colors;
    }
}
module.exports.LoggingManager = LoggingManager;




