import * as THREE from "three";
import { BufferGeometry_B3D } from "../Generated/buffer-geometry";
import TypeHelpers from "../TypeHelpers";

export class GeometryBuilder {
    static buildGeometry(typeOptions: BufferGeometry_B3D, vertexBuffers: Map<Guid, Float32Array>, indexBuffers: Map<Guid, Int32Array>): THREE.BufferGeometry[] {

        const geometries: THREE.BufferGeometry[] = [];

        if (TypeHelpers.isCustomGeometry(typeOptions)) {

            const vertices = vertexBuffers.get(typeOptions.vertexBuffer);

            const interleavedBuffer = new THREE.InterleavedBuffer(vertices, 8);

            const positionAttribute = new THREE.InterleavedBufferAttribute(interleavedBuffer, 3, 0);
            const normalAttribute = new THREE.InterleavedBufferAttribute(interleavedBuffer, 3, 3);
            const uvAttribute = new THREE.InterleavedBufferAttribute(interleavedBuffer, 2, 6);

            typeOptions.indexBuffers.forEach((guid: Guid) => {
                const indexBufferByteArray = new Uint8Array(indexBuffers.get(guid));

                // Access the underlying buffer as Uint32Array
                const indices = new Uint32Array(indexBufferByteArray.buffer);

                // Create a new BufferGeometry
                const geometry = new THREE.BufferGeometry();

                // Set the index buffer of the geometry
                geometry.setIndex(new THREE.BufferAttribute(indices, 1));

                geometry.setAttribute("position", positionAttribute);
                geometry.setAttribute("normal", normalAttribute);
                geometry.setAttribute("uv", uvAttribute);

                geometry.uuid = typeOptions.uuid;

                geometries.push(geometry);
            });
        } else if (TypeHelpers.isBoxGeometry(typeOptions)) {

            const geometry = new THREE.BoxGeometry(
                typeOptions.width,
                typeOptions.height,
                typeOptions.depth,
                typeOptions.widthSegments,
                typeOptions.heightSegments,
                typeOptions.depthSegments
            );
            geometry.uuid = typeOptions.uuid;
            geometries.push(geometry);
        } else if (TypeHelpers.isCircleGeometry(typeOptions)) {

            const geometry = new THREE.CircleGeometry(
                typeOptions.radius,
                typeOptions.segments,
                typeOptions.thetaStart,
                typeOptions.thetaLength
            );
            geometry.uuid = typeOptions.uuid;
            geometries.push(geometry);
        } else if (TypeHelpers.isSphereGeometry(typeOptions)) {

            const geometry = new THREE.SphereGeometry(
                typeOptions.radius,
                typeOptions.widthSegments,
                typeOptions.heightSegments,
                typeOptions.phiStart,
                typeOptions.phiLength,
                typeOptions.thetaStart,
                typeOptions.thetaLength
            );
            geometry.uuid = typeOptions.uuid;
            geometries.push(geometry);
        } else if (TypeHelpers.isLineGeometry(typeOptions)) {

            const convertedPoints = typeOptions.points.map(p => new THREE.Vector3(p.x, p.y, p.z));
            const geometry = new THREE.BufferGeometry().setFromPoints(convertedPoints);

            geometry.uuid = typeOptions.uuid;
            geometries.push(geometry);
        } else {
            throw `Unknown geometry type '${typeOptions.type}'`;
        }

        return geometries;
    }
}
