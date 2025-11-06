export default function GetImage(folder, parameter) {
    return `/assets/${folder}/${parameter.image}${parameter.id}.jpg`
}