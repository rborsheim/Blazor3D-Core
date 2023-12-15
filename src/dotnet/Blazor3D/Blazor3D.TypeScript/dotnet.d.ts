interface DotNetStatic {
    invokeMethodAsync<T>(assemblyName: string, methodName: string, ...args: any[]): Promise<T>;
}

declare var DotNet: DotNetStatic;