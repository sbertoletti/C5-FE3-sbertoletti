import './App.css'
import React from 'react'
import Card from './Components/Card'

/* Array de ciudades que debemos utilizar en la actividad */
const cities = [
  {
    id: 1,
    country: "AR",
    city: "Buenos Aires",
    population: "2.890.151",
    color: "#D7B81D",
    img: "https://realestatemarket.com.mx/images/2023/02-febrero/27-02/buenos-aires-entre-las-ciudades-de-mayor-recuperacion-turistica.jpg"
  },
  {
    id: 2,
    country: "BRA",
    city: "Rio de Janeiro",
    population: "6.775.561",
    color: "#470F69",
    img: "https://media.staticontent.com/media/pictures/e63f71e3-03fb-4c1b-a1e6-c8b1586a7e73"
  },
  {
    id: 3,
    country: "AR",
    city: "La Plata",
    population: "643.133",
    color: "#C37F19",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/6f/91/ed/vista-aerea-de-la-ciudad.jpg?w=1200&h=-1&s=1"
  },
  {
    id: 4,
    country: "BRA",
    city: "Brasília",
    population: "3.094.325",
    color: "#97198B",
    img: "https://www.cepal.org/sites/default/files/styles/1920x1080/public/regionaloffice/images/brasilia.jpg?itok=VuRo2Qua"
  },
  {
    id: 5,
    country: "AR",
    city: "Córdoba",
    population: "1.317.298",
    color: "#ED3D48",
    img: "https://www.lavoz.com.ar/resizer/5QsjoMx0MSXnJYAmcrjfcUCYVcI=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MYVHKZRCYNGLNCPPT76W7NJ5RY.jfif"
  },
  {
    id: 6,
    country: "BRA",
    city: "Fortaleza",
    population: "2.703.391",
    color: "#2E15D0",
    img: "https://content.r9cdn.net/rimg/dimg/10/38/1bb87c8d-city-15239-177d860f3c5.jpg?width=1366&height=768&xhint=1004&yhint=1063&crop=true"
  },
  {
    id: 7,
    country: "AR",
    city: "Rosario",
    population: "1.193.605",
    color: "#DA0C19",
    img: "https://i.ytimg.com/vi/Z5aOLVHZCHE/maxresdefault.jpg"
  },
  {
    id: 8,
    country: "AR",
    city: "Mendoza",
    population: "1.200.000",
    color: "#B94310",
    img: "https://media.viajando.travel/p/e44e573416a639e1fdb99b2de22301f7/adjuntos/255/imagenes/000/328/0000328266/1200x675/smart/mendoza-capitaljpg.jpg"
  },
  {
    id: 9,
    country: "BRA",
    city: "São Paulo",
    population: "12.396.372",
    color: "#A440E2",
    img: "https://www.visitbrasil.com/wp-content/uploads/2021/08/Sao-Paulo-SP-Visit-Brasil-7-1-1024x683.jpg"
  },
  {
    id: 10,
    country: "BRA",
    city: "Salvador",
    population: "2.900.319",
    color: "#6550ED",
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg"
  },
];

function App() {

  return (
    <div className="App">
      <React.Fragment>
      {cities.map((city) => (
        <Card info={city}/>
      ))}
      </React.Fragment>
    </div>
  )
}

export default App