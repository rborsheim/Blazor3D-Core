/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

/**
 * <para>Settings used for animated rotations.</para>
 */
export class AnimateRotationSettings_B3D {
    /**
     * The option indicates whether the rotation animation should be applied. Default is false.
     */
    animateRotation: boolean;
    /**
     * The angle in degreees to rotate around the X axis on each animation frame. Default is 0.1.
     */
    thetaX: number = 0.1;
    /**
     * The angle in degreees to rotate around the Y axis on each animation frame. Default is 0.1.
     */
    thetaY: number = 0.1;
    /**
     * The angle in degreees to rotate around the Z axis on each animation frame. Default is 0.1.
     */
    thetaZ: number = 0.1;
    /**
     * Radius of rotation. Default is 5.
     */
    radius: number = 5.0;
    /**
     * Stops animation when user starts using orbit controls. Default is false.
     */
    stopAnimationOnOrbitControlMove: boolean;
}
