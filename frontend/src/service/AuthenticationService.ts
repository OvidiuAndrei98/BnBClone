export const authenticate = async (path:string):Promise<string> => {
    const token = await fetch(`http://localhost:8080${path}`)
    return token.json();
}