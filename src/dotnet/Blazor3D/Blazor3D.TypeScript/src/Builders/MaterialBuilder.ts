import * as THREE from "three";
import TextureBuilder from "./TextureBuilder";
import { Material } from "three";
import { Material_B3D } from "../Generated/material";
import TypeHelpers from "../TypeHelpers";

class MaterialBuilder {
    static buildMaterials(materials_B3D: Material_B3D[]) {
        const materials: Material[] = []; // Array to hold the created materials

        for (const material_B3D of materials_B3D) {

            if (TypeHelpers.isMeshStandardMaterial(material_B3D)) {

                const map = TextureBuilder.buildTexture(material_B3D.map);

                const material = new THREE.MeshStandardMaterial({
                    color: material_B3D.color,
                    transparent: material_B3D.transparent,
                    opacity: material_B3D.opacity,
                    flatShading: material_B3D.flatShading,
                    metalness: material_B3D.metalness,
                    roughness: material_B3D.roughness,
                    wireframe: material_B3D.wireframe,
                    map: map
                });

                material.uuid = material_B3D.uuid;

                materials.push(material);
            } else if (TypeHelpers.isMeshBasicMaterial(material_B3D)) {

                const map = TextureBuilder.buildTexture(material_B3D.map);
                const lightMap = TextureBuilder.buildTexture(material_B3D.lightMap);

                const material = new THREE.MeshBasicMaterial({
                    color: material_B3D.color,
                    transparent: material_B3D.transparent,
                    opacity: material_B3D.opacity,
                    map: map,
                    lightMap: lightMap,
                    lightMapIntensity: material_B3D.lightMapIntensity
                });

                material.uuid = material_B3D.uuid;
                materials.push(material);
            } else if (TypeHelpers.isLineBasicMaterial(material_B3D)) {

                const material = new THREE.LineBasicMaterial({
                    color: material_B3D.color,
                    transparent: material_B3D.transparent,
                    opacity: material_B3D.opacity,
                    linecap: material_B3D.lineCap,
                    linejoin: material_B3D.lineJoin,
                    linewidth: material_B3D.lineWidth
                });
                material.uuid = material_B3D.uuid;
                materials.push(material);
            } else if (TypeHelpers.isSpriteMaterial(material_B3D)) {

                const texture = TextureBuilder.buildTexture(material_B3D.map);

                const material = new THREE.SpriteMaterial({
                    map: texture,
                    transparent: material_B3D.transparent,
                    color: material_B3D.color,
                    opacity: material_B3D.opacity,
                });

                material.uuid = material_B3D.uuid;

                materials.push(material);

                //var foo = TextureBuilder.buildTexture(material_B3D.map);
                //if (foo) {
                //    alert("texture");
                //    if (foo.image) {
                //        alert("image");
                //        alert(foo.image.height);
                //    }
                //}

                //TextureBuilder.buildTexture3(material_B3D.map).then(texture => {
                //    if (texture) {
                //        //alert("hello3");
                //    }
                //    if (texture && texture.image) {
                //        //alert("hello3+");
                //        //alert(texture.image.height);
                //    }
                //}).catch(error => {
                //    console.error("Error loading texture:", error);
                //});
            } else {
                throw `Unknown material type '${material_B3D.type}'`;
            }

        }

        return materials; // Return the array of materials
    }
}

export default MaterialBuilder;