import { Euler, EulerOrder, Object3D } from "three";
import { Vector3_B3D } from "../Generated/vector3";
import { Euler_B3D } from "../Generated/euler";

class Transforms {
    static setPosition(object3d: Object3D, position: Vector3_B3D) {
        const { x, y, z } = position;
        object3d.position.set(x, y, z);
    }

    static setRotation(object3d: Object3D, eulerOptions: Euler_B3D) {
        const { x, y, z, order } = eulerOptions;
        const convertedOrder = order as EulerOrder;
        object3d.setRotationFromEuler(new Euler(x, y, z, convertedOrder));
    }

    static setScale(object3d: Object3D, scale: Vector3_B3D) {
        const { x, y, z } = scale;
        object3d.scale.set(x, y, z);
    }
}

export default Transforms;