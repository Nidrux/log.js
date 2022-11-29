declare class LoggingManager {
    dateFormatting: Date
    config: Object
    private levels: Object
    private colors: Object
    constructor(inConfig: Object) {   
        this.config = inConfig;
    }
    public Log(level: string, message:string):void
    public get levels(): Object
    public get colors(): Object
}
    
