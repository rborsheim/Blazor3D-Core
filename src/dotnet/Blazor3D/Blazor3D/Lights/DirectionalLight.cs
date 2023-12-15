using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomagGroup.Blazor3D.Lights
{
    public class DirectionalLight : Light
    {
        public DirectionalLight() : base(ObjectTypes.DirectionalLight)
        {
            Intensity = 0.7f;
        }
    }
}
