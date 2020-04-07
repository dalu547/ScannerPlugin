import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Scanner Plugin
 * @description
 * This plugin does multiple bar/QR codes in single shot.
 *
 * @usage
 * ```typescript
 * import { ScannerPlugin } from '@ionic-native/scanner-plugin';
 *
 *
 * constructor(private scannerPlugin: ScannerPlugin) { }
 *
 * ...
 *
 *
 * this.scannerPlugin.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class ScannerPluginOriginal extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    functionName(arg1: string, arg2: number): Promise<any>;
    coolMethod(arg1: any): Promise<string>;
    openScanner(): Promise<any>;
}

export declare const ScannerPlugin: ScannerPluginOriginal;