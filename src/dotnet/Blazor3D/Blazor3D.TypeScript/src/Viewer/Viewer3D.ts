import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import SceneBuilder from "../Builders/SceneBuilder";
import CameraBuilder from "../Builders/CameraBuilder";
import Transforms from "../Utils/Transforms";
import { ViewHelper } from "three/examples/jsm/helpers/ViewHelper";
import MeshBuilder from "../Builders/MeshBuilder";
import { Blazor3DConfiguration_B3D } from "../Generated/blazor3d-configuration";
import { PerspectiveCamera, OrthographicCamera, Scene, WebGLRenderer, Sprite, Vector2, Raycaster, Color, MathUtils, SpriteMaterial, Camera, Mesh, InterleavedBufferAttribute, BufferAttribute, InterleavedBuffer } from "three";
import { Object3D_B3D } from "../Generated/object3d";
import { Vector3_B3D } from "../Generated/vector3";
import { SceneOptions_B3D } from "../Generated/scene-options";
import { OrbitControlOptions_B3D } from "../Generated/orbit-control-options";
import TypeHelpers from "../TypeHelpers";
import SpriteBuilder from "../Builders/SpriteBuilder";
import { ObjectListManager } from "./ObjectListManager";
import { CustomGeometry_B3D } from "../Generated/custom-geometry";

declare var DotNet: any;

class Viewer3D {
    thetaX = 0;
    thetaY = 0;
    thetaZ = 0;
    mouse = new Vector2();
    raycaster = new Raycaster();

    INTERSECTED: any = null;
    INTERSECTEDOrtho: any = null;

    renderer: WebGLRenderer;
    configuration: Blazor3DConfiguration_B3D;
    vertexBuffers: Map<Guid, Float32Array>;
    indexBuffers: Map<Guid, Int32Array>;
    interleavedBuffers: Map<Guid, InterleavedBuffer>;
    container: HTMLElement;
    scene: Scene;
    sceneOrtho: Scene;
    controls: OrbitControls;
    camera: PerspectiveCamera;
    cameraOrtho: OrthographicCamera;
    viewHelper: ViewHelper;
    areSpritesLoaded: boolean;
    spriteManager: ObjectListManager<Sprite>;

    constructor(configuration: Blazor3DConfiguration_B3D, vertexBuffers: Map<Guid, Float32Array>, indexBuffers: Map<Guid, Int32Array>, container: HTMLElement) {
        this.configuration = configuration;
        this.vertexBuffers = vertexBuffers;
        this.indexBuffers = indexBuffers;
        this.container = container;

        this.spriteManager = new ObjectListManager<Sprite>();
        this.interleavedBuffers = new Map<Guid, InterleavedBuffer>();

        this.scene = new Scene();
        this.sceneOrtho = new Scene();
        this.setScene();

        this.renderer = new WebGLRenderer(
            {
                antialias: this.configuration.viewerOptions.webGLRendererSettings.antialias
            }
        );

        if (this.configuration.viewerOptions.showViewHelper) {
            this.renderer.autoClear = false;
        };

        this.renderer.domElement.style.width = "100%";
        this.renderer.domElement.style.height = "100%";

        this.renderer.domElement.onclick = (event) => {
            if (this.cameraOrtho) {
                this.INTERSECTEDOrtho = this.selectObject(event, this.sceneOrtho, this.cameraOrtho, this.INTERSECTEDOrtho);
            }

            if (this.configuration.viewerOptions.canSelect == true) {
                console.log("hello world! - 0");
                this.INTERSECTED = this.selectObject(event, this.scene, this.camera, this.INTERSECTED);
            }

            if (
                this.configuration.cameraOptions.animateRotationSettings
                    .stopAnimationOnOrbitControlMove ==
                    true
            ) {
                this.configuration.cameraOptions.animateRotationSettings.animateRotation = false;
            }
        };

        this.container.appendChild(this.renderer.domElement);

        this.setCameras();
        this.setorbitControlOptions();
        this.onResize();

        const animate = () => {
            this.controls.update();
            requestAnimationFrame(animate);
            this.render();
        };
        animate();
    }

