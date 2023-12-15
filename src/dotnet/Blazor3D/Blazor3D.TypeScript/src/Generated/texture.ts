/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { WrappingType_B3D } from "./wrapping-type";
import { Vector2_B3D } from "./vector2";

export class Texture_B3D {
    type: string = "Texture";
    /**
     * Optional name of the texture (doesn't need to be unique). Default is an empty string.
     */
    name: string = "";
    /**
     * <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier" target="_blank">Universal unique identifier</a> of this object instance. It's automatically assigned Guid, so it shouldn't be edited.
     */
    uuid: string = "18cb72fa-add6-4f6d-9695-130af8773d19";
    /**
     * URL of the texture image file.
     */
    textureUrl: string = "";
    /**
     * <para>This defines how the texture is wrapped horizontally and corresponds to U in UV mapping.</para>
     * <para>The default is @see {@link Blazor3D.Enums.WrappingType.ClampToEdgeWrapping}, where the edge is clamped to the outer edge texels.</para>
     * <para>See the @see {@link Blazor3D.Enums.WrappingType} for details.</para>
     */
    wrapS: WrappingType_B3D = 1001;
    /**
     * <para>This defines how the texture is wrapped vertically and corresponds to V in UV mapping.</para>
     * <para>The same choices are available as for WrapS. See the @see {@link Blazor3D.Enums.WrappingType} for details.</para>
     * <para>NOTE: tiling of images in textures only functions if image dimensions are powers of two (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...) in terms of pixels. Individual dimensions need not be equal, but each must be a power of two. This is a limitation of WebGL, not three.js.</para>
     */
    wrapT: WrappingType_B3D = 1001;
    /**
     * <para>How many times the texture is repeated across the surface, in each direction U and V. </para>
     * <para>If repeat is set greater than 1 in either direction, the corresponding Wrap parameter should also be set to @see {@link Blazor3D.Enums.WrappingType.RepeatWrapping} or @see {@link Blazor3D.Enums.WrappingType.MirroredRepeatWrapping} to achieve the desired tiling effect.</para>
     * <para>Setting different repeat values for textures is restricted in the same way like Offset.</para>
     */
    repeat: Vector2_B3D = {"x":1.0,"y":1.0};
    /**
     * <para>How much a single repetition of the texture is offset from the beginning, in each direction U and V. Typical range is 0.0 to 1.0.</para>
     * <para>For more details see <a target="_blank" href="https://threejs.org/docs/index.html?q=texture#api/en/textures/Texture.offset">here</a> </para>
     */
    offset: Vector2_B3D = {"x":0.0,"y":0.0};
    /**
     * The point around which rotation occurs. A value of (0.5, 0.5) corresponds to the center of the texture. Default is (0, 0), the lower left.
     */
    center: Vector2_B3D = {"x":0.0,"y":0.0};
    /**
     * How much the texture is rotated around the center point, in radians. Positive values are counter-clockwise. Default is 0.
     */
    rotation: number;
}
