export declare enum HMLoggerLevel {
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR"
}
export declare class HMLogger {
    private static singleHMLogger;
    private static loggerLevel;
    private static readonly LOGGER_DOMAIN;
    private static readonly LOGGER_TAG;
    private constructor();
    static getInstance(): HMLogger;
    static openLog(level: 'DEBUG' | 'INFO'): void;
    static isLoggable(type: HMLoggerLevel): boolean;
    static debug(format: string, ...args: Array<string | number>): void;
    static info(format: string, ...args: Array<string | number>): void;
    static warn(format: string, ...args: Array<string | number>): void;
    static error(format: string, ...args: Array<string | number>): void;
}
