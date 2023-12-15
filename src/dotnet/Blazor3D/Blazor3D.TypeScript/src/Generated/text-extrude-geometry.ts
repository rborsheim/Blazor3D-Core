/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { TextShapeGeometry_B3D } from "./text-shape-geometry";

/**
 * Represents geometry to build extruded text
 */
export class TextExtrudeGeometry_B3D extends TextShapeGeometry_B3D {
    /**
     * Thickness to extrude text. Default is 50.
     */
    height: number = 50.0;
    /**
     * Number of points on the curves. Default is 12.
     */
    curveSegments: number = 12;
    /**
     * Turn on bevel. Default is False.
     */
    bevelEnabled: boolean;
    /**
     * How deep into text bevel goes. Default is 10.
     */
    bevelThickness: number = 10.0;
    /**
     * How far from text outline is bevel. Default is 8.
     */
    bevelSize: number = 8.0;
    /**
     * How far from text outline bevel starts. Default is 0.
     */
    bevelOffset: number;
    /**
     * Number of bevel segments
     */
    bevelSegments: number = 3;
}
