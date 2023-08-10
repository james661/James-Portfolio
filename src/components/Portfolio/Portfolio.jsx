import ProjectData from './ProjectData.json';
import "./Portfolio.css";

export default function Project() {
  return (
    <div>
      {ProjectData.map((dataPizza, index) => (
        <div key={index}>
          <h1>
            {dataPizza.title}
          </h1>
          <a href={dataPizza.href}>Github Link</a>
          <img src={dataPizza.imgUrl} />
        </div>
      ))}
    </div>
  );
}