    render() {
        const cameraAnimationSettigns = this.configuration.cameraOptions.animateRotationSettings;
        if (
            cameraAnimationSettigns &&
                cameraAnimationSettigns.animateRotation == true
        ) {
            const radius = cameraAnimationSettigns.radius;

            this.thetaX = this.thetaX + cameraAnimationSettigns.thetaX;
            this.thetaY = this.thetaY + cameraAnimationSettigns.thetaY;
            this.thetaZ = this.thetaZ + cameraAnimationSettigns.thetaZ;

            this.camera.position.x =
                cameraAnimationSettigns.thetaX == 0
                ? this.camera.position.x
                : radius * Math.sin(MathUtils.degToRad(this.thetaX));
            this.camera.position.y =
                cameraAnimationSettigns.thetaY == 0
                ? this.camera.position.y
                : radius * Math.sin(MathUtils.degToRad(this.thetaY));
            this.camera.position.z =
                cameraAnimationSettigns.thetaZ == 0
                ? this.camera.position.z
                : radius * Math.cos(MathUtils.degToRad(this.thetaZ));
            const { x, y, z } = this.configuration.cameraOptions.lookAt;
            this.camera.lookAt(x, y, z);
            this.camera.updateMatrixWorld();
        }

        if (this.configuration.viewerOptions.showViewHelper && this.viewHelper) {
            this.renderer.clear();
        }

        this.renderer.render(this.scene, this.camera);
        this.renderer.clearDepth();
        this.renderer.render(this.sceneOrtho, this.cameraOrtho);

        if (this.configuration.viewerOptions.showViewHelper && this.viewHelper) {
            this.viewHelper.render(this.renderer);
        }

        this.updateHUDSprites();
    }

    onResize() {
        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.cameraOrtho.left = - width / 2;
        this.cameraOrtho.right = width / 2;
        this.cameraOrtho.top = height / 2;
        this.cameraOrtho.bottom = - height / 2;
        this.cameraOrtho.updateProjectionMatrix();

        this.renderer.setSize(
            this.container.offsetWidth,
            this.container.offsetHeight,
            false // required
        );
    }

    // from hud example
    // function onWindowResize() {

    //   const width = window.innerWidth;
    //   const height = window.innerHeight;

    //   camera.aspect = width / height;
    //   camera.updateProjectionMatrix();

    //   cameraOrtho.left = - width / 2;
    //   cameraOrtho.right = width / 2;
    //   cameraOrtho.top = height / 2;
    //   cameraOrtho.bottom = - height / 2;
    //   cameraOrtho.updateProjectionMatrix();

    //   updateHUDSprites();

    //   renderer.setSize( window.innerWidth, window.innerHeight );

    // }

    setScene() {
        this.scene.background = new Color(this.configuration.scene.backGroundColor);
        this.scene.uuid = this.configuration.scene.uuid;

        this.configuration.scene.children.forEach((childOptions: Object3D_B3D) => {
            if (TypeHelpers.isMeshSet(childOptions)) {
                // TODO: not sure this is right - it may have children, so probably it needs to build child

                const meshes = MeshBuilder.BuildMeshSet(childOptions, this.vertexBuffers, this.indexBuffers);

                // assumes: all meshes will use the same interleave and at least one mesh will be created
                const geometry = meshes[0].geometry;
                const positionAttribute = geometry.getAttribute('position') as InterleavedBufferAttribute;
                const interleavedBuffer = positionAttribute.data;

                let typeOptions = childOptions.geometry as CustomGeometry_B3D;

                this.interleavedBuffers.set(typeOptions.vertexBuffer, interleavedBuffer);

                for (const mesh of meshes) {
                    this.scene.add(mesh);
                }
            } else {
                var child = SceneBuilder.BuildChild(childOptions, this.scene, this.vertexBuffers, this.indexBuffers);
                if (child) {
                    this.scene.add(child);
                }
            }
        });

        // just sprites in sceneOrtho
        this.configuration.sceneOrtho.children.forEach((childOptions: Object3D_B3D) => {
            if (TypeHelpers.isSprite(childOptions)) {

                var sprite = SpriteBuilder.BuildSprite(childOptions);
                console.log(childOptions.type + ": " + childOptions.name + " | " + childOptions.material.type + ": " + childOptions.material.name);

                switch (childOptions.name) {
                    case "Legend":
                        sprite.center.set(0.0, 1.0);
                        this.sceneOrtho.add(sprite);
                        break;
                    case "UpButton":
                        sprite.center.set(0.0, 0.0);
                        this.sceneOrtho.add(sprite);
                        break;
                    case "DownButton":
                        sprite.center.set(0.0, 0.0);
                        this.sceneOrtho.add(sprite);
                        break;
                    default:
                        throw "Unknown Sprite";
                }
                this.spriteManager.addItem(childOptions.name, sprite);
            }
        });
    }

