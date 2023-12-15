using HomagGroup.Blazor3D.Core;
using HomagGroup.Blazor3D.Geometires;
using HomagGroup.Blazor3D.Geometires.Lines;
using HomagGroup.Blazor3D.Materials;

namespace HomagGroup.Blazor3D.Objects
{
    public class Line : Object3D
    {
        public Line() : base(ObjectTypes.Line) { }

        /// <summary>
        /// <para>Collection of <see cref="Blazor3D.Materials.Material"/> (or derived classes) materials, defining the object's appearance.</para>
        /// </summary>
        public LineBasicMaterial Material { get; set; }

        /// <summary>
        /// <para>An instance of <see cref="BufferGeometry"/> (or derived classes), defining the object's structure.</para>
        /// </summary>
        public BufferGeometry Geometry { get; set; }
    }
}
