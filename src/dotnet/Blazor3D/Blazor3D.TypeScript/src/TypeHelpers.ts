import { AmbientLight_B3D } from "./Generated/ambient-light";
import { BoxGeometry_B3D } from "./Generated/box-geometry";
import { BufferGeometry_B3D } from "./Generated/buffer-geometry";
import { CameraOptions_B3D } from "./Generated/camera-options";
import { CircleGeometry_B3D } from "./Generated/circle-geometry";
import { CustomGeometry_B3D } from "./Generated/custom-geometry";
import { DirectionalLight_B3D } from "./Generated/directional-light";
import { Group_B3D } from "./Generated/group";
import { LineBasicMaterial_B3D } from "./Generated/line-basic-material";
import { LineGeometry_B3D } from "./Generated/line-geometry";
import { Material_B3D } from "./Generated/material";
import { Mesh_B3D } from "./Generated/mesh";
import { MeshBasicMaterial_B3D } from "./Generated/mesh-basic-material";
import { MeshSet_B3D } from "./Generated/mesh-set";
import { MeshStandardMaterial_B3D } from "./Generated/mesh-standard-material";
import { ObjectTypes_B3D } from "./Generated/object-types";
import { Object3D_B3D } from "./Generated/object3d";
import { OrthographicCameraOptions_B3D } from "./Generated/orthographic-camera-options";
import { PerspectiveCameraOptions_B3D } from "./Generated/perspective-camera-options";
import { PointLight_B3D } from "./Generated/point-light";
import { SphereGeometry_B3D } from "./Generated/sphere-geometry";
import { Sprite_B3D } from "./Generated/sprite";
import { SpriteMaterial_B3D } from "./Generated/sprite-material";
import { Texture_B3D } from "./Generated/texture";


// because this is interop we can't check types at runtime in the 'normal' way, so...
class TypeHelpers {
    static isCustomGeometry(options: BufferGeometry_B3D): options is CustomGeometry_B3D {
        return options && options.type === ObjectTypes_B3D.customGeometry;
    }

    static isBoxGeometry = (options: BufferGeometry_B3D): options is BoxGeometry_B3D => {
        return options && options.type === ObjectTypes_B3D.boxGeometry;
    };

    static isCircleGeometry = (options: BufferGeometry_B3D): options is CircleGeometry_B3D => {
        return options && options.type === ObjectTypes_B3D.circleGeometry;
    };

    static isSphereGeometry = (options: BufferGeometry_B3D): options is SphereGeometry_B3D => {
        return options && options.type === ObjectTypes_B3D.sphereGeometry;
    };

    static isLineGeometry = (options: BufferGeometry_B3D): options is LineGeometry_B3D => {
        return options && options.type === ObjectTypes_B3D.lineGeometry;
    };

    static isMeshStandardMaterial = (options: Material_B3D): options is MeshStandardMaterial_B3D => {
        return options && options.type === ObjectTypes_B3D.meshStandardMaterial;
    };

    static isMeshBasicMaterial = (options: Material_B3D): options is MeshBasicMaterial_B3D => {
        return options && options.type === ObjectTypes_B3D.meshBasicMaterial;
    };

    static isSpriteMaterial = (options: Material_B3D): options is SpriteMaterial_B3D => {
        return options && options.type === ObjectTypes_B3D.spriteMaterial;
    };

    static isLineBasicMaterial = (options: Material_B3D): options is LineBasicMaterial_B3D => {
        return options && options.type === ObjectTypes_B3D.lineBasicMaterial;
    };

    static isSprite = (options: Object3D_B3D): options is Sprite_B3D => {
        return options && options.type === ObjectTypes_B3D.sprite;
    };

    static isMesh = (options: Object3D_B3D): options is Mesh_B3D => {
        return options && options.type === ObjectTypes_B3D.mesh;
    };

    static isLine = (options: Object3D_B3D): options is Mesh_B3D => {
        return options && options.type === ObjectTypes_B3D.line;
    };

    static isGroup = (options: Object3D_B3D): options is Group_B3D => {
        return options && options.type === ObjectTypes_B3D.group;
    };

    static isAmbientLight = (options: Object3D_B3D): options is AmbientLight_B3D => {
        return options && options.type === ObjectTypes_B3D.ambientLight;
    };

    static isPointLight = (options: Object3D_B3D): options is PointLight_B3D => {
        return options && options.type === ObjectTypes_B3D.pointLight;
    };

    static isDirectionalLight = (options: Object3D_B3D): options is DirectionalLight_B3D => {
        return options && options.type === ObjectTypes_B3D.directionalLight;
    };

    //static isHelper = (options: Object3D_B3D): options is LineBasicMaterial_B3D => {
    //    return options && options.type.includes("Helper");
    //};

    static isPerspectiveCamera = (options: CameraOptions_B3D): options is PerspectiveCameraOptions_B3D => {
        return options && options.type === ObjectTypes_B3D.perspectiveCamera;
    };

    static isOrthographicCamera = (options: CameraOptions_B3D): options is OrthographicCameraOptions_B3D => {
        return options && options.type === ObjectTypes_B3D.orthographicCamera;
    };

    static isTexture = (options: Texture_B3D): options is Texture_B3D => {
        return options && options.type === ObjectTypes_B3D.texture;
    };

    static isMeshSet = (options: Object3D_B3D): options is MeshSet_B3D => {
        return options && options.type === ObjectTypes_B3D.meshSet;
    };
}

export default TypeHelpers;