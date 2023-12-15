import * as THREE from "three";
import Transforms from "../Utils/Transforms";
import { Camera } from "three";
import { CameraOptions_B3D } from "../Generated/camera-options";
import TypeHelpers from "../TypeHelpers";

class CameraBuilder {

    static BuildCamera(options: CameraOptions_B3D, aspect: number): Camera {
        let camera: Camera;
        if (TypeHelpers.isPerspectiveCamera(options)) {
            camera = new THREE.PerspectiveCamera(
                options.fov,
                aspect,
                options.near,
                options.far
            );
        } else if (TypeHelpers.isOrthographicCamera(options)) {
            camera = new THREE.OrthographicCamera(
                options.left * aspect,
                options.right * aspect,
                options.top,
                options.bottom,
                options.near,
                options.far
            );
            //camera.zoom = options.zoom;
        } else {
            throw `Unknown camera type '${options.type}'`;
        }

        camera.uuid = options.uuid;
        Transforms.setPosition(camera, options.position);
        Transforms.setRotation(camera, options.rotation);
        Transforms.setScale(camera, options.scale);
        const { x, y, z } = options.lookAt;
        camera.lookAt(x, y, z);
        return camera;
    }
}

export default CameraBuilder;