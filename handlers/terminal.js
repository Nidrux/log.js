/**
 * 
 * @param {LoggingManager} LoggingManager 
 * @param {string} message 
 */
module.exports.terminal = (LoggingManager, message) => {
    if(LoggingManager.config?.enableColors) {
        switch(level.toUpperCase()) {
            case "WARN":
                console.log(`${LoggingManager.colors.gold}${message}${LoggingManager.colors.reset}`);
                break;
            case "ERROR":
                console.log(`${LoggingManager.colors.brightRed}${message}${LoggingManager.colors.reset}`);
                break;
            case "FATAL":
                console.log(`${LoggingManager.colors.red}${message}${LoggingManager.colors.reset}`);
                break;
            default:
                console.log(message);
                break;
        }
    } else {
        console.log(message);
    }
}