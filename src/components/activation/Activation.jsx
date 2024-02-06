import React, { useState } from "react";
import "./activation.css";
import { Field, Form, Formik } from "formik";

const Activation = () => {
  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [accept, setAccept] = useState("");







  const initialValues1 = {
    fullname: "",
    mobile: "",
    dob: "",
    remarks: "",
    address1: "",
    address2: "",
    pincode: "",
    photo: "",
    password: "",
    confirmpassword: "",
    accept: "",
  };
  const fulnamehandler = (e) => {
    setFullname(e.target.value.trim());
  };
  const pattern = "/s/g";

  const validationform = () => {
    const errors = {};
    if (!fullname.trim()) {
      errors.fullname = "Fullname is required";
    }
    if (!mobile.trim()) {
      errors.mobile = "Mobilenumber is required";
    }
    if (!dob.trim()) {
      errors.dob = "Dob is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    }
    if (!address1) {
      errors.address1 = "Enter address1";
    }
    if (!address2) {
        errors.address2 = "Enter address2";
      }
      if (!pincode) {
        errors.pincode = "Enter pincode";
      }
      if (!photo) {
        errors.photo = "Photo is required ";
      }
      if (!password) {
        errors.password = "Password is required ";
      }
      if (!confirmpassword) {
        errors.confirmpassword = "Confirmpassword is required ";
      }
      if (!accept) {
        errors.accept = "Required";
      }
    return errors;
  };
  return (
    <div className="centerdiv">
      <h3>Card Activation</h3>
      <Formik initialValues={{ initialValues1 }} validate={validationform}>
        {(formik) => (
          <Form>
            <label>Full Name</label>
            <Field
              type="text"
              className="input"
              placeholder="Enter your full name"
              value={fullname}
              onChange={fulnamehandler}
            />
            {!fullname ? (
              <div className="validate">{formik.errors.fullname}</div>
            ) : null}
            <label>Mobile number</label>
            <div className="carddiv">
              <Field
                type="number"
                className="input11"
                placeholder="Type mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.trim())}
              />
            </div>
            {!mobile ? (
              <div className="validate">{formik.errors.mobile}</div>
            ) : null}

            <label>Date of birth</label>
            <br></br>
            <Field
              type="date"
              className="input13"
              placeholder="Enter your dob"
              pattern=""
              value={dob}
              onChange={(e) => setDob(e.target.value.trim())}
            />
            {!dob ? <div className="validate">{formik.errors.dob}</div> : null}

            <label>Email</label>
            <br></br>
            <Field
              type="email"
              className="input14"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!email ? (
              <div className="validate">{formik.errors.email}</div>
            ) : null}
            <label>Address1</label>
            <div className="radiodiv">
              <Field
                type="text"
                className="input"
                placeholder="Address"
                name="paymentMethod"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}

              />
            </div>
            {!formik.touched.address1 && (
              <div className="validate">{formik.errors.address1}</div>
            )}
              <label>Address2</label>
            <div className="radiodiv">
              <Field
                type="text"
                className="input"
                placeholder="Address"
                name="paymentMethod"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}

              />
            </div>
            {!formik.touched.address2 && (
              <div className="validate">{formik.errors.address2}</div>
            )}
               <label>Pincode</label>
            <div className="radiodiv">
              <Field
                type="number"
                className="input"
                placeholder="Pincode"
                name="paymentMethod"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}

              />
            </div>
            {!formik.touched.pincode && (
              <div className="validate">{formik.errors.pincode}</div>
            )}
             <label>Id Proof Photo</label>
            <div className="radiodiv">
              <Field
                type="file"
                className="input"
                placeholder="Photo"
                name="paymentMethod"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}

              />
            </div>
            {!formik.touched.photo && (
              <div className="validate">{formik.errors.photo}</div>
            )}
              <label>Password</label>
            <div className="radiodiv">
              <Field
                type="password"
                className="input"
                placeholder="password"
                name="paymentMethod"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
            </div>
            {!formik.touched.password && (
              <div className="validate">{formik.errors.password}</div>
            )}
              <label>Confirm Password</label>
            <div className="radiodiv">
              <Field
                type="password"
                className="input"
                placeholder="confirm password"
                name="paymentMethod"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}

              />
            </div>
            {!formik.touched.confirmpassword && (
              <div className="validate">{formik.errors.confirmpassword}</div>
            )}
               {/* <label>Accept Terms & Condition</label>
            <div className="radiodiv">
              <Field
                type="file"
                className="input"
                placeholder="Photo"
                name="paymentMethod"
                value={accept}
                onChange={(e) => setAccept(e.target.value)}

              />
            </div>
            {!formik.touched.accept && (
              <div className="validate">{formik.errors.accept}</div>
            )} */}
            <div>
              <button className="done1" onClick={() => formik.handleSubmit}>
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Activation;
