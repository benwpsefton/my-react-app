export default function GetImage(folder, parameter) {
    return `/my-react-app/assets/${folder}/${parameter.image}${parameter.id}.jpg`;
}