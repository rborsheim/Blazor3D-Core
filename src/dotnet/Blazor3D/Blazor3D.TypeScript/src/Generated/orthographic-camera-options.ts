/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { CameraOptions_B3D } from "./camera-options";

/**
 * <para>Camera that uses <a target="_blank" href="https://en.wikipedia.org/wiki/Orthographic_projection">orthographic projection</a>.</para>
 * <para>In this projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera.</para>
 * <para>This can be useful for rendering 2D scenes and UI elements, amongst other things.</para>
 */
export class OrthographicCameraOptions_B3D extends CameraOptions_B3D {
    /**
     * Camera frustum left plane. Default is -1.
     */
    left: number = -1.0;
    /**
     * Camera frustum right plane. Default is 1.
     */
    right: number = 1.0;
    /**
     * Camera frustum top plane. Default is 1.
     */
    top: number = 1.0;
    /**
     * Camera frustum bottom plane. Default is -1.
     */
    bottom: number = -1.0;
    /**
     * Camera frustum near plane distance. Default is 0.1.
     */
    near: number = 0.1;
    /**
     * Camera frustum far plane distance. Default is 2000.
     */
    far: number = 2000.0;
    /**
     * Zoom factor of the camera. Default is 1.
     */
    zoom: number = 1.0;
}
