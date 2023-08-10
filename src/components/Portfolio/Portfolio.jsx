import ProjectData from '../../Pages/ProjectData.json';

export default function Project() {
  return (
    <div>{ProjectData.map((dataPizza, index) =>
      (
        <h1 href={dataPizza.imgUrl} key={index}>
          {dataPizza.title}
        </h1>
      ))}</div>
  )
}
