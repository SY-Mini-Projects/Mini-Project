import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {

  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error);
    })

    setFoodCat(response.foodCategory);
    setFoodItem(response.foodItems);
  }

  useEffect(() => {
    loadData();
  }, []); 

  return (
    <div>
      <div><Navbar /></div>
      <div><div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel" style={{objectFit:"contain !important"}}>
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
              />
              {/* <button className="btn btn-success text-light fw-bold" type="submit">
                Search
              </button> */}

            </div>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900x500/?burger"
                className="d-block w-100"
                alt="..."
                style={{ filter: "brightness(30%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x500/?pizza"
                className="d-block w-100"
                alt="..."
                style={{ filter: "brightness(30%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/600x250/?fries"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></div>
      <div className="container">
        {
          foodCat.length !== 0
          ? foodCat.map((data) => {
            return(<div className="row mb-3">
            <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
            <hr/>
            {foodItem.length !== 0
            ? foodItem.filter((item)=>(item.CategoryName === data.CategoryName) && item.name.toLowerCase().includes(search.toLowerCase())).map((filteritems) => {
              return(
                <div key={filteritems._id} className="col-12 col-md-6 col-lg-3">
                  <Card foodItem={filteritems}
                  options={filteritems.options[0]}
                  // imgSrc={filteritems.img}
                  ></Card>
                </div>
              )
            })
            :<div>Loading...</div>}
            </div>
            )
            
          })
          :<div>Loading...</div>
          
        }
       
      </div>
      <div><Footer /></div>
    </div>
  );
}