import React from "react";

const PasswordStrengthIndicator = ({
  validity: { minChar, number, specialChar, lowerCase, upperCase, websiteName },
}) => {
  return (
    <>
      <div className="pw-requirements ml-4 w-[460px]">
        <div className="flex">
          <img
            className="fex self-start mt-0 mr-[10px]"
            src="../../images/alert-circle-secundary.e6846e30.svg"
            alt="Alert Icon"
          />
          <p className="text-base font-semibold text-secondary-burgundy">
            {" "}
            Your new password must contain:
          </p>
        </div>

        <ul
          type="1"
          className="text-base font-semibold text-secondary-burgundy ml-[30px]"
        >
          <PasswordStrengthIndicatorItem
            isValid={minChar}
            text="1. a minimum of 8 characters"
          />
          <PasswordStrengthIndicatorItem
            isValid={upperCase}
            text="2. at least one uppercase letter (A-Z)"
          />
          <PasswordStrengthIndicatorItem
            isValid={lowerCase}
            text="3. at least one lowercase letter (a-z)"
          />
          <PasswordStrengthIndicatorItem
            isValid={number}
            text="4. at least one number (0-9)"
          />
          <PasswordStrengthIndicatorItem
            isValid={specialChar}
            text="5. at least one special characters (#,$)"
          />
          <PasswordStrengthIndicatorItem
            isValid={websiteName}
            text="6. should not contain login credentials or website names"
          />
        </ul>
      </div>
    </>
  );
};

const PasswordStrengthIndicatorItem = ({ isValid, text }) => {
  const highlightClass = isValid
    ? "pw-success"
    : isValid !== null
    ? "pw-error"
    : "";
  return <li className={highlightClass + " pw-item"}>{text}</li>;
};

export default PasswordStrengthIndicator;
