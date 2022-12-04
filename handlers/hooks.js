/**
 * 
 * @param {Array} array 
 * @param {string} string 
 * @returns {array} an array with events that are also defined as levels in the LoggingManager.
 */
function isAnEvent(array, string) {
    return array.filter(s => s.toLowerCase() === string.toLowerCase());
}
const fetch = require("node-fetch");
/**
 * 
 * @param {LoggingManager} loggingManager 
 * @param {string} level 
 * @param {string} message 
 */
module.exports.hooks = (loggingManager, level, message) => {
    if(loggingManager.config?.webhooks) {
        if(loggingManager.config.webhooks?.hooks) {
            if(loggingManager.config.webhooks?.onEvents) { 
                if(isAnEvent(loggingManager.config.webhooks.onEvents, level).length > 0) {
                    for(let i = 0; i < loggingManager.config.webhooks.hooks.length; i++) {
                        fetch(loggingManager.config.webhooks.hooks[i],
                            {
                                method: "POST",
                                body: JSON.stringify({
                                    content: `[${loggingManager.dateFormat}] ${level} ${message}`,
                                }),
                                headers: {"content-type": "application/json"}
                            }
                        ).catch(err => {if(err) console.error(err)})
                    }
                }
            }
        }
    }
}