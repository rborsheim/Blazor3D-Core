using System.Reflection;
using TypeGen.Core.Converters;

namespace HomagGroup.Blazor3D.Viewers;

public class TypeNameConverter : ITypeNameConverter
{
    public string Convert(string name, Type type)
    {
        return  name + "_B3D";
    }
}
