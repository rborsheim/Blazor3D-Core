﻿using HomagGroup.Blazor3D.Core;
using HomagGroup.Blazor3D.Maths;

namespace HomagGroup.Blazor3D.Geometires.Lines
{
    public class LineGeometry : BufferGeometry
    {
        public LineGeometry() : base(ObjectTypes.LineGeometry)
        {

        }

        public List<Vector3> Points { get; set; } = new List<Vector3>();
    }
}
