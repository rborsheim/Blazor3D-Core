/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { BufferGeometry_B3D } from "./buffer-geometry";

/**
 * <para>Class for a simple shape of Euclidean geometry. 
 * It is constructed from a number of triangular segments that are oriented around a central point and extend as far out as a given radius. 
 * It is built counter-clockwise from a start angle and a given central angle. 
 * It can also be used to create regular polygons, where the number of segments determines the number of sides.</para>
 * <para>This class inherits from @see {@link Blazor3D.Core.BufferGeometry}</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/geometries/CircleGeometry">CircleGeometry</a></para>
 * 
 * <inheritdoc>@see {@link Blazor3D.Core.BufferGeometry}</inheritdoc>
 */
export class CircleGeometry_B3D extends BufferGeometry_B3D {
    /**
     * Radius of the circle. Default is 1.
     */
    radius: number = 1.0;
    /**
     * Number of segments (triangles). Minimum = 3, default = 8.
     */
    segments: number = 8;
    /**
     * Start angle for first segment. Default is 0 (three o'clock position).
     */
    thetaStart: number;
    /**
     * The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
     */
    thetaLength: number = 6.283185307179586;
}
