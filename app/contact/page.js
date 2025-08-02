import { StarsBackground } from "@/components/ui/starbg";
import ContactForm from "@/components/ui/formsubmission";
import { Endtext } from "@/components/ui/endingtext";

export default function Contact() {
  return (
    <section className="text-center mt-5 p-5 relative overflow-hidden text-white">
             <StarsBackground className="-z-10" />
          <h1 className="about-title font-bold">Contact</h1>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    
    {/* Details */}
    <div className="space-y-8">
      {/* Location */}
      <div className="flex items-center space-x-3">
        <img
          src="https://www.svgrepo.com/show/513304/globe-2.svg"
          alt="Location Icon"
          className="w-6 h-6 text-yellow-400"
        />
        <span className="text-sm lg:text-lg">Currently based in <u>Singapore</u></span>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-3">
        <img
          src="https://www.svgrepo.com/show/424662/email-newsletter-subscription.svg"
          alt="Email Icon"
          className="w-6 h-6 text-yellow-400"
        />
        <a href="mailto:hwanxin20@gmail.com" className="transform hover:scale-110 transition-transform duration-300 text-sm lg:text-lg">Send me an email</a>
      </div>

      {/* LinkedIn */}
      <div className="flex items-center space-x-3">
        <img
          src="https://www.svgrepo.com/show/448234/linkedin.svg"
          alt="LinkedIn Icon"
          className="w-6 h-6"
        />
        <a
          href="https://www.linkedin.com/in/hwanxin/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-300 text-sm lg:text-lg"
        >
          Connect with me on LinkedIn
        </a>
      </div>
    </div>


  
<ContactForm />
</div>
<div className="mt-6 mb-8 text-2xl text-center">
  <Endtext />
</div>

    </section>
  );
}
