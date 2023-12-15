/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { WebGLRendererSettings_B3D } from "./web-gl-renderer-settings";

/**
 * Class for Blazor3D Viewer settings.
 */
export class ViewerOptions_B3D {
    /**
     * <para>Identifier of the html container where @see {@link Blazor3D.Viewers.Viewer}instance will be created.</para>
     * <para>Must be unique on the html page! Default is "blazorview3d"</para>
     */
    containerId: string = "blazorview3d";
    /**
     * If true, user can select objects by mouse. Default is false.
     */
    canSelect: boolean;
    /**
     * If true, the helpers can be selected by mouse. Default is false.
     */
    canSelectHelpers: boolean;
    /**
     * Color the selected element is highlighted. Default is "lime".
     */
    selectedColor: string = "lime";
    /**
     * Show or hide ViewHelper
     */
    showViewHelper: boolean = true;
    /**
     * Blazor3D Viewer WebGLRenderer settings
     */
    webGLRendererSettings: WebGLRendererSettings_B3D = {"antialias":true};
}
