import React, { useRef,useEffect } from 'react'
import { useState } from 'react';
import { useCart, useDispatchCart } from './contextReducer';
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
    if (food !== []) {
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
    <div>
      <div>
        <div
          className="card mt-3 mx-auto"
          style={{ "width": "18rem", "maxHeight": "430px" }}
        >
          <img src={props.foodItem.img} className="card-img-top" alt="..."  style={{width: "100%",height:"200px", objectFit:"cover"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text">This is my card</p>
            <div className="container w-100">
              <select
                className="m-2 h-100 rounded" onChange={(e)=>setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
              
                {priceOptions.map((data)=>{
                  return(
                    <option key={data} value={data}>
                      {data}
                    </option>
                  )
                })}
              </select>

              <div className="d-inline">₹{finalPrice}/-</div>
            </div>
            <hr>
            </hr>
            <button className={"btn btn-success justify-center ms-2"} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
