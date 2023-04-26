import React from "react";

const Form = () => {
  return (
    <div>
      <div className="container new_container">
        <div className="row justify-content-between">
          <div className="col-md-8 order-2 order-md-1">
            <form action="" className="form_input">
              <div className="d-md-flex">
                <div className="me-1 w-100 h-100">
                  <input type="text" placeholder="Name" name="" id="" />
                  <input type="text" placeholder="Email" name="" id="" />
                  <div className="d-flex">
                    <div>
                      <input type="radio" id="one" />
                      <label htmlFor="one">Financial Services</label>
                    </div>
                    <div>
                      <input type="radio" id="two" />
                      <label htmlFor="two">Real Estate</label>s
                    </div>
                  </div>
                </div>
                <div className="w-100 h-100 ms-1">
                  <textarea
                    className="w-100  h-100"
                    name=""
                    placeholder="Message"
                    id=""
                    cols="30"
                  ></textarea>
                  <button className="submit_button">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-md-4 order-1 order-md-2 ">
            <h2 className="contact">Contact us</h2>
            <p className="para">
              Our Predictive Analytics utilize a combination of event-driven
              data, historical data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
