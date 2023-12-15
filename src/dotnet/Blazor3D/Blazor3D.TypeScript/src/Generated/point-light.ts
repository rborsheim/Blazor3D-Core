/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Light_B3D } from "./light";

/**
 * <para>A light that gets emitted from a single point in all directions. A common use case for this is to replicate the light emitted from a bare lightbulb.</para>
 * <para>This light can cast shadows</para>
 * <para>This class inherits from @see {@link Blazor3D.Lights.Light}</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/lights/PointLight">PointLight</a></para>
 * 
 * <inheritdoc>@see {@link Blazor3D.Lights.Light}</inheritdoc>
 */
export class PointLight_B3D extends Light_B3D {
    /**
     * <para>When distance value is NOT 0, light will attenuate linearly from maximum intensity at the light's position down to zero at this distance from the light.</para>
     * <para>When distance is zero, light does not attenuate.</para>
     * <para>Default is 0.</para>
     */
    distance: number;
    /**
     * <para>The amount the light dims along the distance of the light</para>
     * <para>Default is 1.</para>
     */
    decay: number = 1.0;
}
