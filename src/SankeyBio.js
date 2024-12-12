import React from "react";
import { Chart } from "react-google-charts";


const musicColor = 'darkblue';
const techColor = 'teal';
const childhoodColor = 'pink';
const educationColor = 'orange';

const nodeColors = {};
const nodeColorList = [];

const childhoodString = "childhood";
const shipsString = "cruise ships";
const csPostBac = "CS classes";

function createTooltip(text) {
  if (text == " ") return text;
  const tooltipStyle = 'padding:5px 5px 5px 5px; max-width: 300px; font-family: sans-serif; font-weight: normal; text-alight: left;' +
    'background: #bbb; color: #444;';
  return `<div style='${tooltipStyle}'>` + text + "</div>";
}

const pianoLessonsString = "I started getting piano lessons in 2nd grade. It kept going until maybe high school.";
const recordingString = "I recorded a bunch of weird and silly songs in late middle school and throughout high school. I would write stuff and play guitar, keyboards, bass, and program drums. It developed into better stuff in college.";
const bassCollegeString = "In college, I played bass (and some keyboards) in several bands, some more casually and some more intensely."
const csPostBacDetails = "Excited by the programming I was doing at work, I enrolled in university classes in computer science. I took data structures, algorithms, assembly language, systems programming, and a mobile robotics course. Languages used included Java, MIPS (assembly), C, and Python.";
const shipsDetails = "I played bass on Holland America Line. The workload was not heavy, so I dedicated free time to drums and programming.";
const cppDetails = "Spent a lot of time working through audio programming and more generic algorithm problems in C++ and building a personal project - it generated some linear jazz improvisation style music and output a MIDI file.";
const mscsDetails = "<b>Master of Science in Computer Science - Georgia Institute of Technology</b><br>" +
  "<i>Specialization in Machine Learning</i><br>" +
  "Coursework included compiler optimizations for embedded systems, operating systems, machine learning, reinforcement learning, machine learning for trading, data visualization and analysis, and artificial intelligence.";
