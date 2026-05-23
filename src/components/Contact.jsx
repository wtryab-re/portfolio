import { useState } from "react";

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
      .then(() => alert("Message sent successfully!"))
      .catch((error) => alert(error));
  };

  return (
    <section id="contact" className=" bg-red-100 py-6 px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-slate-800">contact me</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" netlify>
          {/* Essential hidden field for React bot crawlers */}
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <textarea
            name="message"
            placeholder="Message"
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
