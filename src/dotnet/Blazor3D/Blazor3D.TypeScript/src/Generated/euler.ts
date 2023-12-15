/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

/**
 * <para>Representing Euler Angles.
 * Euler angles describe a rotational transformation by rotating an object on its various axes in specified amounts per axis, and a specified axis order.
 * Iterating through a Euler instance will yield its components (x, y, z, order) in the corresponding order.</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/math/Euler">Euler</a></para>
 */
export class Euler_B3D {
    /**
     * The double angle of the X axis in radians. Default is 0. Optional.
     */
    x: number;
    /**
     * The double angle of the Y axis in radians. Default is 0. Optional.
     */
    y: number;
    /**
     * The double angle of the Z axis in radians. Default is 0. Optional.
     */
    z: number;
    /**
     * String representing the order that the rotations are applied. Default is 'XYZ'. Must be upper case.
     */
    order: string = "XYZ";
}
