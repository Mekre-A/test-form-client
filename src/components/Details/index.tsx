import { TextField, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import validator from "validator";
import MuiPhoneNumber from "material-ui-phone-number";
import formUpload from "../../services/api/formUpload";
import "./details.css";

function Details() {
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [emailAddress, setEmailAddress] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const validateForm = (): Boolean => {
    if (!firstName || !lastName || !phoneNumber || !emailAddress || !password) {
      return false;
    }
    if (!validator.isMobilePhone(phoneNumber as string)) {
      return false;
    }
    if (!validator.isEmail(emailAddress as string)) {
      return false;
    }
    if (
      !validator.isStrongPassword(password as string, {
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minLength: 8,
        minSymbols: 0,
      })
    ) {
      return false;
    }
    return true;
  };
  const uploadData = async () => {
    if (isLoading) {
      return;
    }
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    const formData = {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      password,
    };
    const response = await formUpload(formData);
    console.log(response);
    setIsLoading(false);
  };

  function capitalizeFirstLetterName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

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
            type="name"
            onChange={(e) => {
              if (e) {
                setFirstName(capitalizeFirstLetterName(e.target.value));
              }
            }}
            error={firstName === null ? false : firstName ? false : true}
            helperText={
              firstName === null
                ? false
                : firstName
                ? ""
                : "Please enter your first name"
            }
            value={firstName}
            name="firstName"
          />

          <TextField
            id="filled-textarea"
            label="Last Name"
            className="details-textfield-half"
            InputProps={{ disableUnderline: true }}
            variant="filled"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              if (e) {
                setLastName(capitalizeFirstLetterName(e.target.value));
              }
            }}
            error={lastName === null ? false : lastName ? false : true}
            helperText={
              lastName === null
                ? false
                : lastName
                ? ""
                : "Please enter your last name"
            }
          />
        </div>
        <div className="details-vertical-spacer-small"></div>
        <div className="details-full-width-container">
          <MuiPhoneNumber
            id="filled-textarea"
            label="Phone"
            defaultCountry="us"
            onlyCountries={["us"]}
            className="details-textfield"
            InputProps={{ disableUnderline: true }}
            variant="filled"
            name="phone"
            value={phoneNumber}
            onChange={(e) => {
              console.log(e);
              if (e) {
                setPhoneNumber(e as string);
              }
            }}
            error={
              phoneNumber === null
                ? false
                : validator.isMobilePhone(phoneNumber)
                ? false
                : true
            }
            helperText={
              phoneNumber === null
                ? false
                : validator.isMobilePhone(phoneNumber)
                ? ""
                : "Please enter a valid phone number"
            }
          />
        </div>
        <div className="details-vertical-spacer-small"></div>
        <div className="details-full-width-container">
          <TextField
            id="filled-textarea"
            label="Email"
            className="details-textfield"
            InputProps={{ disableUnderline: true }}
            variant="filled"
            name="email"
            value={emailAddress}
            onChange={(e) => {
              if (e) {
                setEmailAddress(e.target.value.toLocaleLowerCase());
              }
            }}
            error={
              emailAddress === null
                ? false
                : validator.isEmail(emailAddress)
                ? false
                : true
            }
            helperText={
              emailAddress === null
                ? false
                : validator.isEmail(emailAddress)
                ? ""
                : "Please enter a valid email address"
            }
          />
        </div>
        <div className="details-vertical-spacer-small"></div>
        <div className="details-full-width-container">
          <TextField
            id="filled-textarea"
            label="Password"
            type="password"
            className="details-textfield"
            InputProps={{ disableUnderline: true }}
            variant="filled"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={
              password === null
                ? false
                : validator.isStrongPassword(password, {
                    minUppercase: 1,
                    minLowercase: 1,
                    minNumbers: 1,
                    minLength: 8,
                    minSymbols: 0,
                  })
                ? false
                : true
            }
            helperText={
              password === null
                ? false
                : validator.isStrongPassword(password, {
                    minUppercase: 1,
                    minLowercase: 1,
                    minNumbers: 1,
                    minLength: 8,
                    minSymbols: 0,
                  })
                ? ""
                : "Oops! You need a password longer than 8 characters with numbers and letters"
            }
          />
        </div>
        <div className="details-vertical-spacer-small"></div>

        <div className="details-full-width-container">
          <Button
            disabled={validateForm() ? false : true}
            onClick={uploadData}
            className={
              validateForm() ? "details-button" : "details-button-disabled"
            }
          >
            {isLoading ? (
              <CircularProgress size={"25px"} color={"inherit"} />
            ) : (
              "Next"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Details;
