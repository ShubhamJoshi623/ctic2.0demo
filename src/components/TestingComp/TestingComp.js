import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import "../Login/index.0626f97b.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../../store/tasks";
import { Trans, useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const TestingComp = () => {
  const { t, i18n } = useTranslation();

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [effectcount, seteffectCount] = useState(0);
  const [effect1count, seteffect1Count] = useState(0);
  const [effect2count, seteffect2Count] = useState(0);
  const [inputValue, setInputValue] = useState(null);

  const inputElement = useRef("");
  const previousInputValue = useRef("");

  const focusInput = () => {
    inputElement.current.focus();
  };
  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
    { value: "test", label: "Test" },
    { value: "random", label: "Random" },
    { value: "lender", label: "Lender" },
    { value: "mortgagor", label: "Mortgagor" },
    { value: "tortgagor", label: "Tortgagor" },
    { value: "rortgagor", label: "Rortgagor" },
    { value: "eortgagor", label: "Eortgagor" },
    { value: "wortgagor", label: "Wortgagor" },
  ];

  //custom autocomplete-
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");

  //custom autocomplete-

  const setselectitem = (item) => {
    setSearch(item);
    setDisplay(false);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     seteffectCount((effectcount) => effectcount + 1);
  //   }, 1000);
  //   // seteffectCount((effectcount) => effectcount + 1);
  // });

  // useEffect(() => {
  //   setTimeout(() => {
  //     seteffect1Count((effect1count) => effect1count + 1);
  //   }, 1000);
  //   // seteffectCount((effectcount) => effectcount + 1);
  // },[]);

  // useEffect(() => {
  //   // setTimeout(() => {
  //   //   seteffect1Count((effect1count) => effect1count + 1);
  //   // }, 1000);
  //   // seteffectCount((effectcount) => effectcount + 1);
  // },[effect2count]);

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <div className="flex place-content-center my-8">
        <div className="items-center mx-20">
          <div className="container px-20 py-5 border border-gray-500 border-solid rounded-md">
            <div>
              <span className="text-xl font-bold">
                Autocomplete from react-select library
              </span>
              <Select options={options} defaultValue={options[1]} />
            </div>

            <div>
              <span className="text-xl font-bold">
                Autocomplete with multi-select from react-select library
              </span>
              <Select
                isMulti
                defaultValue={options[1]}
                name="colors"
                options={options}
                closeMenuOnSelect={false}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>

          <div className="container my-8 px-5 py-5 border  border-gray-500 border-solid rounded-md">
            <div>
              <span className="text-xl font-bold">Custom Autocomplete</span>
              <input
                id="customautocomplete"
                onClick={() => {
                  setDisplay(true);
                }}
                placeholder="Type to Search"
                className="border text-gray-900 text-sm rounded-[2px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
            {display && (
              <div className="options-container my-1 border border-gray-200 border-solid rounded-md overflow-y-scroll">
                {options
                  .filter(
                    ({ value }) => value.indexOf(search.toLowerCase()) > -1
                  )
                  .map((v, i) => {
                    return (
                      <div
                        onClick={() => {
                          setselectitem(v.value.toString(), true);
                        }}
                        className="option pl-2 py-2 "
                        key={i}
                      >
                        <span>{v.label}</span>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
          <div className="container my-8 px-5 py-5 border  border-gray-500 border-solid rounded-md">
            <span className="text-xl font-bold">Redux Toolkit Example</span>
            <h2>value = {count}</h2>

            <button
              className="text-white bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={() => {
                dispatch(increment());
              }}
            >
              increment
            </button>
            <button
              className="text-white bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={() => {
                dispatch(incrementByAmount(50));
              }}
            >
              increment by 50
            </button>
            <button
              className="text-white bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={() => {
                dispatch(decrement());
              }}
            >
              decrement
            </button>
          </div>

          <div className="container my-8 px-5 py-5 border  border-gray-500 border-solid rounded-md">
            <span className="text-xl font-bold">Use Effect</span>
            <h2 className="text-xl py-4">
              {" "}
              * useEffect accepts two arguments. The second argument is
              optional. useEffect(function, dependency)
            </h2>

            <span className="text-xl text-blue-600 font-bold">
              I've rendered {effectcount} times!
            </span>
            <div>* this will keep on rendering as it becomes cyclic event </div>
            <div>
              componentmounted -- useffect triggered -- count increases --
              newcount updated in div causing rerender -- componentupdated --
              useffect again triggered{" "}
            </div>

            <h2 className="text-xl py-5 ">
              {" "}
              If we want to run only one time after components are mounted need
              to pass second parameter as empty array "[]"
            </h2>

            <span className="text-xl text-blue-600 font-bold">
              I've rendered {effect1count} times!
            </span>

            <h2 className="text-xl py-5">
              {" "}
              If we want to run only some specific component are updated need to
              pass second parameter as prop on which it depends
            </h2>
            <button
              className="text-white bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={() => {
                seteffect2Count((c) => c + 1);
              }}
            >
              update component
            </button>
            <div className="text-xl text-blue-600 font-bold">
              Count: {effect2count} times!
            </div>
          </div>

          <div className="container my-8 px-5 py-5 border  border-gray-500 border-solid rounded-md">
            <span className="text-xl font-bold">UseRef</span>
            <div className="text-xl py-4">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly. In the typical React dataflow, props are the only way
              that parent components interact with their children. To modify a
              child, you re-render it with new props. However, there are a few
              cases where you need to imperatively modify a child outside of the
              typical dataflow. The child to be modified could be an instance of
              a React component, or it could be a DOM element. For both of these
              cases, React provides an escape hatch. Essentially, useRef is like
              a “box” that can hold a mutable value in its .current property.
              <div className="py-4">
                You might be familiar with refs primarily as a way to access the
                DOM. If you pass a ref object to React with {}
                {`<div ref={myRef} />`}, React will set its .current property to
                the corresponding DOM node whenever that node changes.
              </div>
              <div className="py-4">
                When to Use Refs There are a few good use cases for refs:
                Managing focus, text selection, or media playback. Triggering
                imperative animations. Integrating with third-party DOM
                libraries.
              </div>
              <div className="py-4">
                useRef() only returns one item. It returns an Object called
                current. When we initialize useRef we set the initial value:
                useRef(0).
              </div>
            </div>

            <div className="py-4">
              <span className="text-xl text-blue-600 font-semibold">
                Example 1:
              </span>
              <input type="text" className="my-2" ref={inputElement} />
              <button
                className="text-white bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                onClick={focusInput}
              >
                Focus Input TextBox
              </button>
            </div>

            <div className="py-4">
              <span className="text-xl text-blue-600 font-semibold">
                Example 2: Tracking state change
              </span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <h2 className="font-bold">Current Value: {inputValue}</h2>
              <h2 className="font-bold">
                Previous Value: {previousInputValue.current}
              </h2>
              <h2 className="py-2">
                This time we use a combination of useState, useEffect, and
                useRef to keep track of the previous state. In the useEffect, we
                are updating the useRef current value each time the inputValue
                is updated by entering text into the input field.
              </h2>
            </div>
          </div>
          <div className="container my-8 px-5 py-5 border  border-gray-500 border-solid rounded-md">
            <span className="text-xl font-bold">React-hook-form</span>
            <div className="text-md">
              React Hook Form reduces the amount of code you need to write while
              removing unnecessary re-renders.You have the ability to isolate
              component re-renders which leads to better performance on your
              page or app. Performance is an important aspect of user experience
              in terms of building forms. You will have the ability to subscribe
              to individual input and form State update without re-rendering the
              entire form.
              <br />
              <br />
              One of the key concepts in React Hook Form is to register your
              component into the hook. This will make its value available for
              both the form validation and submission.
            </div>
            <div className="container p-login-container max-w-login-container w-2/4">
              <Link
                to="/ReactHookForm"
                className="btn__primary w-full py-3 px-4 text-center"
              >
                {" "}
                React-Hook-Form Demo{" "}
              </Link>
             
            </div>
            <div className="container p-login-container max-w-login-container w-2/4">
              <Link
                to="/ReactHookDynamicForm"
                className="btn__primary w-full py-3 px-4 text-center"
              >
                {" "}
                React-Hook-Form Dynamic Form Demo{" "}
              </Link>
            </div>
          </div>

          <div className="container my-8 px-5 py-5 border  border-gray-500 border-solid rounded-md">
            <span className="text-xl font-bold">Formik Form</span>
            <div>
              Formik is a flexible library. It allows you to decide when and how
              much you want to use it. We can control how much functionality of
              the Formik library we use. It can be used with HTML input fields
              and custom validation rules, or Yup and the custom components it
              provides. Formik makes form validation easy! When paired with Yup,
              they abstract all the complexities that surround handling forms in
              React.
              <br />
              <br />
              Yup is a JavaScript object schema validator. While it has many
              powerful features, we’ll focus on how it helps us create custom
              validation rules so we don’t have to. This is a sample Yup object
              schema for a sign-up form.
              <br />
              <div className="bg-blue-100">
                <code className="bg-blue-100">
                  {`
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),`}
                </code>
                <br />
                <code>
                  {`
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),`}
                </code>
                <br />
                <code>
                  {`
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(
/^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    ),
    `}
                </code>
                <br />
                <code>
                  {`
  email: Yup.string().email().required("Email is required"),
  `}
                </code>
                <br />
                <code>
                  {`
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});`}
                </code>
              </div>
            </div>
            <div className="container p-login-container max-w-login-container w-2/4">
              <Link
                to="/FormikFormDemo"
                className="btn__primary w-full py-3 px-4 text-center"
              >
                {" "}
                Formik Form Demo{" "}
              </Link>
            </div>
          </div>
          <div className="container my-8 px-5 py-5 border  border-gray-500 border-solid rounded-md">
            <span className="text-xl font-bold">i18Next Demo</span>
            <div className="text-md">multilanguage demo</div>
            <div className="container p-login-container max-w-login-container w-2/4">
              <button
                onClick={() => i18n.changeLanguage("en")}
                className="btn__primary text-white float-center bg-blue-700 rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
              >
                English
              </button>
              <button
                onClick={() => i18n.changeLanguage("fr")}
                className="btn__primary text-white float-center bg-blue-700 rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
              >
                French
              </button>

              <div className="my-2 mx-2 text-xl font-semibold">
                {t("test")}{" "}
              </div>
              <Trans
                className="my-2 mx-2 text-xl font-semibolds"
                i18nKey="test"
              >
                test
              </Trans>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestingComp;
