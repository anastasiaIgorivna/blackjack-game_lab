import CookieConsent from "react-cookie-consent";

function CookiePopup() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="blackjackCookieConsent"
      style={{ background: "#222" }}
      buttonStyle={{ color: "#000", fontSize: "13px" }}
      declineButtonStyle={{ fontSize: "13px" }}
      expires={150}
    >
      This website uses cookies to improve user experience and comply with GDPR.
    </CookieConsent>
  );
}

export default CookiePopup;