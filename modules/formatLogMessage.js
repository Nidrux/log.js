module.exports.formatLogMessage = (LoggingManager,level, message) => {
    let m = `[${LoggingManager.date}]`
    if(LoggingManager.config?.trace) {
        m = m + ` (${LoggingManager.stack})`
    }
    m = m + ` ${level} ${message}`
    return m
}