    updateMeshesForVertexBuffer(guid: Guid) {

        const vertexBuffer = this.vertexBuffers.get(guid);
        const interleavedBuffer = this.interleavedBuffers.get(guid);

        if (vertexBuffer.length === interleavedBuffer.array.length) {
            // ideally we would just set ALL the vertices, but for some reason the UVs are off if we do that - could be investigated
            // I haven't been able to determine WHY even after a lot of thought
            // note: this may be EXTREMELY slow to do in JavaScript
            for (let i = 0; i < interleavedBuffer.array.length; i += 8) {
                interleavedBuffer.array[i] = vertexBuffer[i];
                interleavedBuffer.array[i + 1] = vertexBuffer[i + 1];
                interleavedBuffer.array[i + 2] = vertexBuffer[i + 2];
            }

            interleavedBuffer.needsUpdate = true;
        } else {
            console.error("New buffer data does not match the size of the existing buffer.");
        }
    }

    updateScene(sceneOptions: SceneOptions_B3D) {
        this.clearScene();
        this.configuration.scene = sceneOptions;
        this.setScene();
    }

    setCameras() {
        this.camera = CameraBuilder.BuildCamera(
            this.configuration.cameraOptions,
            this.container.offsetWidth / this.container.offsetHeight
        ) as PerspectiveCamera;

        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;

        // todo: investigate whether we should use the BuildCamera equivalent - at this moment, I think not - and maybe the BuildCamera should be modified to BuildCamera
        this.cameraOrtho = new OrthographicCamera(- width / 2, width / 2, height / 2, - height / 2, 1, 10);
        this.cameraOrtho.position.z = 10;

        if (this.configuration.viewerOptions.showViewHelper && this.camera && this.renderer && this.renderer.domElement) {
            this.viewHelper = new ViewHelper(this.camera, this.renderer.domElement);
        }

        // todo: add camera children (i.e. lights)
    }

    //updateCamera(newCamera) {
    //    this.configuration.camera = newCamera;
    //    this.setCameras();
    //    this.setorbitControlOptions();
    //}

    showCurrentCameraInfo() {
        console.log("Current camera info:", this.camera);
        console.log("Orbit controls info:", this.controls);
    }

