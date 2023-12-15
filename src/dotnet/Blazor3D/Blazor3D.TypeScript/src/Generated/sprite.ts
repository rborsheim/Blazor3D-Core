/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Object3D_B3D } from "./object3d";
import { SpriteMaterial_B3D } from "./sprite-material";

/**
 * <para>Class representing a sprite.</para>
 * <para>This object inherits from @see {@link Blazor3D.Core.Object3D}</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/objects/Mesh">Mesh</a></para>
 * 
 * <inheritdoc>@see {@link Blazor3D.Core.Object3D}</inheritdoc>
 */
export class Sprite_B3D extends Object3D_B3D {
    /**
     * <para>An instance of @see {@link Blazor3D.Materials.Material} (or derived classes) materials, defining the object's appearance.</para>
     */
    material: SpriteMaterial_B3D;
}
