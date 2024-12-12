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
                          <h2>Projects</h2>
                          {/* <h2 style={{textAlign:"start"}}>Projects</h2> */}
                          <div id="projectsGrid">
                            {/* <div className="projects" style={{paddingRight:"1rem"}}><h3 style={{textAlign:"start"}}>Upcoming Projects</h3>{UpcomingProjects()}</div>
                            <div className="projects"><h3 style={{textAlign:"start"}}>Past Projects</h3>{PastProjects()}</div> */}
                          </div>
                        </div>
                      </div>;

export default Tech;
