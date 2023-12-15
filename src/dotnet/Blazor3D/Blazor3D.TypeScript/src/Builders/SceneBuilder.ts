import HelperBuilder from "./HelperBuilder";
import LightBuilder from "./LightBuilder";
import GroupBuilder from "./GroupBuilder";
import LineBuilder from "./LineBuilder";
import SpriteBuilder from "./SpriteBuilder";
import { Object3D_B3D } from "../Generated/object3d";
import { Object3D, Scene } from "three";
import TypeHelpers from "../TypeHelpers";

class SceneBuilder {

    static BuildChild(options: Object3D_B3D, scene: Scene, vertexBuffers: Map<Guid, Float32Array>, indexBuffers: Map<Guid, Int32Array>): Object3D {
        if (TypeHelpers.isSprite(options)) {
            return SpriteBuilder.BuildSprite(options);
        } else if (TypeHelpers.isMesh(options)) {
            return LineBuilder.BuildMesh(options, vertexBuffers, indexBuffers);
        } else if (TypeHelpers.isLine(options)) {
            return LineBuilder.BuildMesh(options, vertexBuffers, indexBuffers);
        } else if (TypeHelpers.isAmbientLight(options)) {
            return LightBuilder.BuildAmbientLight(options);
        } else if (TypeHelpers.isPointLight(options)) {
            return LightBuilder.BuildPointLight(options);
        } else if (TypeHelpers.isDirectionalLight(options)) {
            return LightBuilder.BuildDirectionalLight(options);
        } else if (options.type.includes("Helper")) {
            return HelperBuilder.BuildHelper(options, scene);
        } else if (TypeHelpers.isGroup(options)) { 
            return GroupBuilder.BuildGroup(options, scene, vertexBuffers, indexBuffers);
        } else {
            //throw `Unknown child type '${options.type}'`;
            // IsGropu seems to change 'option' from 'Object3D_B3D to 'never', whatever that means, which means we can't use below
            throw `Unknown child type`;
        }
    }
}

export default SceneBuilder;