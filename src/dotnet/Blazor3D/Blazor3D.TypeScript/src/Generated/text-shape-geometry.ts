/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { BufferGeometry_B3D } from "./buffer-geometry";

/**
 * Represents geometry to build shape text
 */
export class TextShapeGeometry_B3D extends BufferGeometry_B3D {
    /**
     * The text that needs to be shown
     */
    text: string = "Hello, Blazor3D!";
    /**
     * The path or URL to the file. This can also be a Data URI
     */
    fontURL: string = "";
    /**
     * Size of the text. Default is 100.
     */
    size: number = 100.0;
}
