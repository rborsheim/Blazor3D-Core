/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Object3D_B3D } from "./object3d";
import { AnimateRotationSettings_B3D } from "./animate-rotation-settings";
import { Vector3_B3D } from "./vector3";

/**
 * <para>Abstract base class for cameras.</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/cameras/Camera">Camera</a></para>
 * 
 * <inheritdoc>@see {@link Blazor3D.Core.Object3D}</inheritdoc>
 */
export class CameraOptions_B3D extends Object3D_B3D {
    /**
     * Settings used for camera's animated rotations.
     */
    animateRotationSettings: AnimateRotationSettings_B3D;
    /**
     * The point camera looks at.
     */
    lookAt: Vector3_B3D;
}
