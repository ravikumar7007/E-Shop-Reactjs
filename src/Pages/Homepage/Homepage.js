import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Home page/Product Cards/Cards";
import axios from "axios";

function Homepage() {
  const [products, setproducts] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios.get("/Products.json")
    .then((res) => {
      const data=res.data
      for (let i = 0; i < data.length; i++) {
        data[i].qty = 1;
        data[i].disable = false;
      }
      setAPIData(data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setproducts(filteredData);
    } else {
      setproducts(APIData);
    }
    console.log(products)
  };

  return (
    <div >
      <Header searchItems={searchItems}/>
      <div className="container my-5">
      
      {searchInput.length ? (
         <div className="row">
          {products.map((product, i) => (
            <div className="col-6 col-md-4 col-xl-3 card-group mb-3" key={i}>
              <Cards item={product} index={i} />
            </div>
          ))}
        </div>
      ) : (
        <div className="row">
          {APIData.map((product, i) => (
            <div className="col-6 col-md-4 col-xl-3 card-group mb-3" key={i}>
              <Cards item={product} index={i} />
            </div>
          ))}
        </div>
      )}
</div>
      <Footer />
    </div>
  );
}

export default Homepage;
