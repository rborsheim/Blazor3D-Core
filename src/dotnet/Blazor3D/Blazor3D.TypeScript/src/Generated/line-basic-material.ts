/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { Material_B3D } from "./material";

/**
 * A material for drawing wireframe-style geometries.
 */
export class LineBasicMaterial_B3D extends Material_B3D {
    /**
     * Define appearance of line ends. Possible values are 'butt', 'round' and 'square'. Default is 'round'.
     */
    lineCap: string = "round";
    /**
     * Define appearance of line joints. Possible values are 'round', 'bevel' and 'miter'. Default is 'round'.
     */
    lineJoin: string = "round";
    /**
     * Controls line thickness. Default is 1.
     * Due to limitations of the OpenGL Core Profile with the WebGL renderer on most platforms linewidth will always be 1 regardless of the set value.
     */
    lineWidth: number = 1.0;
}
