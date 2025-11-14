import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LucideNavigation,
  Mail,
  Phone,
  SendHorizonal,
  Twitter,
} from "lucide-react";
import { useState } from "react";

function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    try {
      await new Promise((res) => setTimeout(res, 2000));
      console.log("Form submitted!");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSending(false);
    }
  };
  return (
    <section id="contact" className="relative py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Contact <span className="text-primary">Me</span>
        </h2>
        <p className="text-2xl font-light text-center py-10">
          Have a question, an opportunity, or just want to say hi? My inbox is
          always open. Feel free to reach out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 my-4">
          <div className="p-2">
            <h3 className="text-2xl font-bold text-center mx-auto mb-10">
              My Information
            </h3>
            <div className="flex flex-col flex items-start text-start mb-10">
              <div className="p-3 flex items-center space-x-4">
                <Mail />
                <div className="flex-1">
                  <h3>Email</h3>
                  <p>phanhuudanhkg2021@gmail.com</p>
                </div>
              </div>
              <div className="p-3 flex items-center space-x-4">
                <Phone />
                <div className="flex-1">
                  <h3>Phone Number</h3>
                  <p>(+84) 123456789</p>
                </div>
              </div>
              <div className="p-3 flex items-center space-x-4">
                <LucideNavigation />
                <div className="flex-1">
                  <h3>Location</h3>
                  <p>Ho Chi Minh City, Viet Nam</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                target="_blank"
                href="https://www.facebook.com/huu.danh.209982"
                className="text-2xl hover:scale-110 p-2 bg-primary/30 rounded-xl"
              >
                <Facebook />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/huu-danh-63a4b4326"
                className="text-2xl hover:scale-110 p-2 bg-primary/30 rounded-xl"
              >
                <Linkedin />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/hdanh0811/"
                className="text-2xl hover:scale-110 p-2 bg-primary/30 rounded-xl"
              >
                <Instagram />
              </a>
              <a
                target="_blank"
                href="https://github.com/phanhuudanhkg0811-star"
                className="text-2xl hover:scale-110 p-2 bg-primary/30 rounded-xl"
              >
                <Github />
              </a>
            </div>
          </div>
          <div className="p-8 shadow-xs bg-card">
            <h3 className="text-2xl font-bold text-center mx-auto mb-10">
              Send a message
            </h3>
            <form className="flex flex-col items-center px-3 gap-5">
              <label
                for="fullName"
                className="block text-center font-bold text-primary"
              >
                Full Name
              </label>
              <input
                required
                type="text"
                id="fullName"
                name="fullName"
                className="w-full py-3 px-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
              />
              <label
                for="email"
                className="block text-center font-bold text-primary"
              >
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="w-full py-3 px-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
              />
              <label
                for="detail"
                className="block text-center font-bold text-primary"
              >
                Detail
              </label>
              <input
                required
                type="text"
                id="detail"
                name="detail"
                className="w-full py-3 px-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-xl text-background font-bold py-3 px-6 bg-primary rounded-4xl mt-10 overflow-hidden whitespace-nowrap group flex items-center hover:bg-primary/80"
              >
                Send
                <SendHorizonal className={`ml-2  ${isSending ? "animate-fly-away" : "group-hover:fly"}`} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
