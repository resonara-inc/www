/**
 * FAQ content, grouped. Each entry is [question, answer].
 * The `// Review:` comments are internal notes carried over from the design review; they are never rendered.
 */

export type FaqEntry = readonly [question: string, answer: string];

export const FAQ = {
  general: [
    ["Is it a recording?", "No. Real bowls are struck live in the room, so you hear every overtone."],
    ["Does it replace a teacher or practitioner?", "No. Resonara holds the sound; people may still guide the experience."],
    ["What do we provide, and what does Resonara do?", "You provide the space and a standard power outlet. We install, calibrate and maintain the instrument."],
    ["Is anything placed on the body?", "No. Participants simply listen."],
    ["How long is a session?", "Each program comes in preset lengths, from a short reset to a full class; you choose in the app. In research, relaxation peaked around 30 minutes."],
    // Review: never say "silent". Recheck the current build first: 13 of 46 launch guests noticed a device sound.
    ["Will it sound mechanical?", "Quiet by design: a felt-lined teak cabinet, padded cradles, and mallets whose height, material and weight are customized for each bowl."],
    ["Where is Resonara available?", "Live in Singapore, and coming to California by the end of 2026. Join the waitlist for your city."],
  ],
  hosting: [
    [
      "How much space and power does it need?",
      "The instrument itself takes about 105 × 43 cm of floor and plugs into a standard outlet, using under 60 W in a session. Leave room around it for people to sit or lie down comfortably.",
    ],
    ["Can we move it?", "Yes, between rooms on castors. It stays at your location."],
    // Review: publish the outdoor option only after engineering signs off. The spec sheet currently says indoor use only.
    ["Where can it go?", "Indoors, or a covered outdoor space with power, such as a terrace or pavilion, that stays dry and between 0 and 40 °C."],
    ["Who maintains it?", "We do: calibration, servicing, updates and bowl care."],
  ],
  studio: [
    ["Will it upstage my teachers?", "No. Sessions can be led by you, your teachers or a visiting sound therapist. Resonara holds the sound so the class can go deeper."],
    ["Can a visiting sound therapist use it?", "Yes. They can guide the session while Resonara plays the bowls, or play alongside it."],
    ["How much space does it need?", "The instrument takes about 105 × 43 cm of floor and a standard outlet, set in your usual class space. It rolls between your rooms on castors."],
    ["How big can a class be?", "It's built for group classes. Tell us about your rooms on the waitlist form and we'll advise on placement."],
    // Review: exclusivity terms aren't in the partner agreement yet.
    [
      "Do partner studios get exclusivity?",
      "Yes, as an introductory offer: partner studios get local exclusivity from us for a limited time. We'll share the area and period when we talk.",
    ],
  ],
  spa: [
    ["Will it feel premium enough for our guests?", "Solid teak, hand-forged bronze bowls and padded cradles. Quiet by design, and finished like furniture."],
    ["Can it play during a massage?", "Yes. It sits in the treatment room and plays while your therapist works. It's sound only, so nothing extra touches the guest."],
    [
      "Do we need extra staff to run it?",
      "No. Your team starts a session from the app in a few taps, then it plays by itself. In relaxation rooms, guests can start sessions themselves.",
    ],
    [
      "Can we roll it out across locations?",
      "Yes. Every instrument is calibrated and plays the same composed programs, so guests get the same experience at every spa. Tell us how many locations on the waitlist form.",
    ],
    ["How much space does it need?", "About 105 × 43 cm of floor and a standard outlet. It rolls between rooms on castors, so one instrument can serve several rooms."],
  ],
  workplace: [
    ["Will people use it, and can we show it's working?", "Session reports show sessions run, by space and over time. We don't track who attends."],
    ["How are sessions scheduled?", "On demand and self-serve: anyone can start a program and a preset length in the app, or you can set a timetable."],
    [
      "What room do we need?",
      "A wellness room or quiet meeting room with space for the instrument (about 105 × 43 cm of floor) plus room for people to sit or lie down comfortably, and a standard power outlet.",
    ],
    ["How long is a session?", "Programs come in preset lengths, including 15-minute resets that fit between meetings."],
  ],
  safety: [
    [
      "Is it safe?",
      "It has an instant stop, and its motors switch off when idle. Anyone with a medical concern should check with their doctor first; venues screen participants as in any wellness class.",
    ],
    ["Is it a medical device?", "No. Resonara is a wellness instrument for relaxation and general wellbeing. It is not a medical treatment."],
    ["Does anything touch the body?", "No. It's sound only, played live from the bowls."],
    ["How do venues handle guest screening?", "As with any wellness class or spa treatment. Anyone with a medical concern should check with their doctor first."],
  ],
} as const satisfies Record<string, readonly FaqEntry[]>;

export type FaqGroup = keyof typeof FAQ;
