import MaterialBuilder from "./MaterialBuilder";
import { SpriteMaterial } from "three";
import { Sprite } from "three";
import { Sprite_B3D } from "../Generated/sprite";

class SpriteBuilder {
    static BuildSprite(options: Sprite_B3D): Sprite {

        console.log("build sprite");

        const material = MaterialBuilder.buildMaterials([options.material])[0] as SpriteMaterial;

        const sprite = new Sprite(material);
        sprite.uuid = options.uuid;

        // Transforms.setPosition(sprite, options.position);
        // Transforms.setRotation(sprite, options.rotation);
        // Transforms.setScale(sprite, options.scale);

        return sprite;
    }
}

export default SpriteBuilder;