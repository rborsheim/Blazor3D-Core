/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Object3D_B3D } from "./object3d";
import { MeshStandardMaterial_B3D } from "./mesh-standard-material";
import { BufferGeometry_B3D } from "./buffer-geometry";
import { LineBasicMaterial_B3D } from "./line-basic-material";

/**
 * <para>Class representing triangulated polygon mesh based objects. Also serves as a base for other classes.</para>
 * <para>This object inherits from @see {@link Blazor3D.Core.Object3D}</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/objects/Mesh">Mesh</a></para>
 * 
 * <inheritdoc>@see {@link Blazor3D.Core.Object3D}</inheritdoc>
 */
export class Mesh_B3D extends Object3D_B3D {
    /**
     * <para>Collection of @see {@link Blazor3D.Materials.Material} (or derived classes) materials, defining the object's appearance.</para>
     */
    material: MeshStandardMaterial_B3D;
    /**
     * <para>An instance of @see {@link Blazor3D.Core.BufferGeometry} (or derived classes), defining the object's structure.</para>
     */
    geometry: BufferGeometry_B3D;
    edgesMaterial: LineBasicMaterial_B3D[];
}
