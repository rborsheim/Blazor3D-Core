import Transforms from "../Utils/Transforms";
import MaterialBuilder from "./MaterialBuilder";
import { Mesh_B3D } from "../Generated/mesh";
import { Line } from "three";
import { GeometryBuilder } from "./GeometryBuilder";

class LineBuilder {
    static BuildMesh(options: Mesh_B3D, vertexBuffers: Map<Guid, Float32Array>, indexBuffers: Map<Guid, Int32Array>): Line {
        const geometry = GeometryBuilder.buildGeometry(options.geometry, vertexBuffers, indexBuffers)[0];
        const material = MaterialBuilder.buildMaterials([options.material]);
        const line = new Line(geometry, material);

        //todo: linecaps ...


        line.uuid = options.uuid;
        Transforms.setPosition(line, options.position);
        Transforms.setRotation(line, options.rotation);
        Transforms.setScale(line, options.scale);
        return line;
    }
}

export default LineBuilder;