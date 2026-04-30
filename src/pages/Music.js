

const Music = () => <>
  <div>
  <section>
      <h2>music</h2>
    {/* <div className="album-section"> */}
      {/* <div className="album-paragraph">Transcriptions, Tracks, Compositions? </div> */}
      {/* <span className="album-photo"><img src="../assets/.png" alt="Screenshot"></img></span> */}
      

      {/* <div className="album-paragraph"><iframe width="560" height="315" src="https://www.youtube.com/embed/8V3pKRtn-y0?si=l88DVJLWEhlpp2mt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> */}
      
      <p/><audio controls>
        <source src="../media/projects/music/intoPiecesIntoPlaceJune17th.mp3"></source>
      </audio>
      <p/><audio controls>
        <source src="../media/projects/music/LCloops.mp3"></source>
      </audio>
      <p/><div className="album-paragraph"><iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340357303&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{fontSize: "10px", color: "#cccccc",lineBreak: "anywhere",wordBreak: "normal",overflow: "hidden",whiteSpace: "nowrap",textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",fontWeight: 100}}><a href="https://soundcloud.com/gwoodbones" title="Ben Greenwood" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Ben Greenwood</a> · <a href="https://soundcloud.com/gwoodbones/aug9" title="aug9" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>aug9</a></div></div>
      <div className="album-paragraph">
        <h3>drumming transcriptions</h3>
        <a href="../media/scores/transcriptions/marcusGilmoreMasterclass.pdf">Marcus Gilmore Masterclass</a> - a solo in simultaneous quint and triplet time by Marcus Gilmore - watch <a href="https://youtu.be/A8T-uJGMfHw?feature=shared">here</a>. <a href="../media/scores/transcriptions/marcusGilmoreAnalysis.pdf">Here is reduction</a> of the first section, which will help you grok the big idea therein.<br/>
        <a href="../media/scores/transcriptions/tonyWilliams7Steps.pdf">Seven Steps to Heaven</a> - Tony Williams solo from the Miles Davis album "Four & More."<br/>
        <a href="../media/scores/transcriptions/matrix.pdf">Matrix</a> - Roy Haynes' comping from the first 5 choruses on Chick Corea's "Matrix" from the album "Now He Sings, Now He Sobs."<br/>
        <a href="../media/scores/transcriptions/soul_cowboy.pdf">Soul Cowboy</a> - Some of Bill Evan's comping on Pat Metheny's tune.<br/>
        <a href="../media/scores/transcriptions/farMoreDrums.pdf">Far More Drums</a> - Joe Morello's full solo.<br/>
        
        <h3>other transcriptions</h3>
        <a href="../media/scores/transcriptions/nairianOdyssey.pdf">Nairian Odyssey</a> - Tigran Hamasyan's composition for piano.<br/>
        <a href="../media/scores/transcriptions/beekeeper-Mandolin_solo.pdf">The Beekeeper</a> - Chris Thile's solo on mandolin.<br/>

        <h3>drumming exercises</h3>
        <a href="../media/scores/exercises/grids.pdf">Grids</a> - a system for enumerating 2-note melodies with different rhythms. Choose any core rhythm and apply any orchestration pattern to it.<br/>
        <a href="../media/scores/exercises/oddSubdivisionComfortBuilder.pdf">Odd Subdivision Comfort Builder</a> - stickings in 5 and 7<br/>
        <a href="../media/scores/exercises/reverseSwingIndependence.pdf">Reverse Swing Independence</a> - Play melody on the cymbal while holding an ostinato in your snare and kick drum, which is not usually how we do things.<br/>
        <a href="../media/scores/exercises/dupleSwingIndependence.pdf">Duple Swing Independence</a> - Tired of the swing independence exercises in triple time?<br/>
        <a href="../media/scores/exercises/linearTripletCells.pdf">Linear Triplet Cells</a> - Building blocks for triplet stuff between the hands and right foot.<br/>
        <a href="../media/scores/exercises/2and3beatStickings.pdf">2 and 3 beat stickings</a> - avoids of the middle triplet in the time-keeping hand.<br/>
      </div>
    {/* </div> */}
  </section>
  </div>
    </>;

export default Music;
