import React, { useState } from "react";
import "./sales.css";
import { Field, Form, Formik } from "formik";

const Sales = () => {
  const [mobile, setMobile] = useState("");
  const [card, setCard] = useState("");
  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const initialValues1 = {
    mobile: "",
    card: "",
    name: "",
    remarks: "",
    paymentMethod: "",
  };
  const mobilehandler = (e) => {
    setMobile(e.target.value.trim());
  };
  const pattern="/\s/g"

  const validationform = () => {
    const errors = {};
    if (!mobile.trim()) {
      errors.mobile = "Mobilenumber is required";
    }
    if (!card.trim()) {
      errors.card = "Cardnumber is required";
    }
    if (!name.trim()  ) {
      errors.name = "Name is required";
    }
    if (!paymentMethod) {
      errors.paymentMethod = "please select paymentmethod";
    }
    return errors;
  };
  return (
    <div className="centerdiv">
      <h3>Card sales</h3>
      <Formik initialValues={{ initialValues1 }} validate={validationform}>
        {(formik) => (
          <Form>
            <label>Mobile number</label>
            <Field
              type="number"
              className="input"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={mobilehandler}
            />
            {!mobile ? (
              <div className="validate">{formik.errors.mobile}</div>
            ) : null}
            <label>Card number</label>
            <div className="carddiv">
              <Field
                type="number"
                className="input11"
                placeholder="Type card number"
                value={card}
                onChange={(e) => setCard(e.target.value.trim())}
              />
              <input type="number" className="input12" />
            </div>
            {!card ? (
              <div className="validate">{formik.errors.card}</div>
            ) : null}

            <label>Customer name</label>
            <br></br>
            <Field
              type="text"
              className="input13"
              placeholder="Enter your name"
              pattern="[A-Za-z0-9]+"
              value={name}
              onChange={(e) => setName(e.target.value.trim())}
            />
            {!name ? (
              <div className="validate">{formik.errors.name}</div>
            ) : null}

            <label>Remarks</label>
            <br></br>
            <Field
              type="text"
              className="input14"
              placeholder="Enter remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
            <label>Payment method</label>
            <div className="radiodiv1">
              <Field type="radio" name="paymentMethod" value="cash" />
              Cash&nbsp;&nbsp;&nbsp;
              <Field type="radio" name="paymentMethod" value="upi" />
              UPI
            </div>
            {!formik.touched.paymentMethod && (
              <div className="validate12">{formik.errors.paymentMethod}</div>
            )}
            <div>
              <button className="cancel">Cancel</button>
              <button className="done" onClick={() => formik.handleSubmit}>
                Done
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Sales;
