import * as fs from 'node:fs/promises';
import * as path from 'path';
// Consider importing a logging library like pino for better logging
// OR return errors to the caller and let it handle logging

export async function clearPath(targetPath: string): Promise<void> {
    try {
        // rm supports native recursive deletion, no need for a custom recursive function
        await fs.rm(targetPath, { recursive: true, force: true });
    } catch (error) {
        console.error(`[ERROR] PATH NOT CLEARED: ${error}`);
    }
}

export async function saveFile(fileName: string, fileContent: string, filePath: string = './'): Promise<void> {
    try {
        // ! possible path injection !
        const fullPath = path.join(filePath, fileName);
        await fs.mkdir(filePath, { recursive: true });
        await using file = await fs.open(fullPath, 'w');
        await file.write(fileContent);
        await file.close();
    } catch (error) {
        console.error(`[ERROR] FILE NOT SAVED: ${error}`);
    }
}