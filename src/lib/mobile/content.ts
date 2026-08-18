export type ChipId = "experience" | "projects" | "hobbies" | "writing";

export type Chip = {
  id: ChipId;
  label: string;
  prompt: string;
  reply: string;
};

export const ABOUT_MESSAGE =
  "Hey — I'm Iresh. Fullstack MTS at Salesforce, currently on native Voice infra in Bengaluru. Before that: Twilio (Kafka, disaster recovery, Flex), SuperTokens (Flutter/Go/Node/Python SDKs), and a freelance habit with 100+ GitHub repos. I named the blog WatchIreshStruggle on purpose. This is the phone-sized version. The Cursor window is on a computer.";

export const CHIPS: Chip[] = [
  {
    id: "experience",
    label: "Experience",
    prompt: "Walk me through your experience",
    reply:
      "Salesforce now, building Voice. Twilio before that — intern on Flex, then L1 streaming tens of millions of events a minute, then L2 for a speedrun of four months. SuperTokens for auth SDKs and dashboard search. Triomics, Exinous, Learners Digital, Deshik, NIE GDSC Lead. The LinkedIn is long. The plot is 'kept shipping and collecting titles like Pokémon.'",
  },
  {
    id: "projects",
    label: "Projects",
    prompt: "What have you actually shipped?",
    reply:
      "Reach, a creator work desk that became a lifestyle. G-Notify, because Gmail would not send HTML to my GDSC core team. A Shorts generator that renders a vertical video in ~22 seconds on CPU. Lens Distill, a pipeline that read Venture Deals for me after I failed three times. Also: git-accounts-manager, a GPay redesign in Flutter, a templating engine called Sapphire, and a 2019 streaming server. github.com/iresharma is the rest of the confession.",
  },
  {
    id: "hobbies",
    label: "Hobbies",
    prompt: "What do you do when you are not shipping?",
    reply:
      "Basketball, 3D printing, IoT, photography, hip-hop — extras/hobbies.md. Games live in extras/gaming.md: Valorant iresharma#noob, PSN iresharma, Steam iresharma. Tracker.gg has the rank. I will not screenshot it here.",
  },
  {
    id: "writing",
    label: "Writing",
    prompt: "Where can I read your writing?",
    reply:
      "WatchIreshStruggle at blog.iresharma.com — same name as the YouTube channel, which tells you everything. Latest: why coding agents need tree-sitter and LSP, the pipeline I built because I couldn't finish Venture Deals, and a 22-second Shorts generator. I process trauma as markdown.",
  },
];

export const AGENT_UNAVAILABLE =
  "I'd answer that — the agent just isn't plugged in yet. Grab a chip, or open this on a computer for the actual Cursor window.";
