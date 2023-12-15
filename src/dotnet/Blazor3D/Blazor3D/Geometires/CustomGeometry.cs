using HomagGroup.Blazor3D.Core;

namespace HomagGroup.Blazor3D.Geometires
{
    /// <summary>
    /// <para>Class for rectangular cuboid with a given 'width', 'height', and 'depth'.</para>
    /// <para>This class inherits from <see cref="BufferGeometry"/></para>
    /// <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/geometries/Buffer2Geometry">Buffer2Geometry</a></para>
    /// </summary>
    /// <inheritdoc><see cref="BufferGeometry"/></inheritdoc>
    public sealed class CustomGeometry : BufferGeometry
    {
        public CustomGeometry() : base(ObjectTypes.CustomGeometry)
        {

        }

        /// <summary>
        /// Constructor with parameters
        /// </summary>
        /// <param name="vertexBuffer"></param>
        /// <param name="indexBuffers"></param>
        public CustomGeometry(Guid vertexBuffer, List<Guid> indexBuffers) : this()
        {
            VertexBuffer = vertexBuffer;
            IndexBuffers = indexBuffers;
        }

        public Guid VertexBuffer { get; set; }
        public List<Guid> IndexBuffers { get; set; } = new List<Guid>();
    }
}
