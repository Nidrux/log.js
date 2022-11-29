module.exports.terminal = (loggingManager, level, message) => {
    if(loggingManager.config?.enableColors) {
        switch(level.toUpperCase()) {
            case "WARN":
                console.log(`${loggingManager.colors.gold}[${loggingManager.dateFormat}] ${level} ${message}${loggingManager.colors.reset}`);
                break;
            case "ERROR":
                console.log(`${loggingManager.colors.brightRed}[${loggingManager.dateFormat}] ${level} ${message}${loggingManager.colors.reset}`);
                break;
            case "FATAL":
                console.log(`${loggingManager.colors.red}[${loggingManager.dateFormat}] ${level} ${message}${loggingManager.colors.reset}`);
                break;
            default:
                console.log(`[${loggingManager.dateFormat}] ${level} ${message}`);
                break;
        }
    } else {
        console.log(`[${loggingManager.dateFormat}] ${level} ${message}`);
    }
}