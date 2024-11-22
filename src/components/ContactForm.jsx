import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MailPlus, MapPinHouse } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs
      .sendForm(
        "service_mobhq8s",
        "template_l7b02vr",
        e.target,
        "4ZuKrakGdYJ61gtwm"
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending message:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-full  p-6 bg-white  rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Wanna Say Something...</h2>
      <p className="mb-6">
      I’m open to freelance web development work and simple projects. If you have questions or other requests, don’t hesitate to get in touch using the form!
      </p>

      <div className="flex sm:flex-col lg:flex-rowjustify-center items-center contactform">
        <div className="mt-5 w-full ">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 ">
            <div className="flex justify-center items-center gap-6 ">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full p-2 border "
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-2 border"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-2 border rounded-md"
                rows="4"></textarea>
            </div>


            <button
              type="submit"
              className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-600">
              Send Message
            </button>
          </form>
        </div>

            <div className=" mt-8 w-full ">
              <div className="flex justify-start items-center py-5">
            <MapPinHouse size={36} strokeWidth={1.5} />
                <p className="font-medium text-xl px-5">Address: </p>
                <p className="font-medium text-xl px-5">Bangalore, India</p>
                {/* <p>Bangalore, India</p> */}
              </div>
              <div className="flex justify-start items-center py-5">
              <MailPlus size={36} strokeWidth={1.5} />
                <p class="font-medium text-xl px-5">
                  Email Me:{" 📩"}
                  <a
                    href="mailto:nikhilsharmadev27@gmail.com"
                    className="text-blue-500 ">
                    Nikhlsharmadev27@gmail.com
                  </a>
                </p>
              </div>
            </div>
      </div>
    </div>
  );
};

export default ContactForm;
