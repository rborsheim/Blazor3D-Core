using HomagGroup.Blazor3D.Textures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomagGroup.Blazor3D.Materials
{
    public sealed class MeshBasicMaterial : Material
    {
        public MeshBasicMaterial() : base(ObjectTypes.MeshBasicMaterial)
        {
        }

        public Texture Map { get; set; } = new Texture();

        public Texture LightMap { get; set; } = new Texture();

        public double LightMapIntensity { get; set; } = 1;
    }
}
