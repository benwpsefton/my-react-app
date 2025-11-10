export default function GetImage(folder, parameter) {
    const path = `${process.env.PUBLIC_URL}/assets/${folder}/${parameter.image}${parameter.id}.jpg`;
    console.log("Image path:", path); // testing
    return path;
}