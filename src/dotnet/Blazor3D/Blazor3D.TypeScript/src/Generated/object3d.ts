/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Vector3_B3D } from "./vector3";
import { Euler_B3D } from "./euler";

/**
 * <para>It's a base abstract class for most objects in <strong>Blazor3D</strong>. 
 * It provides functionality for manipulating objects in 3D space.</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/core/Object3D">Object3D</a></para>
 */
export class Object3D_B3D {
    /**
     * Represents the object's local @see {@link Blazor3D.Maths.Vector3} position. Default is (0, 0, 0).
     */
    position: Vector3_B3D;
    /**
     * Object's local @see {@link Blazor3D.Maths.Euler} rotation, in radians.
     */
    rotation: Euler_B3D;
    /**
     * Represents the object's local @see {@link Blazor3D.Maths.Vector3} scale. Default is (1, 1, 1).
     */
    scale: Vector3_B3D;
    type: string;
    /**
     * Optional name of the object. Default is an empty string. It has not to be unique.
     */
    name: string;
    /**
     * <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier" target="_blank">Universal unique identifier</a> of this object instance. It's automatically assigned Guid, so it shouldn't be edited.
     */
    uuid: string;
    /**
     * Collection of @see {@link Blazor3D.Core.Object3D} child objects.
     */
    children: Object3D_B3D[];
}
