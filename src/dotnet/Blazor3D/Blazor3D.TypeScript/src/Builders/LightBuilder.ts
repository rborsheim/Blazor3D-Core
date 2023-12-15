import * as THREE from "three";
import Transforms from "../Utils/Transforms";
import { AmbientLight_B3D } from "../Generated/ambient-light";
import { PointLight_B3D } from "../Generated/point-light";
import { DirectionalLight_B3D } from "../Generated/directional-light";

class LightBuilder {
    static BuildAmbientLight(options: AmbientLight_B3D): THREE.AmbientLight {
        const light = new THREE.AmbientLight(options.color, options.intensity);
        Transforms.setPosition(light, options.position);
        return light;
    }

    static BuildPointLight(options: PointLight_B3D): THREE.PointLight {
        const light = new THREE.PointLight(
            options.color,
            options.intensity,
            options.distance,
            options.decay
        );
        light.uuid = options.uuid;
        Transforms.setPosition(light, options.position);
        return light;
    }

    static BuildDirectionalLight(options: DirectionalLight_B3D): THREE.DirectionalLight {
        const light = new THREE.DirectionalLight(
            options.color,
            options.intensity
        );
        light.uuid = options.uuid;
        Transforms.setPosition(light, options.position);
        return light;
    }
}

export default LightBuilder;