import React, { useRef,useEffect } from 'react'
import { useState } from 'react';
import { useCart, useDispatchCart } from './contextReducer';
import "./Card.css"
export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options)
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })


    // setBtnEnable(true)

  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing
  // totval += finalPrice;
  // console.log(totval)
  return (
    <div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-12">
      <div className="card-container">
        <div className="card border-0 shadow-lg" style={{ maxWidth: "800px" }}>
          <img
            src={props.foodItem.img}
            className="card-img-top rounded-top"
            alt={props.foodItem.name}
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column justify-content-between" style={{ height: "250px" }}>
            <div>
              <h5 className="card-title text-center text-white">{props.foodItem.name}</h5>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4">
                <select className="form-select mb-3 text-white" onChange={(e) => setQty(e.target.value)}>
                  {Array.from(Array(6), (e, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select mb-3 text-white" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                  {priceOptions.map((data) => (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 text-white">
                <div className="fw-bold fs-5">₹{finalPrice}/</div>
              </div>
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-success" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
