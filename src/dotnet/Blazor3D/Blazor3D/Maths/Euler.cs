﻿namespace Blazor3D.Maths
{
    /// <summary>
    /// <p>Representing Euler Angles.
    /// Euler angles describe a rotational transformation by rotating an object on its various axes in specified amounts per axis, and a specified axis order.
    /// Iterating through a Euler instance will yield its components (x, y, z, order) in the corresponding order.</p>
    /// <p>Wrapper for three.js <a target="_blank" href="https://threejs.org/docs/index.html#api/en/math/Euler">Euler</a></p>
    /// </summary>
    public class Euler
    {
        /// <summary>
        /// The float angle of the X axis in radians. Default is 0. Optional.
        /// </summary>
        public float X { get; set; }
        /// <summary>
        /// The float angle of the Y axis in radians. Default is 0. Optional.
        /// </summary>
        public float Y { get; set; }
        /// <summary>
        /// The float angle of the Z axis in radians. Default is 0. Optional.
        /// </summary>
        public float Z { get; set; }
        /// <summary>
        /// String representing the order that the rotations are applied. Default is 'XYZ'. Must be upper case.
        /// </summary>
        public string Order { get; set; } = "XYZ";
    }
}
