/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Object3D_B3D } from "./object3d";

/**
 * <para>Scenes allow you to set up what and where is to be rendered by Blazor3D. 
 * This is the place where you put your 3D objects and lights.</para>
 * <para>This object inherits from @see {@link Blazor3D.Core.Object3D}</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/scenes/Scene">Scene</a></para>
 * 
 * <inheritdoc>@see {@link Blazor3D.Core.Object3D}</inheritdoc>
 */
export class SceneOptions_B3D extends Object3D_B3D {
    clickableObjects: { [key: string]: Object3D_B3D; } = {};
    /**
     * Scene background color. 
     * You can use <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">web color values</a> to set up required color.
     * Default value is "DarkSlateBlue">
     */
    backGroundColor: string = "DarkSlateBlue";
}