const mMusDetails = "<b>Master of Music in Performance (Percussion, Jazz Emphasis) - Duquesne University</b><br>Played a lot of drums with a lot of people in a lot of situations and got a master's degree! I received invaluable guidance from significant musicians Tom Wendt, Eliseo Rael, Jeff Bush, and Mike Tomaro.";
const periods = [
  [
    [childhoodString, "elementary school", 8, " ", childhoodColor, educationColor],
    [childhoodString, "piano", 1, pianoLessonsString, childhoodColor, musicColor],
    [childhoodString, childhoodString, 7, " ", childhoodColor, childhoodColor],
  ],
  [
    ["elementary school", "middle school", 8, " ", educationColor, educationColor],
    [childhoodString, "HTML", 2, "In 6th grade, I read a book on HTML and built a website from scratch. Through high school, I used it to publish silly stuff, flash animations, and musical content", childhoodColor, techColor],
    [childhoodString, "guitar", 1, "Started teaching myself guitar with a combination of resources found online and figuring things out by ear.", childhoodColor, musicColor],
    ["piano", "piano", 1, pianoLessonsString, musicColor, musicColor],
    [childhoodString, childhoodString, 4, " ", childhoodColor, childhoodColor],
  ],
  [
    ["middle school", "high school", 8, " ", educationColor, educationColor],
    ["HTML", "Java", 2, "Took a Java class in high school but wasn't sure yet how I could use it.", techColor, techColor],
    ["piano", "recording", 1, recordingString, musicColor, musicColor],
    [childhoodString, "recording", 1, recordingString, childhoodColor, musicColor],
    [childhoodString, "guitar", 1, " ", childhoodColor, musicColor],
    [childhoodString, "bass", 1, "I played bass in the band at church every week, under the guidance of some skilled adults. I learned a lot.", childhoodColor, musicColor],
    [childhoodString, "drums", 1, "I tried the drums at church and had more fun than I did on other instruments. I got a kit at home and played along to recordings!", childhoodColor, musicColor],
    ["guitar", "guitar", 1, " ", musicColor, musicColor],
  ],
  [
    ["high school", "college", 8, "University of Pittsburgh - Math and Music. Learned a lot of cool stuff, worked part time at the audio/video office.", educationColor, educationColor],
    ["Java", "Java", 2, "Took another Java class in college. I still wasn't sure what to do with it.", techColor, techColor],
    ["recording", "jazz piano", 2, "I took lessons with local legend Frank Cunimundo and got used to jazz harmony.", musicColor, musicColor],
    ["guitar", "bass", 2, bassCollegeString, musicColor, musicColor],
    ["bass", "bass", 1, bassCollegeString, musicColor, musicColor],
    ["drums", "bass", 1, bassCollegeString, musicColor, musicColor],
  ],
  [
    ["college", "actuarial exams", 6, "Actuarial work seemed like a better way to make money than music. I studied for exams and learned a ton about probability and financial structures. I was working part-time for an early online platform which optimized search engine results.", educationColor, educationColor],
    ["college", "organ", 2, "Took some lessons, practiced a lot and worked at a church. I play 3 keyboards at the same time.", educationColor, musicColor],
    ["Java", "R/Python", 2, "I knew I'd need technical skills if I was going to do actuarial work, so I checked out R, VBA, and Python. I started to really enjoy programming.", techColor, techColor],
    // ["Java", "actuarial exams", 2, "I knew I'd need technical skills if I was going to do actuarial work, so I checked out R, VBA, and Python. I started to really enjoy programming.", techColor, educationColor],
    ["jazz piano", "jazz piano", 2, "Kept taking lessons from Frank Cunimundo.", musicColor, musicColor],
    ["bass", "drums", 2, "One day I sat down on a friend's drum kit and realized I really really love drums. I made a commitment to practice a good bit and develop some skills, despite not knowing where it would take me.", musicColor, musicColor],
    ["bass", "bass", 2, "I started playing bass in some cover bands for extra cash and experience.", musicColor, musicColor],
  ],
  [
    ["actuarial exams", "financial job", 6, "I didn't get an actuarial job, but I took a job helping to plan retirements for individuals. It was a lot of repetitive pulling of data and crunching numbers, so I ended up writing a lot of code to do all that for me. It involved a lot of web-crawling and analyzing screenshots and automating screen clicks, since I didn't have access to APIs. Languages used included Python with Selenium and some image processing libraries, and VBA. It inspired me to move in a more technical direction.", educationColor, techColor],
    ["R/Python", "financial job", 2, " ", techColor, educationColor],
    ["organ", "organ", 2, "Kept playing at church!", musicColor, musicColor],
    // ["organ", csPostBac, 2, "Excited by the programming I was doing at work, I enrolled in university classes in computer science. I took data structures, algorithms, assembly language, systems programming, and a mobile robotics course. Languages used included Java, MIPS (assembly), C, and Python.", musicColor, techColor],
    ["jazz piano", csPostBac, 2, csPostBacDetails, musicColor, techColor],
    ["drums", csPostBac, 2, csPostBacDetails, musicColor, techColor],
    ["bass", "bass", 2, "Bass playing was in demand and I kept doing it.", musicColor, musicColor],
  ],
  [
    [csPostBac, "C++", 4, cppDetails, techColor, techColor],
    // [csPostBac, "drums", 4, " ", techColor, musicColor],
    ["financial job", "C++", 2, cppDetails, techColor, techColor],
    ["financial job", shipsString, 4, shipsDetails, techColor, musicColor],
    ["organ", "electronic music", 2, "I made some fun electronic music during this time that I am still a little proud of. You can check it out on the music tab of this website.", musicColor, musicColor],
    ["bass", shipsString, 2, shipsDetails, musicColor, musicColor],
    ["financial job", "drums", 2, "I practiced drums on ships quite a bit!", musicColor, musicColor],
  ],
  [
    ["C++", "MSCS", 6, mscsDetails, techColor, techColor],
    [shipsString, "MSCS", 4, mscsDetails, musicColor, techColor],
    [shipsString, "drums", 2, "Kept practicing! Started to get a few playing opportunities.", musicColor, musicColor],
    ["drums", "drums", 2, "Kept practicing! Started to get a few playing opportunities.", musicColor, musicColor],
    ["electronic music", "drums", 2, "Kept practicing! Started to get a few playing opportunities.", musicColor, musicColor],
  ],
  [
    ["MSCS", "software engineer", 10, "I worked at a few companies:" + 
      "<p><b>Elio AI - 2021 - 2022</b><br>I designed and built a mobile application and C++ backend that interfaced with medical equipment and performed real-time image segmentation on streaming video using NVIDIA hardware." +
      "<p><b>Chatham Financial Corporation - 2019 - 2021</b><br>Full stack work. Projects included building a derivative pricing calculator, optimizing an older application dealing with issues of scale, migrating database tables, and optimizing derivative traders\’ workflows by building a realtime dashboard which tracked deals and tasks through their regular life cycle. I wrote extensive automated tests.", techColor, techColor],
    ["drums", "drums", 6, "I studied with a drummer and teacher named Steve Lyman, who has a really unique approach that has been recognized by some  big names in jazz drumming.", musicColor, musicColor],
  ],
  [
    ["software engineer", "MMus", 7, mMusDetails, techColor, musicColor],
    ["software engineer", "organ", 1, "Working at church again.", techColor, musicColor],
    ["software engineer", "software engineer", 2, "I was able to keep up some tech activities while doing the music master's:" +
      "<p>Artist websites for a few musical entities." +
      "<p>Core video streaming functionality and application design/development for a teleconferencing company looking to adopt the GStreamer framework." +
      "<p>Dialogue audio system in the style of Animal Crossing. This was for a game being developed with Unreal Engine." +
      "<p>Personal projects: the music generator and drum practice app detailed on the projects tab of this page!", techColor, techColor],
    ["drums", "MMus", 6, mMusDetails, musicColor, musicColor],
  ],
];
var activityNamesModified = {};

