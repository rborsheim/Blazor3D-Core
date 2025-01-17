/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

/**
 * <para>Abstract base class for materials.</para>
 * <para>Materials describe the appearance of objects. They are defined in a mostly renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/materials/Material">Material</a></para>
 */
export class Material_B3D {
    type: string;
    /**
     * <para>Light color. 
     * You can use <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">web color values</a> to set up required color.
     * Default value is "orange"</para>
     */
    color: string;
    /**
     * Optional name of the object. Default is an empty string. It has not to be unique.
     */
    name: string;
    /**
     * <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier" target="_blank">Universal unique identifier</a> of this object instance. It's automatically assigned Guid, so it shouldn't be edited.
     */
    uuid: string;
    /**
     * Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects.
     * When set to true, the extent to which the material is transparent is controlled by setting its opacity property.
     * Default is false.
     */
    transparent: boolean;
    /**
     * Float in the range of 0.0 - 1.0 indicating how transparent the material is. A value of 0.0 indicates fully transparent, 1.0 is fully opaque.
     * If the material's transparent property is not set to true, the material will remain fully opaque and this value will only affect its color.
     * Default is 1.0.
     */
    opacity: number;
}
