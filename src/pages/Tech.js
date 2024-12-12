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

const Tech = () => <div id="projectsBackground">
                        <div id="projectsOverlay">
                          <h2>projects</h2>
                          <h3>music generator</h3>
                          My foray into algorithmic composition, conveniently embedded in a DAW plugin.
                          <p/>Today, generative AI allows us to generate stuff that sounds like anything we've heard before.
                          <p/>My generator outputs harmonies, rhythms, melodies, and basslines based on abstract concepts that I've manually coded up, instead of training on millions/billions of examples.
                          <p/>Therefore, it's extremely efficient and free of copyright issues, and it outputs weird stuff that simultaneously sounds like nothing I've heard before, and seems oddly close to the music swimming around in my subconcious brain.
                          <p/>
                          <img style={{maxWidth: "100%", borderRadius: "10px"}} src="../media/projects/generateStuffScreenshot.png"></img>
                          <div style={{fontSize: 12}}>Pictured: a beautiful UI that makes it clear I am trying to make tons of money off this thing.</div>
                          <p/>Some stuff this thing has spat out (sounds could be whatever synths you want, as long as you can get MIDI signals into them):
                          
                          <div id="projectsGrid">
                            {/* <div className="projects" style={{paddingRight:"1rem"}}><h3 style={{textAlign:"start"}}>Upcoming Projects</h3>{UpcomingProjects()}</div>
                            <div className="projects"><h3 style={{textAlign:"start"}}>Past Projects</h3>{PastProjects()}</div> */}
                          </div>
                        </div>
                      </div>;

export default Tech;
