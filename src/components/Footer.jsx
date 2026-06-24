import toast from "react-hot-toast";

export default function Footer() {
  const copyData = async () => {
    const email = "wtryab@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email Copied!");
    } catch (err) {
      toast.error("Unable to copy email");
      console.log(err);
    }
  };

  return (
    <footer className="text-center p-9 mt-5 text-white bg-gray-900">
      <div className="flex items-center justify-evenly">
        <a
          href="mailto:wtryab@gmail.com"
          className="px-3 py-1 rounded-full hover:transform-3d
          hover:scale-120 duration-200
"
          onClick={copyData}
        >
          Email
        </a>
        <a
          className="px-3 py-1 rounded-full hover:transform-3d
          hover:scale-120 duration-200
"
          href="https://docs.google.com/document/d/1b5pZn1FFIAiQYE-Sap6UrKKeK6M9qrnjbO9fgbLOL6c/edit?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
        <a
          className="px-3 py-1 rounded-full hover:transform-3d
          hover:scale-120 duration-200
"
          href="https://www.linkedin.com/in/warda-tayyeb"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="px-3 py-1 rounded-full hover:transform-3d
          hover:scale-120 duration-200
"
          href="https://github.com/wtryab-re"
          target="_blank"
        >
          Github
        </a>
      </div>
      <p className="mt-12 text-xs">Made with love by Warda</p>
    </footer>
  );
}
