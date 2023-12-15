using HomagGroup.Blazor3D.Scenes;
using HomagGroup.Blazor3D.Settings;

namespace HomagGroup.Blazor3D.Configuration;

public class Blazor3DConfiguration
{
    public Blazor3DConfiguration(SceneOptions scene, SceneOptions sceneOrtho, ViewerOptions viewerOptions, CameraOptions cameraOptions, OrbitControlOptions orbitControlOptions)
    {
        Scene = scene;
        SceneOrtho = sceneOrtho;
        ViewerOptions = viewerOptions;
        CameraOptions = cameraOptions;
        OrbitControlOptions = orbitControlOptions;
    }

    public SceneOptions Scene { get; set; }
    public SceneOptions SceneOrtho { get; set; }
    public ViewerOptions ViewerOptions { get; set; }
    public CameraOptions CameraOptions { get; set; }
    public OrbitControlOptions OrbitControlOptions { get; set; }
}
