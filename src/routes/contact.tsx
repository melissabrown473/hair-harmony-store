import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Clock } from "lucide-react";
import { SiteHeader, SiteFooter } from "./index";
import heroModel from "@/assets/hero-model.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Hair Harmony Store" },
      {
        name: "description",
        content:
          "Contact Hair Harmony Store for questions about luxury hair extensions, wigs and accessories.",
      },
    ],
  }),
  component: ContactPage,
});


function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <SiteHeader />


      {/* HERO */}

      <section className="relative min-h-[600px] overflow-hidden bg-ink text-white">

        <img
          src={heroModel}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />


        <div className="relative flex min-h-[600px] items-center justify-center px-6 text-center">

          <div className="max-w-3xl">

            <p className="text-xs uppercase tracking-[0.4em] text-[#caa15b]">
              Customer Care
            </p>


            <h1 className="mt-5 font-display text-6xl md:text-7xl">
              Get In Touch
            </h1>


            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/70">
              Have questions about your perfect texture, color match,
              extensions or styling? Our team is here to help.
            </p>

          </div>

        </div>

      </section>



      {/* CONTACT AREA */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">


          {/* INFO */}

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-[#caa15b]">
              Contact Information
            </p>


            <h2 className="mt-5 font-display text-5xl">
              We are here for you
            </h2>


            <p className="mt-6 max-w-md text-muted-foreground leading-8">
              Whether you need help choosing your hair, want styling advice,
              or have questions about your order, our beauty specialists are
              ready to assist.
            </p>



            <div className="mt-10 space-y-6">


              {[
                {
                  icon: Phone,
                  title: "+1 (609) 536-9753",
                  desc: "Customer support",
                },
                {
                  icon: Mail,
                  title: "melissabrown473218@gmail.com ",
                  desc: "Email enquiries",
                },
                {
                  icon: Clock,
                  title: "Mon–Sat: 9am–7pm",
                  desc: "Sunday: By appointment",
                },

              ].map((item)=>{

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="flex items-center gap-5 rounded-xl border border-border bg-card p-5 transition hover:border-[#caa15b]"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#caa15b]/15 text-[#caa15b]">

                      <Icon className="h-5 w-5"/>

                    </div>


                    <div>

                      <p className="font-medium">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                );

              })}


            </div>

          </div>



          {/* FORM */}

          <form className="rounded-2xl border border-border bg-[#f8f5ef] p-8 md:p-10">

            <p className="text-xs uppercase tracking-[0.35em] text-[#caa15b]">
              Send A Message
            </p>


            <h3 className="mt-4 font-display text-4xl">
              How can we help?
            </h3>


            <div className="mt-8 space-y-4">


              <input
                placeholder="Your Name"
                className="
                w-full rounded-lg
                border border-border
                bg-white
                px-5 py-4
                text-sm
                outline-none
                focus:border-[#caa15b]
                "
              />


              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full rounded-lg
                border border-border
                bg-white
                px-5 py-4
                text-sm
                outline-none
                focus:border-[#caa15b]
                "
              />


              <input
                placeholder="Subject"
                className="
                w-full rounded-lg
                border border-border
                bg-white
                px-5 py-4
                text-sm
                outline-none
                focus:border-[#caa15b]
                "
              />


              <textarea
                rows={5}
                placeholder="Your Message"
                className="
                w-full rounded-lg
                border border-border
                bg-white
                px-5 py-4
                text-sm
                outline-none
                focus:border-[#caa15b]
                "
              />


              <button
                className="
                w-full rounded-lg
                bg-[#111]
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-white
                transition
                hover:bg-black
                "
              >
                Send Message
              </button>


            </div>

          </form>


        </div>

      </section>


      <SiteFooter />

    </div>
  );
}