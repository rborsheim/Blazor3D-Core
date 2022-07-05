import LightBuilder from "./LightBuilder";
import MeshBuilder from "./MeshBuilder";

class SceneBuilder {

  static BuildChild(options) {
    if (options.type == "Mesh") {
      return MeshBuilder.BuildMesh(options);
    }

    if (options.type == "AmbientLight") {
      return LightBuilder.BuildAmbientLight(options);
    }

    if (options.type == "PointLight") {
      return LightBuilder.BuildPointLight(options);
    }
  }
}

export default SceneBuilder;