/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Vector3_B3D } from "./vector3";

/**
 * Orbit controls.
 */
export class OrbitControlOptions_B3D {
    /**
     * Minimum Polar Angle
     */
    minPolarAngle: number;
    /**
     * Naximum Polar Angle
     */
    maxPolarAngle: number = 1.5707963267948966;
    /**
     * Damping factor. Default is 0.05
     */
    dampingFactor: number = 0.05;
    /**
     * If true, then enabled. Otherwise, disabled. Default is true.
     */
    enabled: boolean = true;
    /**
     * Minimal distance. Default is 0.
     */
    minDistance: number = 15.0;
    /**
     * Maximal distance to zoom. Default is 10000;
     */
    maxDistance: number = 10000.0;
    /**
     * The point where the camera is looking at. Default is (0,0,0).
     */
    target: Vector3_B3D = {"x":0.0,"y":0.0,"z":0.0};
    /**
     * If true, then panning enabled. Otherwise, panning disabled. Default is true
     */
    enablePan: boolean = true;
    /**
     * If true, than damping enabled. Otherwise, damping disabled. Default is true
     */
    enableDamping: boolean;
}
