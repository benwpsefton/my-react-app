export default function GetImage(folder, parameter) {
    return `${process.env.PUBLIC_URL}/assets/${folder}/${parameter.image}${parameter.id}.jpg`

    console.log(`${process.env.PUBLIC_URL}/assets/${folder}/${parameter.image}${parameter.id}.jpg`);
}