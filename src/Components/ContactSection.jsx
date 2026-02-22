import {
  Facebook,
  Instagram,
  Linkedin,
  Locate,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Enquire <span className="text-primary">Now </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let’s connect and build something great together.
Reach out to discuss your dream home, land, or construction project - we’ll guide you every step of the way
        </p>

        {/* Contact Information Card */}
        <div className="max-w-xl mx-auto bg-card p-8 rounded-lg shadow-xs text-center">
          <h3 className="text-2xl font-semibold mb-8">
            Contact Information
          </h3>

          <div className="space-y-8">
            {/* Email */}
            <div className="flex flex-col items-center gap-2">
                <div>
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div><p>Email</p></div>
              <p className="text-muted-foreground text-sm">
                ganeshdesai5755@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-2">
                <div>
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div><p>Phone</p></div>
              <p className="text-muted-foreground text-sm">
                +91 7083385557
              </p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-2">
                <div>
              <div className="p-3 rounded-full bg-primary/10">
                <Locate className="h-5 w-10 text-primary" />
              </div><p>Address</p></div>
              <p className="text-muted-foreground text-sm">
               Yavatmal, MH, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-10">
            <h4 className="font-medium mb-4">Connect With Us</h4>
            <div className="flex justify-center space-x-6">
              {/* <a href="https://www.linkedin.com/in/nikita-kopnar" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a> */}
              {/* <a href="https://x.com/Nikita_M_Kopnar" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a> */}
              <a href="https://instagram.com/drishani_park_1" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
              {/* <a href="https://facebook.com/niku.kopnar" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
