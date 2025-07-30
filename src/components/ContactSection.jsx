import {
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[44px] sm:text-5xl lg:text-6xl font-bold mb-6 text-center leading-tight tracking-tight text-white drop-shadow-lg transition-all duration-500 ease-in-out">
          Ready to take <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 animate-gradient">your digital presence</span> to the next level?
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-center">
          Reach out to me today and let’s discuss how I can help you achieve your goals.
        </p>


        {/* Contact Form */}
        {/* Contact Form */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-w-md bg-card p-4 sm:p-6 rounded-lg shadow-md space-y-4 text-sm"
          >
            <h3 className="text-xl font-semibold mb-2">Send a Message</h3>

            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="bg-slate-800 w-full px-3 py-1.5 rounded-md border border-input focus:ring-2 focus:ring-primary text-sm"
                placeholder="Surya Sharma..."
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-slate-800 w-full px-3 py-1.5 rounded-md border border-input focus:ring-2 focus:ring-primary text-sm"
                placeholder="ram@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="bg-slate-800 w-full px-3 py-1.5 rounded-md border border-input focus:ring-2 focus:ring-primary resize-none text-sm"
                placeholder="Hello, I'd like to talk about..."
                rows={3}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white border border-white rounded-xl hover:bg-white hover:text-black transition duration-300"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={14} />
            </button>
          </form>

        </div>

      </div>

      {/* Footer Section */}
      <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground border-t border-border pt-6 mx-2 lg:mx-[8.5rem]">
        <span>© 2025 Mohit Gawande</span>
        <div className="flex gap-4">
          <a href="https://github.com/Mohitss10" className="hover:text-white transition"><Github /></a>
          <a href="https://x.com/MohitGawande15" className="hover:text-white transition"><Twitter /></a>
          <a href="https://www.linkedin.com/in/mohit-gawande-774402253/" className="hover:text-white transition" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        </div>
      </div>

    </section>
  );
};
