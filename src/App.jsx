import { useState } from 'react'
import Tours from "./components/Tours";
import './App.css'


const toursData = [
  {
    id: 1,
    tourImgLink:
      "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Holidays_w_200_h_200_c_fill_g_auto_q_auto:good_f_jpg/v1433747706/Gulmarg_2.jpg",
    nameOftheTour: "Kashmir",
    tourDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci impedit quis eligendi minus rerum eaque omnis. Alias, nobis sunt officia culpa dolores quod soluta nam explicabo assumenda sit dolorum. Consequuntur voluptate nemo, natus illum est earum labore ullam nulla.",
    tourPrice: "2000",
  },
  {
    id: 2,
    tourImgLink:
      "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Holidays_w_200_h_200_c_fill_g_auto_q_auto:good_f_jpg/v1433744212/Ooty_11.jpg",
    nameOftheTour: "Chennai",
    tourDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci impedit quis eligendi minus rerum eaque omnis. Alias, nobis sunt officia culpa dolores quod soluta nam explicabo assumenda sit dolorum. Consequuntur voluptate nemo, natus illum est earum labore ullam nulla.",
      tourPrice: "5000",
  },
  {
    id: 3,
    tourImgLink:
      "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Holidays_w_200_h_200_c_fill_g_auto_q_auto:good_f_jpg/v1462944225/Havelock_Island_overview2.jpg",
    nameOftheTour: "Hyderabad",
    tourDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci impedit quis eligendi minus rerum eaque omnis. Alias, nobis sunt officia culpa dolores quod soluta nam explicabo assumenda sit dolorum. Consequuntur voluptate nemo, natus illum est earum labore ullam nulla.",
      tourPrice: "10000",
   
    },
];

function App() {
  const [ownToursData, setOwnToursData] = useState(toursData);

  function removeTour(currId) {
    const filteredToursData = ownToursData.filter((tour) => tour.id !== currId);
    // iteration1 : tour.id = 1 !== 1 ==> (false)
    // iteration2 : tour.id = 2 !== 1 ==> (true)
    // iteration3 : tour.id = 3 !== 1 ==> (true)

    // final output: filteredToursData = [{second tour data} , {third tour data}]
    setOwnToursData(filteredToursData);
  }

  return (
    <div className="newClass">
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        {ownToursData.map((tour) => {
          return <Tours tour={tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

export default App
