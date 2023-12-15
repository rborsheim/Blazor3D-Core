using HomagGroup.Blazor3D.Core;
using HomagGroup.Blazor3D.Geometires;
using HomagGroup.Blazor3D.Materials;

namespace HomagGroup.Blazor3D.Objects
{
    /// <summary>
    /// <para>Class representing a sprite.</para>
    /// <para>This object inherits from <see cref="Object3D"/></para>
    /// <para>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/objects/Mesh">Mesh</a></para>
    /// </summary>
    /// <inheritdoc><see cref="Object3D"/></inheritdoc>
    public class Sprite : Object3D
    {
        public Sprite() : base(ObjectTypes.Sprite)
        {

        }

        protected Sprite(string type) : base(type)
        {

        }

        // todo: by definition a sprite can only have one material
        /// <summary>
        /// <para>An instance of <see cref="Blazor3D.Materials.Material"/> (or derived classes) materials, defining the object's appearance.</para>
        /// </summary>
        public SpriteMaterial Material { get; set; }
    }
}
