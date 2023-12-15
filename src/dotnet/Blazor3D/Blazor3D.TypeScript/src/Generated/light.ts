/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Object3D_B3D } from "./object3d";

/**
 * <para>Abstract base class for lights.</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/lights/Light">Light</a></para>
 * 
 * <inheritdoc>@see {@link Blazor3D.Core.Object3D}</inheritdoc>
 */
export class Light_B3D extends Object3D_B3D {
    /**
     * <para>Light color. 
     * You can use <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">web color values</a> to set up required color.
     * Default value is "white"</para>
     */
    color: string;
    /**
     * <para>Value of the light's strength/intensity. Default is 1.</para>
     */
    intensity: number;
}
