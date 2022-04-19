import "./Contact.scss";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      enquiry,
      email,
      message,
    });
  }

  // href="mailto:jrandall@randallandassoc.com?subject=Enquiry&body=foobar"

  return (
    <>
      <section className="form">
        <div>
          <h1>Contact us</h1>
          <p>Get in touch</p>

          <form onSubmit={handleSubmit}>
            <TextField
              id="first-name"
              className="half"
              margin="normal"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name"
              variant="standard"
              required
            />

            <TextField
              id="last-name"
              className="half"
              margin="normal"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name"
              variant="standard"
              required
            />

            <FormControl variant="standard" className="half" margin="normal">
              <InputLabel id="enquiry">Area of Enquiry</InputLabel>
              <Select
                labelId="enquiry"
                id="demo-simple-select-standard"
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
                label="Age"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Property & Conveyancing</MenuItem>
                <MenuItem value={20}>Personal Injury</MenuItem>
                <MenuItem value={30}>Wills & Estates</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="email"
              className="half"
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="standard"
              required
            />

            <TextField
              id="message"
              margin="normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={4}
              label="Enquiry"
              variant="outlined"
              required
              fullWidth
            />

            <Button
              id="submit"
              margin="normal"
              type="submit"
              variant="contained"
            >
              Enquire
            </Button>
          </form>
        </div>
      </section>

      <article>
        <div>
          <ul>
            <img className="icons" src="/phone-icon-white.png" alt="phone" />
            <h3>Phone</h3>
            <p>Talk to our experienced lawyers</p>
            <p>(02) 837 876 98</p>
          </ul>

          <ul>
            <img className="icons" src="/email.png" alt="email" />
            <h3>Email</h3>
            <p>Email us to book an appointment</p>
            <a href="mailto:mail@randallandassoc.com">
              mail@randallandassoc.com
            </a>
          </ul>

          <ul>
            <img className="icons" src="/video-white.png" alt="video" />
            <h3>Video Consultation</h3>
            <p>
              We are pleased to offer video consultations for clients. Please
              complete the form above or call us to arrange an online meeting
            </p>
          </ul>
        </div>
      </article>
    </>
  );
}

export default Contact;
