/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Material_B3D } from "./material";
import { Texture_B3D } from "./texture";

/**
 * <para>A standard physically based Material, using Metallic-Roughness workflow.</para>
 * <para>This class inherits from @see {@link Blazor3D.Materials.Material}</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial">MeshStandardMaterial</a></para>
 */
export class MeshStandardMaterial_B3D extends Material_B3D {
    /**
     * <para>Define whether the material is rendered with flat shading. Default is false.</para>
     */
    flatShading: boolean;
    /**
     * <para>How much the material is like a metal. Non-metallic materials such as wood or stone use 0.0, metallic use 1.0, with nothing (usually) in between. Default is 0.0. A value between 0.0 and 1.0 could be used for a rusty metal look. If metalnessMap is also provided, both values are multiplied.</para>
     */
    metalness: number;
    /**
     * <para>How rough the material appears. 0.0 means a smooth mirror reflection, 1.0 means fully diffuse. Default is 1.0. If roughnessMap is also provided, both values are multiplied.</para>
     */
    roughness: number = 1.0;
    /**
     * <para>Render geometry as wireframe. Default is false (i.e. render as flat polygons).</para>
     */
    wireframe: boolean;
    /**
     * The color map. May optionally include an alpha channel, typically combined with Transparent (todo) or AlphaTest(todo). Default is null. The texture map color is modulated by the diffuse Color.
     */
    map: Texture_B3D = {"type":"Texture","name":"","uuid":"8023aea8-b83a-43b7-8c48-250e9b282889","textureUrl":"","wrapS":1001,"wrapT":1001,"repeat":{"x":1.0,"y":1.0},"offset":{"x":0.0,"y":0.0},"center":{"x":0.0,"y":0.0},"rotation":0.0};
}