    setorbitControlOptions() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.screenSpacePanning = true;
        this.controls.minDistance = this.configuration.orbitControlOptions.minDistance;
        this.controls.maxDistance = this.configuration.orbitControlOptions.maxDistance;
        this.controls.enablePan = this.configuration.orbitControlOptions.enablePan;
        this.controls.enableDamping = this.configuration.orbitControlOptions.enableDamping;
        this.controls.dampingFactor = this.configuration.orbitControlOptions.dampingFactor;
        this.controls.minPolarAngle = this.configuration.orbitControlOptions.minPolarAngle;
        this.controls.maxPolarAngle = this.configuration.orbitControlOptions.maxPolarAngle;
        const { x, y, z } = this.configuration.orbitControlOptions.target;
        this.controls.target.set(x, y, z);
        this.controls.update();
    }

    //createHUDSprites(material: SpriteMaterial) {

        //alert(material == null);
        //alert(material.map == null);
        //alert(material.map.texture == null);
        //alert("helloworld2");

        //const width = material.map.image.width;
        //const height = material.map.image.height;
        //alert("helloworld1");

        //this.spriteTL = new Sprite(material);
        //this.spriteTL.center.set(0.0, 1.0);
        ////this.spriteTL.scale.set( width, height, 1 );
        //this.sceneOrtho.add(this.spriteTL);

        //this.spriteTR = new Sprite(material);
        //this.spriteTR.center.set(1.0, 1.0);
        ////this.spriteTR.scale.set( width, height, 1 );
        //this.sceneOrtho.add(this.spriteTR);

        //this.spriteBL = new Sprite(material);
        //this.spriteBL.center.set(0.0, 0.0);
        ////this.spriteBL.scale.set( width, height, 1 );
        //this.sceneOrtho.add(this.spriteBL);

        //this.spriteBR = new Sprite(material);
        //this.spriteBR.center.set(1.0, 0.0);
        ////this.spriteBR.scale.set( width, height, 1 );
        //this.sceneOrtho.add(this.spriteBR);

        //this.spriteC = new Sprite(material);
        //this.spriteC.center.set(0.5, 0.5);
        ////this.spriteC.scale.set( width, height, 1 );
        //this.sceneOrtho.add(this.spriteC);

    //    this.updateHUDSprites();

    //}

    //    this.spriteTR = new Sprite(this.hackForNow);
    //    this.spriteTR.center.set(1.0, 1.0);
    //    this.spriteTR.scale.set( width, height, 1 );
    //    this.sceneOrtho.add(this.spriteTR);

    //    this.spriteBL = new Sprite(this.hackForNow);
    //    this.spriteBL.center.set(0.0, 0.0);
    //    this.spriteBL.scale.set( width, height, 1 );
    //    this.sceneOrtho.add(this.spriteBL);

    //    this.spriteBR = new Sprite(this.hackForNow);
    //    this.spriteBR.center.set(1.0, 0.0);
    //    this.spriteBR.scale.set( width, height, 1 );
    //    this.sceneOrtho.add(this.spriteBR);

    //    this.spriteC = new Sprite(this.hackForNow);
    //    this.spriteC.center.set(0.5, 0.5);
    //    this.spriteC.scale.set( width, height, 1 );
    //    this.sceneOrtho.add(this.spriteC);

    //    this.spriteTR.position.set(width, height, 1); // top right
    //    this.spriteBL.position.set(- width, - height, 1); // bottom left
    //    this.spriteBR.position.set(width, - height, 1); // bottom right
    //    this.spriteC.position.set(0, 0, 1); // center

    updateHUDSprites() {
        if (!this.areSpritesLoaded) {

            this.areSpritesLoaded = this.AreSpritesLoaded();

            if (this.areSpritesLoaded) {

                for (let [key, sprites] of this.spriteManager) {
                    sprites.forEach(sprite => {
                        sprite.scale.set(sprite.material.map.image.width, sprite.material.map.image.height, 1)
                    });
                }
            }
        }

        if (this.areSpritesLoaded) {

            const width = this.container.offsetWidth;
            const height = this.container.offsetHeight;

            var topLeftPosition = 0
            for (let [key, sprites] of this.spriteManager) {
                sprites.forEach(sprite => {
                    switch (key) {
                        case "Legend":
                            sprite.scale.set(sprite.material.map.image.width, sprite.material.map.image.height, 1)
                            sprite.position.set(- width / 2 + topLeftPosition, height / 2, 1)
                            topLeftPosition += sprite.material.map.image.width;
                            break;
                        case "DownButton":
                            sprite.scale.set(sprite.material.map.image.width / 4, sprite.material.map.image.height / 4, 1)
                            sprite.position.set(-width / 2, -height / 2, 1);
                            break;
                        case "UpButton":
                            sprite.scale.set(sprite.material.map.image.width / 4, sprite.material.map.image.height / 4, 1)
                            let downButtonSprites = this.spriteManager.getItems("DownButton");
                            sprite.position.set(-width / 2, -height / 2 + downButtonSprites[0].material.map.image.height / 4, 1);
                            break;
                        default:
                            throw "Unknown Sprite";
                    }
                });
            }
        }
    }

    private AreSpritesLoaded() : boolean {
        let areSpritesLoaded = true;
        for (let [key, sprites] of this.spriteManager) {
            sprites.forEach(sprite => {
                if (!sprite.material.map.image || !sprite.material.map.image.width) {
                    areSpritesLoaded = false;
                    return; // we are in an anonymous function, so we can't 'break'
                }
            });
            if (!areSpritesLoaded) { break; }
        }

        return areSpritesLoaded;
    }

    updateorbitControlOptions(neworbitControlOptions: OrbitControlOptions_B3D) {
        this.configuration.orbitControlOptions = neworbitControlOptions;
        this.setorbitControlOptions();
    }

    import3DModel(settings: string) {
        //return Loaders.import3DModel(
        //  this.scene,
        //  settings,
        //  this.options.viewerOptions.containerId
        //);
    }

    getSceneItemByGuid(guid: Guid) {
        const item = this.scene.getObjectByProperty("uuid", guid);

        return {
            uuid: item.uuid,
            type: item.type,
            name: item.name,
            children: item.type == "Group" ? this.iterateGroup(item.children) : [],
        };
    }

    iterateGroup(children: any): any {
        const result = [];
        for (let i = 0; i < children.length; i++) {
            result.push({
                uuid: children[i].uuid,
                type: children[i].type,
                name: children[i].name,
                children:
                    children[i].type == "Group"
                        ? this.iterateGroup(children[i].children)
                        : [],
            });
        }
        return result;
    }

    selectObject(event: any, scene: Scene, camera : Camera, intersected : any) : any {

        const canvas = this.renderer.domElement;

        this.mouse.x = (event.offsetX / canvas.clientWidth) * 2 - 1;
        this.mouse.y = -(event.offsetY / canvas.clientHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, camera);
        const intersects = this.raycaster.intersectObjects(
            scene.children,
            true
        );

        console.log(`Intersect Length: ${intersects.length}`);

        if (intersects.length == 0) {
            if (intersected) {
                intersected.material.color.setHex(intersected.currentHex);
            }

            intersected = null;
            DotNet.invokeMethodAsync(
                "Blazor3D",
                "ReceiveSelectedObjectUUID",
                this.configuration.viewerOptions.containerId,
                null
            );
        } else {

            if (this.configuration.viewerOptions.canSelectHelpers) {
                intersected = this.processSelection(intersects[0].object, intersected);
            } else {
                const nonHelper = this.getFirstNonHelper(intersects);
                if (nonHelper) {
                    intersected = this.processSelection(nonHelper, intersected);
                }
            }

            if (intersected) {

                DotNet.invokeMethodAsync(
                    "Blazor3D",
                    "ReceiveSelectedObjectUUID",
                    this.configuration.viewerOptions.containerId,
                    intersected.uuid
                );
            }
        }

        return intersected;
    }

    setCameraPosition(position: Vector3_B3D, lookAt: Vector3_B3D) {
        Transforms.setPosition(this.camera, position);
        if (lookAt != null && this.controls && this.controls.target) {
            const { x, y, z } = lookAt;
            this.camera.lookAt(x, y, z);
            this.controls.target.set(x, y, z);
        }
    }

    getFirstNonHelper(intersects: any) {
        for (let i = 0; i < intersects.length; i++) {
            if (!intersects[i].object.type.includes("Helper")) {
                return intersects[i].object;
            }
        }
        return null;
    }

    removeByUuid(uuid: any) {
        const obj = this.scene.getObjectByProperty("uuid", uuid);
        if (obj) {
            this.scene.remove(obj);
            return true;
        }
        return false;
    }

    selectByUuid(uuid: any) {
        const obj = this.scene.getObjectByProperty("uuid", uuid);
        if (obj) {
            this.INTERSECTED = this.processSelection(obj, this.INTERSECTED);
            return true;
        }
        return false;
    }

    clearScene() {
        this.INTERSECTED = null;
        this.INTERSECTEDOrtho = null;
        this.areSpritesLoaded = false;
        this.spriteManager.clear();

        this.scene.clear();
        this.sceneOrtho.clear();
    }

    processSelection(objToSelect: any, intersected: any): any {
        if (intersected != objToSelect) {
            if (intersected)
                intersected.material.color.setHex(intersected.currentHex);

            intersected = objToSelect;
            intersected.currentHex = intersected.material.color.getHex();
            intersected.material.color.setHex(
                new Color(this.configuration.viewerOptions.selectedColor).getHex()
            );
        }

        return intersected;
    }
}

export default Viewer3D;