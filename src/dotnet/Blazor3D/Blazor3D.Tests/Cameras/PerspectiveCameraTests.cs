using HomagGroup.Blazor3D.Configuration;

namespace Blazor3D.Tests.Cameras
{
    [TestClass]
    public class PerspectiveCameraTests
    {
        [TestMethod]
        public void DefaultConstuctorShouldCreateWithPredefinedValues()
        {
            var camera = new PerspectiveCameraOptions();
            Assert.AreEqual("PerspectiveCamera", camera.Type);
            Assert.AreEqual(0.1, camera.Near);
            Assert.AreEqual(1000, camera.Far);
            Assert.AreEqual(75, camera.Fov);
            Assert.IsNotNull(camera.AnimateRotationSettings);
            Assert.IsNotNull(camera.LookAt);
        }

        [TestMethod]
        public void ConstuctorWithParamsShouldCreateWithPredefinedValues()
        {
            var camera = new PerspectiveCameraOptions(fov:10, near:0.2, far:100);
            Assert.AreEqual("PerspectiveCamera", camera.Type);
            Assert.AreEqual(0.2, camera.Near);
            Assert.AreEqual(100, camera.Far);
            Assert.AreEqual(10, camera.Fov);
        }
    }
}
