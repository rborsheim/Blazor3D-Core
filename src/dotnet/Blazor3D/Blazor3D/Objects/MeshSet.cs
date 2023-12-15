using HomagGroup.Blazor3D.Core;
using HomagGroup.Blazor3D.Materials;

namespace HomagGroup.Blazor3D.Objects
{
    public class MeshSet : Object3D
    {
        public MeshSet() : base(ObjectTypes.MeshSet)
        {

        }

        /// <summary>
        /// <para>Collection of <see cref="Blazor3D.Materials.Material"/> (or derived classes) materials, defining the object's appearance.</para>
        /// </summary>
        public List<Material> Materials { get; set; }

        /// <summary>
        /// <para>An instance of <see cref="BufferGeometry"/> (or derived classes), defining the object's structure.</para>
        /// </summary>
        public BufferGeometry Geometry { get; set; }

        public List<LineBasicMaterial> EdgesMaterial { get; set; }
    }
}
