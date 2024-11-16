import React, { useState } from "react";

const Form = () => {


  const [formValues, setFormValues] = useState({
    name: "",
    organisation: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [alertVisible, setAlertVisible] = useState(false); // State to manage alert visibility

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required.";
        break;
      case "organisation":
        if (!value.trim()) error = "Organization Name is required.";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email ID is required.";
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)
        ) {
          error = "Invalid email format.";
        }
        break;
      case "contact":
        if (!value.trim()) {
          error = "Contact Number is required.";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Contact Number must be 10 digits.";
        }
        break;
      case "message":
        if (!value.trim()) error = "Message cannot be empty.";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the form value
    setFormValues({ ...formValues, [name]: value });

    // Validate the field on change
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for any remaining errors
    let hasErrors = false;
    Object.keys(formValues).forEach((key) => {
      validateField(key, formValues[key]);
      if (!formValues[key].trim()) hasErrors = true;
    });

    if (!hasErrors) {
      // Show the alert for 5 seconds
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 5000);

      // Clear the form
      setFormValues({
        name: "",
        organisation: "",
        email: "",
        contact: "",
        message: "",
      });
    }
  };



  return (
    <div className=" m-auto shadow-custom mt-[120px] rounded-[20px] pt-[70px] pb-[70px] pl-[62.5px] pr-[62.5px] lg:min-h-[441px] lg:min-w-[1170px] w-auto h-auto">
      <div className="flex gap-10 lg:gap-0 justify-between h-full xl:flex-row flex-col">

        <div className="flex flex-col text-[#505050] font-montserrat text-[18px] gap-2">
          <span className="text-[35px] font-montserrat font-bold text-[#505050]">
            Got any questions?
          </span>
          <span>Let’s discuss it over a cup of coffee.</span>
        </div>

        <div className="">
        {alertVisible && (
          <div className="bg-green-100 text-green-800 px-4 py-3 rounded">
            Form submitted successfully!
          </div>
        )}
          <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-3xl  space-y-4">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder={errors.name ? errors.name  : "Name"} 
                className={`flex-1  border-b w-[300px] border-gray-300 focus:border-black outline-none text-lg placeholder-gray-400 py-2 
                  ${errors.name ? `border-red-500 border ` : ""}`}
              />
              {/* {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )} */}
              <input
                type="text"
                name="organisation"
                value={formValues.organisation}
                onChange={handleChange}
                placeholder={errors.organisation ? errors.organisation  : "Organization Name"} 
                className={`flex-1 border-b w-[300px] border-gray-300 focus:border-black outline-none
                   text-lg placeholder-gray-400 py-2 mt-4 md:mt-0 
                   ${errors.organisation ? `border-red-500 border ` : ""}`}

              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder={errors.email ? errors.email  : "Email ID"}
                className={`flex-1 border-b w-[300px] border-gray-300 focus:border-black outline-none 
                text-lg placeholder-gray-400 py-2 ${errors.email ? `border-red-500 border ` : ""}`}
              />
              <input
                type="tel"
                name="contact"
                value={formValues.contact}
                onChange={handleChange}
                placeholder={errors.contact ? errors.contact  : "Contact Number"} 
                className={`flex-1 border-b w-[300px] border-gray-300 focus:border-black outline-none 
                  text-lg placeholder-gray-400 py-2 mt-4 md:mt-0 ${errors.contact ? `border-red-500 border ` : ""}`}
              />
            </div>
            

            <div className="flex gap-5 xl:flex-row flex-col lg:items-end md:flex-row md:space-x-4">

            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder={errors.message ? errors.message  : "Message"}  
              className= {`border-b xl:w-[300px] lg:min-w-[150px] border-gray-300 focus:border-black 
                outline-none text-lg placeholder-gray-400 lg:py-2 w-full  ${errors.message ? `border-red-500 border ` : ""}`}
              rows="4"
            />

            <button
                type="submit"
                className=" justify-center bg-[#00ADEE] hover:bg-sky-500 w-[143px] h-[50px] rounded-[50px] text-white text-lg font-semibold  px-6 flex items-center gap-2"
              >
                Submit <span>&rarr;</span>
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
