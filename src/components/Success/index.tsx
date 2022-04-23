import { useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const state = location.state as any;
  console.log("Inside Location");
  return (
    <div>
      <p>Thanks {state.firstName}! We've received your application</p>
      <p>
        We'll process your application as soon as possible and send you a
        decision with 30 days to {state.phoneNumber} or {state.emailAddress}. We
        will contact you in case more information is needed.
      </p>
      <p>
        While we're reviewing your application, please don't submit another
        application for the uPet's breeder program.
      </p>
    </div>
  );
}

export default Success;
