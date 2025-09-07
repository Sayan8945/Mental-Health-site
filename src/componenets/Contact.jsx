import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [message, setMessage] = useState("");
  const [showModel, setShowModel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const service_id = 'service_3vt23el';
    const template_id = 'template_k9xsgld';
    const user_id = "Iib2SGv8Ws7nKhjeq";
    let template_params = {
      form_email: email,
      form_phone: phone,
      form_adress: adress,
      form_name: name,
      to_name: "Sohan Ghosh",
      message: message,
    };
    
    emailjs.send(service_id, template_id, template_params, user_id)
    .then((responce) => {
      console.log("Email sent successfully", responce);
      setEmail('');
      setMessage('');
      setAdress('');
      setName('');
      setPhone('');
    })
    .catch((err) => {
      console.log("error sending email", err);
    })

    const data = {
      name,
      email,
      phone,
      adress,
      message,
    };
  };
  return (
    <div
      id="contact"
      className="bg-heroBg felx items-center justify-center py-28 px-8"
    >
      <div className="container mx-auto ">
        <div className=",d:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 text-white">
          {/* left side */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold font-title mb-4 ">
              Make an Apointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaUserAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24 hours service</h3>
                  <p className="text-md">
                    fsdf er fewf weaf ae far frae fr ffr r
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Expert Therapist</h3>
                  <p className="text-md">
                    fsdf er fewf weaf ae far frae fr ffr r
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaPhone className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">High Quality Core</h3>
                  <p className="text-md">
                    fsdf er fewf weaf ae far frae fr ffr r
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaGlobe className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Trusted Clinic</h3>
                  <p className="text-md">
                    fsdf er fewf weaf ae far frae fr ffr r
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="space-y-8 p-8 bg-white shadow-xl text-heroBg rounded-md">
            <h3 className="text-2xl font-bold mb-4 text-heroBg">
              Book an Appointment
            </h3>
            <form  onSubmit={handleSubmit} className="space-y-8">
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email Id"
                  value={email}
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  type="number"
                  minLength={10}
                  placeholder="Contact Number"
                  value={phone}
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Adress"
                  value={adress}
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                  required
                  onChange={(e) => setAdress(e.target.value)}
                />
              </div>
              <textarea
                rows={5}
                placeholder="Write Your Massage..."
                value={message}
                className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                required
                  onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-primary text-white hover:bg-primary/80 rounded-lg"
              >
                Send Massage
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
