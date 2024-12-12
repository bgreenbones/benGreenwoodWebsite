import TextField from "@mui/material/TextField";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const ContactOption = ({ imgFilename, label, buttonLabel, clickHandler}) => 
    <span className="contact-option"><div>
    <img src={`/assets/icons/${imgFilename}.png`} alt="Vitelotte"></img>
    <div>{label}</div>
    <button onClick={clickHandler} variant="outlined">{buttonLabel}</button></div>
    </span>;

function Contact() {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(250,230,200,0.9)',
    boxShadow: 24,
    p: 4,
  };
  
  const buttonStyle ={
    position: 'relative',
    border: '1px solid #000',
    borderRadius: '3px',
    transform: 'translate(-50%, 0%)',
    left: '50%',
    color: '#000',
    background: 'rgba(270,240,220,0.2)',
  }

  const [emailModalOpen, setEmailModalOpen] = React.useState(false);
  const handleEmailOpen = () => setEmailModalOpen(true);
  const handleEmailClose = () => setEmailModalOpen(false);

  const [mailingListModalOpen, setMailingListModalOpen] = React.useState(false);
  const handleMailingListOpen = () => setMailingListModalOpen(true);
  const handleMailingListClose = () => setMailingListModalOpen(false);

  return <>
  <div className="contactForm">
  <section>
  
    <h1>Connect with us!</h1>
    <div><img id="contactImage" src="../assets/contact.jpg" alt="Vitelotte"></img></div>

    <ContactOption imgFilename="email" label="Email Us" buttonLabel="EMAIL" clickHandler={handleEmailOpen}/>
    <ContactOption imgFilename="mailingList" label="Join Our Mailing List" buttonLabel="JOIN MAILING LIST" clickHandler={handleMailingListOpen}/>
    <ContactOption imgFilename="attend" label="Attend A Performance" buttonLabel="PERFORMANCE SCHEDULE" clickHandler={() => window.location.assign(window.location.protocol + "//" + window.location.host + "/content/projects")}/>
  </section>
</div>
    <script src="https://web3forms.com/client/script.js" async defer></script>
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={mailingListModalOpen}
        onClose={handleMailingListClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={mailingListModalOpen}>
          <Box sx={modalStyle}>
          <form action="//mc.us13.list-manage.com/signup-form/subscribe?u=6f97a4b3606da0d0fa5b5f72b&id=005458e7f0" method="POST">
              <input type="hidden" name="access_key" value="puturkeyhere" />
              <div>
              <TextField fullWidth={true} margin="normal" label="First name" type="text" name="FNAME" id="mc-FNAME" required />
              </div>
              <div>
              <TextField fullWidth={true} margin="normal" label="Last name" type="text" name="LNAME" id="mc-LNAME" required />
              </div>
              <div>
              <TextField fullWidth={true} margin="normal" label="E-mail" type="email" name="EMAIL" id="mc-EMAIL" required />
              </div>
              <div class="h-captcha" data-captcha="true"></div>
              <button style={buttonStyle} type="submit">Subscribe</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={emailModalOpen}
        onClose={handleEmailClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={emailModalOpen}>
          <Box sx={modalStyle}>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="puturkeyhere" />
              <div>
              <TextField fullWidth={true} margin="normal" label="Name" type="text" name="name" required />
              </div>
              <div>
              <TextField fullWidth={true} margin="normal" label="E-mail" type="email" name="email" required />
              </div>
              <TextField multiline={true} fullWidth={true} margin="normal" label="Message" name="message" required />
              <div class="h-captcha" data-captcha="true"></div>
              <button style={buttonStyle} type="submit">Send e-mail</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  </>;
}

export default Contact;