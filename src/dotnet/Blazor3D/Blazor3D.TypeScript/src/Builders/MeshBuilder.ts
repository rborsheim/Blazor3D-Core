import * as THREE from "three";
import Transforms from "../Utils/Transforms";
import MaterialBuilder from "./MaterialBuilder";
import { Mesh_B3D } from "../Generated/mesh";
import { LineBasicMaterial_B3D } from "../Generated/line-basic-material";
import { GeometryBuilder } from "./GeometryBuilder";
import { MeshSet_B3D } from "../Generated/mesh-set";

class MeshBuilder {
    static BuildMeshSet(options: MeshSet_B3D, vertexBuffers: Map<Guid, Float32Array>, indexBuffers: Map<Guid, Int32Array>) {

        const geometries = GeometryBuilder.buildGeometry(options.geometry, vertexBuffers, indexBuffers);
        const materials = MaterialBuilder.buildMaterials(options.materials);

        const meshes = [];

        for (let i = 0; i < geometries.length; i++) {

            const material = i >= materials.length ? materials[0] : materials[i];

            const mesh = new THREE.Mesh(geometries[i], material);
            mesh.uuid = options.uuid;

            if (options.edgesMaterial) {
                const edges = this.BuildEdges(geometries[i], options.edgesMaterial[i]);
                mesh.add(edges);
            }

            Transforms.setPosition(mesh, options.position);
            Transforms.setRotation(mesh, options.rotation);
            Transforms.setScale(mesh, options.scale);

            meshes.push(mesh);
        }

        return meshes;
    }

    static BuildEdges(geometry: THREE.BufferGeometry, options: LineBasicMaterial_B3D) {
        const edges = new THREE.EdgesGeometry(geometry);

        const optionsList: LineBasicMaterial_B3D[] = [options];

        const material = MaterialBuilder.buildMaterials(optionsList);
        return new THREE.LineSegments(edges, material[0]);
    }
}

export default MeshBuilder;