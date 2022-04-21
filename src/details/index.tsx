import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./details.css";

function Details() {
  return (
    <div className="details-container">
      <div className="details-vertical-spacer"></div>
      <div className="details-inner-container">
        <div className="details-name-container">
          <TextField
            id="filled-textarea"
            label="First Name"
            className="details-textfield-half"
            InputProps={{ disableUnderline: true }}
            variant="filled"
          />

          <TextField
            id="filled-textarea"
            label="Last Name"
            className="details-textfield-half"
            InputProps={{ disableUnderline: true }}
            variant="filled"
          />
        </div>
        <div className="details-full-width-container">
          <TextField
            id="filled-textarea"
            label="Phone"
            className="details-textfield"
            InputProps={{ disableUnderline: true }}
            variant="filled"
            style={{ width: "100%" }}
          />
        </div>
        <div className="details-full-width-container">
          <TextField
            id="filled-textarea"
            label="Email"
            className="details-textfield"
            InputProps={{ disableUnderline: true }}
            variant="filled"
          />
        </div>
        <div className="details-full-width-container">
          <TextField
            id="filled-textarea"
            label="Password"
            type="password"
            className="details-textfield"
            InputProps={{ disableUnderline: true }}
            variant="filled"
          />
        </div>
        <div className="details-full-width-container">
          <Button className="details-button">Next</Button>
        </div>
      </div>
    </div>
  );
}

export default Details;
