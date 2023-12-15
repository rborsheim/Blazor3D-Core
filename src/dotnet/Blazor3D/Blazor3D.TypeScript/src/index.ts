import Viewer3D from "./Viewer/Viewer3D";
import { Blazor3DConfiguration_B3D } from "./Generated/blazor3d-configuration";
import { Vector3_B3D } from "./Generated/vector3";

let viewer3d: Viewer3D;
let vertexBuffers = new Map();
let indexBuffers = new Map();

const resizeObserver = new ResizeObserver((entries) => {
    viewer3d.onResize();
});

export function loadViewer(json: string) {
    const blazor3DConfiguration = JSON.parse(json) as Blazor3DConfiguration_B3D;
    const container = document.getElementById(blazor3DConfiguration.viewerOptions.containerId);
    if (!container) {
        console.warn("Container not found!");
        return;
    }
    resizeObserver.observe(container);
    viewer3d = new Viewer3D(blazor3DConfiguration, vertexBuffers, indexBuffers, container);
}

export function addVertexBuffer(guid: Guid, vertexBuffer: Uint8Array) {
    const vertrexBufferFloat32 = new Float32Array(vertexBuffer.buffer);
    vertexBuffers.set(guid, vertrexBufferFloat32);
}

export function updateVertexBuffer(guid: Guid, vertexBuffer: Uint8Array) {
    const vertexBufferFloat32 = new Float32Array(vertexBuffer.buffer);
    vertexBuffers.set(guid, vertexBufferFloat32);

    viewer3d.updateMeshesForVertexBuffer(guid);
}

export function addIndexBuffer(guid: Guid, indexBuffer: Int32Array) {
    indexBuffers.set(guid, new Int32Array(indexBuffer));
}

export function updateScene(json: string) {
    const sceneOptions = JSON.parse(json);
    viewer3d.updateScene(sceneOptions);
}

export function removeByUuid(guid: Guid): boolean {
    return viewer3d.removeByUuid(guid);
}

export function selectByUuid(guid: Guid): boolean {
    return viewer3d.selectByUuid(guid);
}

export function clearScene() {
    viewer3d.clearScene();
}

export function import3DModel(json: string): string {
    const settings = JSON.parse(json);
    return JSON.stringify(viewer3d.import3DModel(settings));
}

export function setCameraPosition(position: Vector3_B3D, lookAt: Vector3_B3D) {
    viewer3d.setCameraPosition(position, lookAt);
}

//export function updateCamera(json: string) {
//    const options = JSON.parse(json);
//    viewer3d.updateCamera(options);
//}

export function showCurrentCameraInfo() {
    viewer3d.showCurrentCameraInfo();
}

//export function updateOrbitControls(json: string) {
//    const options = JSON.parse(json);
//    viewer3d.updateOrbitControls(options);
//}

export function getSceneItemByGuid(guid: Guid): string {
    const item = viewer3d.getSceneItemByGuid(guid);
    return JSON.stringify(item);
}