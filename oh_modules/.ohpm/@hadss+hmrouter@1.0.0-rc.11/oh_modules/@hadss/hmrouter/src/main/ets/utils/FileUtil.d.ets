/**
 * File operation tool class
 */
export declare class FileUtil {
    /**
     *  router_map.json Store JSON strings
     */
    static readonly READ_DEFAULT_LENGTH: number;
    /**
     * write file
     * @param filePath
     * @param content
     * @param create: Do you want to create a new file
     */
    static writeFile(filePath: string, content: string | ArrayBuffer, create?: boolean): void;
    /**
     * Determine whether the file exists
     * @param filePath
     * @returns
     */
    static fileExist(filePath: string): boolean;
    /**
     * delete file
     * @param filePath
     */
    static unlinkFile(filePath: string): void;
    /**
     * Read file content
     * @param filePath
     * @returns fileContent
     */
    static readFile(filePath: string): string;
}
