import {
  Mail,
  MessageSquareMore,
  ArrowRight,
  User,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | sending | success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("sending");

    try {
      await emailjs.sendForm(
        "service_mux0bsb",     // replace with your actual service ID
        "template_nrvfpzi",    // replace with your template ID
        formRef.current,
        "vPYUy4WLSGLsZeWoS"      // replace with your public key
      );

      setSubmitStatus("success");
      toast({ title: "Message sent successfully!" });
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast({ title: "Failed to send message", description: "Please try again later", variant: "destructive" });
      setSubmitStatus("idle");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[44px] sm:text-5xl lg:text-6xl font-bold mb-6 text-center leading-tight tracking-tight drop-shadow-lg transition-all duration-500 ease-in-out">
          Ready to take{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500">
            your digital presence
          </span>{" "}
          to the next level?
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-center">
          Reach out to me today and let’s discuss how I can help you achieve your goals.
        </p>

        <div className="flex justify-center">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto bg-white dark:bg-card p-4 sm:p-6 md:p-8 rounded-xl shadow-md space-y-4 text-sm"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-1">
              Contact Us
            </h3>
            <p className="text-center text-muted-foreground text-sm mb-4">
              We will get back to you asap!
            </p>

            {/* Name Field */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <User size={20} className="text-foreground" />
              </span>
              <input
                type="text"
                name="from_name"
                required
                className="w-full pl-10 pr-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                placeholder="from_name"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Mail size={20} className="text-foreground" />
              </span>
              <input
                type="email"
                name="from_email"
                required
                className="w-full pl-10 pr-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                placeholder="Email"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <span className="absolute left-3 top-4 text-muted-foreground">
                <MessageSquareMore size={20} className="text-foreground" />
              </span>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full pl-10 pr-3 pt-3 pb-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your Message"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-foreground rounded-2xl hover:bg-white hover:text-black transition duration-300"
            >
              {submitStatus === "sending"
                ? "Sending..."
                : submitStatus === "success"
                ? "Sent successfully"
                : (
                  <>
                    Send <ArrowRight size={16} />
                  </>
                )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground border-t border-border pt-6 mx-2 lg:mx-[8.5rem]">
        <span>© 2025 Mohit Gawande</span>
        <div className="flex gap-4">
          <a href="https://github.com/Mohitss10" className="hover:text-white transition">
            <Github />
          </a>
          <a href="https://x.com/MohitGawande15" className="hover:text-white transition">
            <Twitter />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-gawande-774402253/"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  );
};
