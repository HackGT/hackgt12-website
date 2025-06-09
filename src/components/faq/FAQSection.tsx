import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const FAQSection = () => {
  return (
    <div className="w-full mx-auto text-white">
      <h1 className="mt-32  font-cormo text-[#F1C57C] text-[96px] text-center">
        FAQs
      </h1>

      <Accordion type="multiple" className="space-y-6 max-w-2xl mx-auto">
        {FAQ_CONTENT.map((faq, index) => (
          <AccordionItem
            key={index}
            value={faq.q}
            className="rounded-xl w-full bg-[#2F2090] text-white border-none"
          >
            <AccordionTrigger className="hover:cursor-pointer bg-[#3F458C] hover:bg-[#353a75] px-6 py-4 text-left font-semibold text-white text-[18px] font-poppins rounded-xl border-none outline-none focus:ring-0">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="bg-[#2F2090] text-white px-6 py-4 rounded-b-xl text-[16px] font-poppins border-none">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const FAQ_CONTENT = [
  {
    q: "What is HackGT?",
    a: "HackGT is HexLabs' free, 36-hour, annual hackathon where students from across the world come together for a weekend in the fall to create innovative projects that show off their creativity and passion for development. You have the freedom to choose any platform, programming language, or format to show how you build solutions. Participating in this event will widen your professional network, build your portfolio, and allow you to put your creativity into production! With tech talks and workshops, you will also have the opportunity to talk to and learn from professionals in various industries. We encourage everyone to be a part of our hacker community at HackGT 11 regardless of location, major, or prior hacking experience.",
  },
  {
    q: "When does registration open?",
    a: "Registration opens July 22nd! This year, we have 2 rounds of applications; take a look at the Registration section below for more about this! Keep an eye out on our socials and subscribe to our newsletter for more information, coming soon 👀",
  },
  {
    q: "It’s my first hackathon. Should I apply?",
    a: "Yes! Experience is not required. Hackathons are open creative and learning environments for everyone. If you are new to hackathons, the Emerging Hacker track may be for you!",
  },
  {
    q: "Did you say “FREE”?",
    a: "Yes! HackGT is completely free to attend. We will provide you with food, a place to hack, swag, and fun activities throughout the weekend!",
  },
  {
    q: "Will hardware be provided?",
    a: "Yes! We have a hardware lab with a variety of devices you can borrow throughout the event. We will release more information about what we’ll have as the event approaches.",
  },
  {
    q: "What do I need for the event?",
    a: "All you need is your computer, charger, a valid ID (like a driver’s license or school ID), and your creativity!",
  },
  {
    q: "What projects can I make?",
    a: "Anything you want! You can build something technical, artistic, hardware-based, or design-oriented. There are no limits!",
  },
  {
    q: "I’m not a solo hacker. How can I make a team?",
    a: "You can form teams ahead of time or at the event during our team formation activities. We’ll help you meet others with similar interests!",
  },
  {
    q: "What are the prizes? Is there swag?",
    a: "Yes! We’ll have prizes for track winners, sponsor challenges, and mini-events. We’ll also be giving out lots of swag throughout the weekend!",
  },
  {
    q: "Who is eligible to mentor/volunteer?",
    a: "Anyone with a passion for helping hackers and experience in tech, event planning, or logistics is welcome to apply to be a mentor or volunteer!",
  },
  {
    q: "Are we assigned mentors?",
    a: "Not exactly—mentors roam around and are also available at the Help Desk. You can request help at any time during the hackathon.",
  },
  {
    q: "I have more questions…",
    a: "Feel free to reach out to us on Discord or email us at hello@hexlabs.org!",
  },
];
