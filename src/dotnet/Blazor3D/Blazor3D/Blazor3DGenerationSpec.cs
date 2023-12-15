using HomagGroup.Blazor3D.Configuration;
using HomagGroup.Blazor3D.Geometires;
using HomagGroup.Blazor3D.Geometires.Lines;
using HomagGroup.Blazor3D.Geometires.Text;
using HomagGroup.Blazor3D.Lights;
using HomagGroup.Blazor3D.Materials;
using HomagGroup.Blazor3D.Objects;
using TypeGen.Core.SpecGeneration;

namespace HomagGroup.Blazor3D.Viewers;

public class Blazor3DGenerationSpec : GenerationSpec
{
    public Blazor3DGenerationSpec()
    {
        AddClass<Blazor3DConfiguration>("../Blazor3D.TypeScript/src/Generated");
        AddClass<PerspectiveCameraOptions>("../Blazor3D.TypeScript/src/Generated");
        AddClass<OrthographicCameraOptions>("../Blazor3D.TypeScript/src/Generated");

        AddClass<ObjectTypes>("../Blazor3D.TypeScript/src/Generated");

        AddClass<Group>("../Blazor3D.TypeScript/src/Generated");
        AddClass<Line>("../Blazor3D.TypeScript/src/Generated");
        AddClass<Mesh>("../Blazor3D.TypeScript/src/Generated");
        AddClass<MeshSet>("../Blazor3D.TypeScript/src/Generated");
        AddClass<Sprite>("../Blazor3D.TypeScript/src/Generated");
        AddClass<Text>("../Blazor3D.TypeScript/src/Generated");

        AddClass<LineGeometry>("../Blazor3D.TypeScript/src/Generated");
        AddClass<TextExtrudeGeometry>("../Blazor3D.TypeScript/src/Generated");
        AddClass<TextShapeGeometry>("../Blazor3D.TypeScript/src/Generated");
        AddClass<TextStrokeGeometry>("../Blazor3D.TypeScript/src/Generated");
        AddClass<BoxGeometry>("../Blazor3D.TypeScript/src/Generated");
        AddClass<CircleGeometry>("../Blazor3D.TypeScript/src/Generated");
        AddClass<CustomGeometry>("../Blazor3D.TypeScript/src/Generated");
        AddClass<SphereGeometry>("../Blazor3D.TypeScript/src/Generated");

        AddClass<Material>("../Blazor3D.TypeScript/src/Generated");
        AddClass<LineBasicMaterial>("../Blazor3D.TypeScript/src/Generated");
        AddClass<MeshStandardMaterial>("../Blazor3D.TypeScript/src/Generated");
        AddClass<MeshBasicMaterial>("../Blazor3D.TypeScript/src/Generated");
        AddClass<SpriteMaterial>("../Blazor3D.TypeScript/src/Generated");

        AddClass<Light>("../Blazor3D.TypeScript/src/Generated");
        AddClass<AmbientLight>("../Blazor3D.TypeScript/src/Generated");
        AddClass<PointLight>("../Blazor3D.TypeScript/src/Generated");
        AddClass<DirectionalLight>("../Blazor3D.TypeScript/src/Generated");
    }
}