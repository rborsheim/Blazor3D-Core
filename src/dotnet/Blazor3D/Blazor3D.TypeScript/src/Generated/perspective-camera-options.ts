/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { CameraOptions_B3D } from "./camera-options";

/**
 * <para>Camera that uses perspective projection.
 * This projection mode is designed to mimic the way the human eyes see.
 * It is the most common projection mode used for rendering a 3D scene.</para>
 * <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera">PerspectiveCamera</a></para>
 * 
 * <inheritdoc>@see {@link Blazor3D.Configuration.CameraOptions}</inheritdoc>
 */
export class PerspectiveCameraOptions_B3D extends CameraOptions_B3D {
    /**
     * Camera frustum vertical field of view. Default is 75.
     */
    fov: number = 75.0;
    /**
     * Camera frustum near plane distance. Default is 0.1.
     */
    near: number = 0.1;
    /**
     * Camera frustum far plane distance. Default is 1000.
     */
    far: number = 1000.0;
}
