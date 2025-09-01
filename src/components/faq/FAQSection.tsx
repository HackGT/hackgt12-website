import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const FAQSection = () => {
  return (
    <div id="faqs" className="w-full mx-auto text-white">
      <h1 className="mt-32 mb-8 font-cormo color-gold font-bold text-[48px] lg:text-[10vh] text-center">
        FAQs
      </h1>

      <Accordion type="multiple" className="space-y-6 max-w-2xl mx-auto">
        {FAQ_CONTENT.map((faq, index) => (
          <AccordionItem
            key={index}
            value={faq.q}
            className="rounded-xl w-full bg-[#2F2090] text-white border-none"
          >
            <AccordionTrigger className="hover:cursor-pointer bg-[#3F458C] hover:bg-[#353a75] px-6 py-4 text-left font-semibold text-white text-[16px] lg:text-[18px] font-poppins rounded-xl border-none outline-none focus:ring-0">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="bg-[#2F2090] text-white px-6 py-4 rounded-b-xl text-[14px] lg:text-[16px] font-poppins border-none">
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
    a: "HackGT is HexLabs' free, 36-hour, annual hackathon where students from across the world come together for a weekend in the fall to create innovative projects that show off their creativity and passion for development. You have the freedom to choose any platform, programming language, or format to show how you build solutions.\nParticipating in this event will widen your professional network, build your portfolio, and allow you to put your creativity into production! With tech talks and workshops, you will also have the opportunity to talk to and learn from professionals in various industries. We encourage everyone to be a part of our hacker community at HackGT 12 regardless of location, major, or prior hacking experience.",
  },
  {
    q: "When does registration open?",
    a: "Registration opens July 21st! This year, we have 2 rounds of applications: early bird and regular. Keep an eye out on our socials and subscribe to our newsletter for more information, coming soon 👀",
  },
  {
    q: "Who is eligible to apply as a hacker?",
    a: "As a hacker, you must be an enrolled college student. Additionally, if you are not a Georgia Tech student, you must be 18 years or older by the day the hackathon starts.",
  },
  {
    q: "It's my first hackathon. Should I apply?",
    a: "Yes! Experience is not required. Hackathons are open creative and learning environments for everyone. If you are new to hackathons, the Emerging track may be for you!",
  },
  {
    q: "How many paths can I apply to?",
    a: "You are only allowed to apply to one path. Please select the application path that best fits your needs! Also, note that once you are accepted, you cannot change your path.",
  },
  {
    q: "Did you say “FREE”?",
    a: (
      <>
        YES! Once you're on GT's campus, HackGT 12 is completely free to
        participants and mentors thanks to our sponsors. Free food, free swag,
        free vibes. 😇 If you will be traveling from afar, we offer
        reimbursements to GT, but transportation would be your only cost
        otherwise. Learn more on our{" "}
        <a
          href="https://www.notion.so/hexlabs/HackGT-12-Travel-Assistance-23604380643180de9f5ecacc63b5728b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline"
        >
          travel guide
        </a>
        .
      </>
    ),
  },
  {
    q: "How will travel reimbursements work?",
    a: (
      <>
        We provide limited reimbursements of up to $50 for gas and up to $200
        for flights. Eligible students must be located 50+ miles away from the
        Klaus Advanced Computing Building at Georgia Tech. Apply by August 12 at
        11:59pm EST. See{" "}
        <a
          href="https://www.notion.so/hexlabs/HackGT-12-Travel-Assistance-23604380643180de9f5ecacc63b5728b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline"
        >
          here
        </a>{" "}
        for the full travel guide.
      </>
    ),
  },
  {
    q: "Will hardware be provided?",
    a: "We have a hardware desk with a variety of devices you can borrow throughout the event. We will release more information about what we’ll have as the event approaches.",
  },
  {
    q: "What do I need for the event?",
    a: "We recommend bringing a laptop, charger, headphones, and anything else you'll need over the weekend. We'll provide hardware, meals, snacks, swag, and ~good vibes~.",
  },
  {
    q: "What projects can I make?",
    a: "You can make anything you want! If you want more direction, we will have sponsor challenges and HackGT 12 tracks for both General and Emerging participants. However, you may not submit your past projects to HackGT. We will send out an event packet containing project submission rules closer to September.",
  },
  {
    q: "I’m not a solo hacker. How can I make a team?",
    a: "No worries; we love multi-person hacker groups! We will host a team formation event after opening ceremony. You can also form a team with anyone! Teams can have up to four members. You are welcome to apply to either Emerging or Advanced track levels for each prize. Look out for more information about our team matching portal coming soon!",
  },
  {
    q: "What are the prizes? Is there swag?",
    a: "If you win a prize, we will make sure you get it no matter where in the world you are! We'll announce more info on prizes soon. HackGT 12 swag will be distributed during the event and there will be more opportunities to win exclusive items from winning activities or using points from event participation to redeem additional aesthetic swag. More information coming soon!",
  },
  {
    q: "Who is eligible to mentor/volunteer?",
    a: "Anyone can mentor or volunteer. If you are interested in helping participants through their projects, then apply as a mentor. If you are interested in helping us run the event, then apply as a volunteer.",
  },
  {
    q: "Are we assigned mentors?",
    a: "Mentorship will be in an office hours style format. Participants can submit questions via a virtual queue and meet mentors 1:1.",
  },
  {
    q: "Where do I apply to mentor or judge?",
    a: "Click the register link and apply to the mentor or judge path.",
  },
  {
    q: "Want to sponsor?",
    a: "Contact us at sponsorship@hexlabs.org for more information",
  },
  {
    q: "I have more questions…",
    a: "Contact us at hello@hexlabs.org",
  },
];
