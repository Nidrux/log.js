const moment = require("moment");
const { hooks } = require("./handlers/hooks");
const { terminal } = require("./handlers/terminal");
const { formatLogMessage } = require("./modules/formatLogMessage");
class LoggingManager {
    config;
    date;
    stack;
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
            this.date = moment(Date.now()).format(this.config.dateFormatting);
        } else {
            this.date = moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a");
        }
        if(this.config?.trace || message instanceof Error) {
            if(message instanceof Error) {
                this.stack = message.stack.split("at ")[1];;
                console.log(this.stack)
                message = JSON.stringify(message, Object.getOwnPropertyNames(message), null , 2)
            } else {
                this.stack = ((new Error().stack).split("at ")[2]);
            }
            let regexp = /[^\\]+:(\d*):(\d*)/g;
            this.stack = this.stack.match(regexp)
        }
        message = formatLogMessage(this, level, message);
        terminal(this, message, level);
        if(this.config?.webhooks) {
            hooks(this, message);
        }
    }
    get levels() {
        return this.#levels;
    }
    get colors() {
        return this.#colors;
    }
}
module.exports.LoggingManager = LoggingManager;




