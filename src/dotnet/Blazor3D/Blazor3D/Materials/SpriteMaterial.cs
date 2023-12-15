using HomagGroup.Blazor3D.Textures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomagGroup.Blazor3D.Materials
{
    public sealed class SpriteMaterial : Material
    {
        public SpriteMaterial() : base(ObjectTypes.SpriteMaterial) { }

        /// <summary>
        /// The color map. May optionally include an alpha channel, typically combined with Transparent (todo) or AlphaTest(todo). Default is null. The texture map color is modulated by the diffuse Color.
        /// </summary>
        public Texture Map { get; set; } = new Texture();
    }
}
