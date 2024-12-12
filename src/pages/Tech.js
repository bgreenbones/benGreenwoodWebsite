import events from "./eventData.js";

const pastEvents = events
  .filter(event => new Date(event.finalDateText ?? event.dateText) < new Date())
  .sort((event1, event2) => new Date(event2.finalDateText ?? event2.dateText) - new Date(event1.finalDateText ?? event1.dateText));
const upcomingEvents = events
  .filter(event => new Date(event.finalDateText ?? event.dateText) >= new Date())
  .sort((event1, event2) => new Date(event1.finalDateText ?? event1.dateText) - new Date(event2.finalDateText ?? event2.dateText));

function getEventElement(event) { 
  const collaborators = event.hasOwnProperty("collaborators") ?
      <><div className="eventInfo">with { event.collaborators }</div></>
      : <></>;
  const moreInformation = event.hasOwnProperty("forMoreInformation") ?
      <><div className="eventInfo">for more information: <a href={event.forMoreInformation.url}>{event.forMoreInformation.text}</a></div></>
      : <></>;
  const links = event.hasOwnProperty("links") ?
      <><div className="eventInfo">{event.links.map((link) =>
        {
          const linkTexts = link.text.split(link.linkText);
          const result = <>{linkTexts[0]}<a href={link.href}>{link.linkText}</a>{linkTexts[1]}</>;
          return result;
        })}</div>
      </>
      : <></>;
  return <div className="event" key={event.key}>
      <div className="date">{ event.dateText }</div>
      <div>{event.description }</div>
      { collaborators }
      { links }
      { moreInformation }
    </div>
}

function PastProjects() { return pastEvents.map(event => getEventElement(event)) };
function UpcomingProjects() { return upcomingEvents.map(event => getEventElement(event)) };

const Tech = () => (
<div id="projectsBackground">
  <div id="projectsOverlay">
    <h2>projects</h2>
    <h3>music generator</h3>
    My foray into algorithmic composition, conveniently embedded in a DAW plugin.
    <p/>Today, generative AI allows us to generate stuff that sounds like anything we've heard before.
    <p/>My generator outputs harmonies, rhythms, melodies, and basslines based on abstract concepts that I've manually coded up, instead of training on millions/billions of examples.
    <p/>Therefore, it's extremely efficient, free of copyright issues, and it outputs weird stuff that sounds like nothing I've heard before but is oddly close to the music swimming around in my subconcious brain.
    <p/>
    <img style={{maxWidth: "100%", borderRadius: "10px"}} src="../media/projects/generateStuffScreenshot.png"></img>
    <div style={{fontSize: 12}}>Pictured: a beautiful UI that makes it clear I am trying to make tons of money off this thing.</div>
    <p/>Some stuff this thing has spat out (sounds could be whatever synths you want, as long as you can get MIDI signals into them):
    <p/><audio controls>
      <source src="../media/projects/music/pluginDups.mp3"></source>
    </audio>
    <p/>By changing the subdivision selection you can output stuff in triplet time (kick drum added for downbeat reference):
    <p/><audio controls>
      <source src="../media/projects/music/pluginTrips2.mp3"></source>
    </audio>
    <p/>Or even quintuplets:
    <p/><audio controls>
      <source src="../media/projects/music/pluginQuints.mp3"></source>
    </audio>
    <p/>As a drummer, this makes for fun stuff to play along to. You can download the current build's .VST3 file <a href="../media/projects/generateStuff.zip">here</a>, but it probably won't work for you unless you're running a Mac with an M1 chip (again, I am trying to get rich from this). If you want to try building from source, it is available on <a href="https://github.com/bgreenbones/generateStuff/tree/main">github</a>.
    <h3>sticking generator</h3>
    Sometimes when I practice the drums, I want to get away from my habits. This app is a dead simple text generator that can spit out ideas that I haven't thought to try.
    <p/>Say I want to keep my hi-hat foot playing your typical waltz pattern, while my left hand and right foot do different things in the spaces between. These settings:
    <p/><img style={{maxWidth: "100%", borderRadius: "10px", marginLeft: "2px"}} src="../media/projects/stickings2.jpg"></img>
    <p/>Will give me just that!
    <p/><img style={{maxWidth: "100%", borderRadius: "10px", marginRight: "2px"}} src="../media/projects/stickings1.jpg"></img>
    <p/>I haven't released or deployed this anywhere (because I'm trying to make money from it), but you could build it from the source available on <a href="https://github.com/bgreenbones/drumPracticeHelper">github</a>. It is built using Flutter, which can get you up and running desktop, mobile, or web.
    
    <div id="projectsGrid">
      {/* <div className="projects" style={{paddingRight:"1rem"}}><h3 style={{textAlign:"start"}}>Upcoming Projects</h3>{UpcomingProjects()}</div>
      <div className="projects"><h3 style={{textAlign:"start"}}>Past Projects</h3>{PastProjects()}</div> */}
    </div>
  </div>
</div>);

export default Tech;
