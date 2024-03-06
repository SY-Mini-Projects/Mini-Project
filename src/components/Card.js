import React from 'react'

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?w=826&t=st=1709748615~exp=1709749215~hmac=331e3c7b7ac40a202b932bd7911d0a9eb088dde26ae7fc310dba4f7f47bf2937" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is my card</p>
            <div className="container w-100">
              <select
                className="m-2 h-100 rounded"
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2 h-100 bg-success rounded"
              >
                <option value="Half">Half</option>
                <option value="Full">Full</option>
              </select>

              <div className="d-inline">Total price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
