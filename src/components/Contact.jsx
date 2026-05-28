import { useState } from "react";
import toast from "react-hot-toast";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setisSending] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisSending(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        toast.success("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
        setisSending(false);
      })
      .catch(() => toast.error("Message unable to send. Try Again Later"));
  };

  return (
    <section id="contact" className=" px-20 mb-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-slate-800">contact me</h2>
      </div>
      <div>
        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          className="flex rounded-xl flex-col gap-4 border p-2"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border p-2 rounded-full"
          />
          <input
            className="border rounded-full p-2"
            required
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <textarea
            className="border rounded-xl p-2"
            required
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button
            type="submit"
            disabled={isSending}
            className="disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer rounded-full hover:bg-blue-300 transition duration-200 border p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
