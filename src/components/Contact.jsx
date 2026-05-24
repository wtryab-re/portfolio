import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        toast.success("Message Sent Successfully!");
        // Clear form after successful submit
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Message unable to send. Try Again Later"));
  };

  return (
    <section id="contact" className=" bg-red-100 py-6 px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-slate-800">contact me</h2>
      </div>
      <div>
        {/* FIX: Added name="contact" below */}
        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          data-netlify="true"
        >
          {/* Essential hidden field for React bot crawlers */}
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