// export const data2 = [["From", "To", "Weight", {type: 'string', role: 'tooltip'}]]
//   .concat(periods.map(period => {

//   }));

var edges = [];
var periodNumber = 0;
periods.forEach(period => {
  
  // const periodTotalWeight = period.map(edge => edge[2]).reduce((partialSum, a) => partialSum + a, 0);
  edges = edges.concat(period.map((edge) => {
    // const from = activityNamesModified.hasOwnProperty(edge[0]) ? activityNamesModified[edge[0]] : edge[0];
    const from = edge[0] + " ".repeat(periodNumber);
    var to = edge[1] + " ".repeat(periodNumber + 1);

    // if (activityNamesModified.hasOwnProperty(to)) {
    //   activityNamesModified[to] = activityNamesModified[to] + " ";
    //   to = activityNamesModified[to];
    // } else if (edge[0] == to) {
    //   activityNamesModified[to] = to + " ";
    //   to = activityNamesModified[to];
    // }
    
    const weight = edge[2];
    // const weight = edge[2] / periodTotalWeight;
    const tooltip = createTooltip(edge[3]);
    
    if (!nodeColors.hasOwnProperty(from)) {
      nodeColors[from] = edge[4];
      nodeColorList.push(nodeColors[from]);
    }

    if (!nodeColors.hasOwnProperty(to)) {
      nodeColors[to] = edge[5];
      nodeColorList.push(nodeColors[to]);
    }


    return [from, to, weight, tooltip];
  }));
  periodNumber += 1;
});

export const data = [
  ["From", "To", "Weight", {type: 'string', 'role': 'tooltip', 'p': {'html': true}}],
  // [childhoodString, "elementary school", 5, " "],
  // ["elementary school", "middle school", 5, " "],
  // ["middle school", "high school", 5, " "],
  // [childhoodString, "piano", 1, " "],
  // ["piano", "Piano Lessons ", 1, " "],
  // ["Piano Lessons ", "recording", 1, " "],
  // [childhoodString, "Childhood ", 3, " "],
  // ["Childhood ", "HTML", 1, "Designed and maintained a website for publishing humorous and musical content"],
  // ["HTML", "recording", 1, "Mostly just maintained the thing after it got going. Spent more time on music"],
  // ["Childhood ", "Childhood  ", 1, " "],
].concat(edges);

export const options = {
  tooltip: {isHtml: true},
  sankey: {
    link: { color: "#0066aa" },//colorMode: 'gradient' },
    node: { 
      nodePadding: 80,
      colors: nodeColorList,
      label: { color: "#ffeedd" }
    },
    iterations: 500 },
  };


  

export function SankeyBio() {
  return (
    <Chart
      chartType="Sankey"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
  );
}

export default SankeyBio;