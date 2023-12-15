/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { BufferGeometry_B3D } from "./buffer-geometry";

/**
 * <para>Class for rectangular cuboid with a given 'width', 'height', and 'depth'.</para>
 * <para>This class inherits from @see {@link Blazor3D.Core.BufferGeometry}</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry">BoxGeometry</a></para>
 * 
 * <inheritdoc>@see {@link Blazor3D.Core.BufferGeometry}</inheritdoc>
 */
export class BoxGeometry_B3D extends BufferGeometry_B3D {
    /**
     * The length of the edges parallel to the X axis. Default is 1.
     */
    width: number = 1.0;
    /**
     * The length of the edges parallel to the Y axis. Default is 1.
     */
    height: number = 1.0;
    /**
     * The length of the edges parallel to the Z axis. Default is 1.
     */
    depth: number = 1.0;
    /**
     * Number of segmented rectangular faces along the width of the sides. Default is 1.
     */
    widthSegments: number = 1;
    /**
     * Number of segmented rectangular faces along the height of the sides. Default is 1.
     */
    heightSegments: number = 1;
    /**
     * Number of segmented rectangular faces along the depth of the sides. Default is 1.
     */
    depthSegments: number = 1;
}
