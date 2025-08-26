import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { slideAnimation } from "../config/motion.js";
import axios from "axios"; // ✅ Import axios

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitText, setSubmitText] = useState("Send enquiry");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const currentErrors = {};

    if (!formData.fname.trim()) {
      currentErrors.fname = "First name is required";
    } else if (formData.fname.trim().length < 2) {
      currentErrors.fname = "Must be at least 2 characters";
    }

    if (!formData.lname.trim()) {
      currentErrors.lname = "Last name is required";
    } else if (formData.lname.trim().length < 2) {
      currentErrors.lname = "Must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      currentErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      currentErrors.email = "Invalid email address";
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!formData.number.trim()) {
      currentErrors.number = "Phone number is required";
    } else if (!phoneRegex.test(formData.number.trim())) {
      currentErrors.number = "Phone must be 10–15 digits";
    }

    if (!formData.message.trim()) {
      currentErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      currentErrors.message = "Message must be at least 10 characters";
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (isSubmitted) validateForm();
  };

  const sendMail = async (data) => {
    setLoading(true);
    setSubmitText("Sending...");
    try {
      const response = await axios.post("https://indiapackaging-backend.onrender.com/enquiry", data);
      if (response.status === 200) {
        setSuccess(true);
        setFormData({ fname: "", lname: "", email: "", number: "", message: "" });
        setErrors({});
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
      setSubmitText("Send enquiry");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      await sendMail(formData);
    } else {
      setSubmitText("Send enquiry");
      setLoading(false);
    }

    setTimeout(()=>{
        setSuccess(false);
    },2000)
  };

  return (
    <AnimatePresence>
      <div className="bg-[#e8e8e8] px-6 md:px-20 pb-20" id="contact-section">
        <motion.h1
          variants={slideAnimation("down")}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          className="head-text text-[3rem]! md:text-[6rem]! font-[Zain] text-center"
        >
          Find Us, Contact Us
        </motion.h1>

        <motion.p
          variants={slideAnimation("down")}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-sky-500">Phone</span> : <a href="tel:9319842965">+91 9319842965</a> |{" "}
          <span className="text-sky-500">Email</span> : <a href="mailto:nitingupta19473@gmail.com">nitingupta19473@gmail.com</a>
        </motion.p>

        <div className="flex flex-col gap-10 md:gap-20 md:flex-row justify-around items-center">
          {/* Map */}
          <motion.iframe
            variants={slideAnimation("left")}
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ once: true, amount: 0.5 }}
            className="rounded-xl w-full md:w-[600px] h-[300px] md:h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56790.34479752518!2d77.99558982112018!3d27.175270681559127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974716871240ad3%3A0x24fff7f249514790!2sINDIA%20PACKAGING!5e0!3m2!1sen!2sin!4v1756193530790!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></motion.iframe>

          {/* Form */}
          <motion.div
            variants={slideAnimation("right")}
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ once: true, amount: 0.5 }}
            className="w-full md:w-[500px]"
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <label className="flex-1">
                  <input
                    required
                    name="fname"
                    type="text"
                    className="input"
                    onChange={handleChange}
                    value={formData.fname}
                  />
                  <span>First Name</span>
                  {errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
                </label>

                <label className="flex-1">
                  <input
                    required
                    name="lname"
                    type="text"
                    className="input"
                    onChange={handleChange}
                    value={formData.lname}
                  />
                  <span>Last Name</span>
                  {errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>}
                </label>
              </div>

              <label>
                <input
                  required
                  name="email"
                  type="email"
                  className="input"
                  onChange={handleChange}
                  value={formData.email}
                />
                <span>Email</span>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </label>

              <label>
                <input
                  required
                  name="number"
                  type="tel"
                  className="input"
                  onChange={handleChange}
                  value={formData.number}
                />
                <span>Contact Number</span>
                {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
              </label>

              <label>
                <textarea
                  required
                  rows="3"
                  name="message"
                  className="input01"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
                <span>Message</span>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </label>

              <button className="fancy" type="submit" disabled={loading}>
                <span className="top-key"></span>
                <span className="text">{loading ? "Sending..." : submitText}</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </button>

              {success && <p className="text-green-600 mt-3">✅ Your enquiry has been sent!</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
