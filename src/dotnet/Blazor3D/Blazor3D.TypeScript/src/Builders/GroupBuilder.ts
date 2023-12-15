import Transforms from "../Utils/Transforms";
import SceneBuilder from "./SceneBuilder";
import { Scene } from "three";
import { Group } from "three";
import { Group_B3D } from "../Generated/group";
import { Object3D_B3D } from "../Generated/object3d";

class GroupBuilder {

    static BuildGroup(options: Group_B3D, scene: Scene, vertexBuffers: Map<Guid, Float32Array>, indexBuffers: Map<Guid, Int32Array>): Group {
        const group = new Group();
        options.children.forEach((childOptions: Object3D_B3D) => {
            // todo: changes for text here (see Viewer.SetScene)
            var child = SceneBuilder.BuildChild(childOptions, scene, vertexBuffers, indexBuffers);
            if (child) {
                group.add(child);
            }
        });
        Transforms.setPosition(group, options.position);
        Transforms.setRotation(group, options.rotation);
        Transforms.setScale(group, options.scale);
        return group;
    }
}

export default GroupBuilder;