/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { BufferGeometry_B3D } from "./buffer-geometry";

/**
 * <para>A class for generating sphere geometries.</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry">SphereGeometry</a></para>
 */
export class SphereGeometry_B3D extends BufferGeometry_B3D {
    /**
     * Radius of the sphere. Default is 1.
     */
    radius: number = 1.0;
    /**
     * Number of horizontal segments. Minimum value is 3, and the default is 32.
     */
    widthSegments: number = 32;
    /**
     * Number of vertical segments. Minimum value is 2, and the default is 16.
     */
    heightSegments: number = 16;
    /**
     * Specifies horizontal starting angle. Default is 0.
     */
    phiStart: number;
    /**
     * Specifies horizontal sweep angle size. Default is Math.PI * 2.
     */
    phiLength: number = 6.283185307179586;
    /**
     * Specifies vertical starting angle. Default is 0.
     */
    thetaStart: number;
    /**
     * Specifies vertical sweep angle size. Default is Math.PI * 2.
     */
    thetaLength: number = 6.283185307179586;
}
