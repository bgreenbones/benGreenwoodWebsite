import SankeyBio from "../SankeyBio";


  // ABOUT PAGE
  const officialBio = <><div className="bioParagraph">I think my background is a little hectic, so I want to tell my story with a little data visualization.</div>
                      <div className="bioParagraph">The following Sankey plot of my life provides a bird's eye view instead of a wall of text. By hovering your mouse over the paths, you can get specific details on jobs I've worked (e.g. a resume) or how I got into different instruments. The size of those paths represents the amount of time and energy I was putting into different things. Time flows left to right (past to present).</div>
                      </>

const Bio = () => <>
<div>
<section>
      <h2>bio</h2>
      <div className="bio-section">
        {/* <span className="bio-photo left"><img src="../assets/mirror.jpg" alt="Vitelotte"></img></span> */}
        <span>{ officialBio }</span>
      </div>
      <div className="bio-section">
        <SankeyBio></SankeyBio>
        {/* <span className="bio-photo left desktop-only"><img src="../assets/kiyoe-action-shot.jpg" alt="Vitelotte"></img></span>
        <span className="bio-photo right"><img src="../assets/sun-action-shot.jpg" alt="Vitelotte"></img></span>
        <span style={{float:"center"}}>
          <h4>What is "Vitelotte?"</h4>
          Vitelotte is the name of a variety of purple potatoes. A small pun/joke about Jacquet de la Guerre/Jacket potatoes (as they call baked potatoes in the UK) turned into an ensemble name that sounds  pretentious, but is decidedly not.
          <h4>Sun</h4>
          Sun plays many keyboard instruments but mostly the piano. You can visit sunchangmusic.com for more information.
          <h4>Kiyoe</h4>
          Kiyoe is a violinist who also plays viola. Connect with her at <a href="https://www.kiyoematsuuraviolin.com">kiyoematsuuraviolin.com</a>.
        </span> */}
      </div>
        {/* <span className="bio-photo right mobile-only"><img src="../assets/kiyoe-action-shot.jpg" alt="Vitelotte"></img></span> */}
</section>
</div>
    </>;

export default Bio;
