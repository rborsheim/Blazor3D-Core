import { Texture, TextureLoader, Vector2 } from "three";
import { Texture_B3D } from "../Generated/texture";
import TypeHelpers from "../TypeHelpers";

class TextureBuilder {
    static buildTexture(options: Texture_B3D): Texture {
        let texture: Texture = null;

        if (options.textureUrl) {
            if (TypeHelpers.isTexture(options)) {
                texture = new TextureLoader().load(options.textureUrl);
                texture.uuid = options.uuid;
                texture.wrapS = options.wrapS;
                texture.wrapT = options.wrapT;
                texture.repeat = new Vector2(options.repeat.x, options.repeat.y);
                texture.offset = new Vector2(options.offset.x, options.offset.y);
                texture.center = new Vector2(options.center.x, options.center.y);
                texture.rotation = options.rotation;
            } else {
                throw 'Unknown texture type';
            }
        }
        return texture;     
    }

//} else if (TypeHelpers.isOrthographicCamera(options)) {
//    camera = new THREE.OrthographicCamera(
//        options.left * aspect,
//        options.right * aspect,
//        options.top,
//        options.bottom,
//        options.near,
//        options.far
//    );
//    //camera.zoom = options.zoom;
//} else {
//    throw `Unknown camera type '${options.type}'`;
//}

    //static buildTexture2(options: any, onLoadCallback) {
    //    if (options.type == "Texture" && options.textureUrl) {
    //        const loader = new TextureLoader();
    //        loader.load(options.textureUrl,
    //            (texture) => {
    //                texture.uuid = options.uuid;
    //                texture.wrapS = options.wrapS;
    //                texture.wrapT = options.wrapT;
    //                texture.repeat = options.repeat;
    //                texture.offset = options.offset;
    //                texture.center = options.center;
    //                texture.rotation = options.rotation;
    //                if (onLoadCallback) {
    //                    onLoadCallback(texture);
    //                }
    //            });
    //        return;
    //    }
    //    return null; // if no texture needs to be loaded, return null
    //}

    static buildTexture3(options: Texture_B3D): Promise<Texture | null> {
        return new Promise((resolve, reject) => {
            if (TypeHelpers.isTexture(options) && options.textureUrl) {
                const loader = new TextureLoader();
                loader.load(options.textureUrl,
                    (texture: Texture) => {
                        texture.uuid = options.uuid;
                        texture.wrapS = options.wrapS;
                        texture.wrapT = options.wrapT;
                        texture.repeat = new Vector2(options.repeat.x, options.repeat.y);
                        texture.offset = new Vector2(options.offset.x, options.offset.y);
                        texture.center = new Vector2(options.center.x, options.center.y);
                        texture.rotation = options.rotation;
                        resolve(texture);
                    },
                    undefined,
                    reject);
            } else {
                resolve(null);
            }
        });
    }
}

export default TextureBuilder;