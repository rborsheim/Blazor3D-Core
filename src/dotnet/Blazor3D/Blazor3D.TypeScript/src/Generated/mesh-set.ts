/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Object3D_B3D } from "./object3d";
import { Material_B3D } from "./material";
import { BufferGeometry_B3D } from "./buffer-geometry";
import { LineBasicMaterial_B3D } from "./line-basic-material";

export class MeshSet_B3D extends Object3D_B3D {
    /**
     * <para>Collection of @see {@link Blazor3D.Materials.Material} (or derived classes) materials, defining the object's appearance.</para>
     */
    materials: Material_B3D[];
    /**
     * <para>An instance of @see {@link Blazor3D.Core.BufferGeometry} (or derived classes), defining the object's structure.</para>
     */
    geometry: BufferGeometry_B3D;
    edgesMaterial: LineBasicMaterial_B3D[];
}
