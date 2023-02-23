import React, { useState, useEffect } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import axios, { formToJSON } from "axios";

let renderCount = 0;

export default function ReactHookDynamicForm() {
  const [Qtns, setQtns] = useState([]);
  useEffect(() => {
    const response = async () => {
      let result = await axios.post(
        "/api/CTICQuestionsAdmin/ReadUnifiedQuestions",
        {
          RequestObject: {
            FileID: 437349,
            LanguageCode: "en-CA",
          },
        }
      );
      setQtns(result.data.ResponseObject.Questions);
      console.log(
        "🚀 ~ file: ReactHookDynamicForm.js:22 ~ response ~ Qtns",
        Qtns
      );
    };
    response();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ defaultValues: { books: [{ value: "" }] } });
  //  console.log("🚀 ~ file: ReactHookForm.js:18 ~ ReactHookForm ~ errors", errors)

  const { fields, remove, append } = useFieldArray({
    name: "books",
    control,
  });

  const onSubmit = (test) => {
    console.log(
      "🚀 ~ file: ReactHookDynamicForm.js:49 ~ onSubmit ~ test",
      test
    );
  };

  renderCount++;
  return (
    <div>
      <div>
        <div className="container my-8 px-5 py-5 border  border-gray-500 border-solid rounded-md">
          <span className="text-xl font-bold">
            React-hook-form Dynamic Form demo
          </span>
          <button
            className="text-white float-right bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            disabled
          >
            Render Count : {renderCount}
          </button>

          <div className="container p-login-container max-w-login-container w-2/4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <ul>
                {/* Here we loop thru fields array and render each field as item, and we get the index as a second parameter */}

                {/* { Qtns.length>0 && Qtns.map((item,index)=>{
    
    return( <div key={index}>
     <label>{item.QuestionText} index</label>
     
     </div>)
     })
     
     } */}
                <Questions qtns={Qtns} />

                {fields.map((item, index) => (
                  // Make sure you set the key to something unqiue
                  <li key={item.id}>
                    <Controller
                      name={`books.${index}.value`}
                      control={control}
                      defaultValue={item.value}
                      render={({ field }) => (
                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          {...field}
                        />
                      )}
                    />
                    <button
                      className="text-white float-right bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                      onClick={() => remove(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>

              <button
                className="text-white float-right bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                onClick={() => append({ value: "" })}
              >
                Add new book
              </button>
              <button
                className="btn__primary bg-primary-yellow w-full py-3"
                type="submit"
              >
                Buy
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const Questions = (props) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  console.log(props.qtns);
  return (
    <>
      {props.qtns.length > 0 &&
        props.qtns.map((item, index) => {
          return (
            <div>
              {item.QuestionInterface === "radiobutton" && (
                <div
                  key={item.ID}
                  id={item.ID + " " + item.StandardQuestionName}
                >
                  <label
                    htmlFor={item.ID + " " + item.StandardQuestionName}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {item.QuestionText}
                  </label>
                  {item.Options.map((v, i) => {
                    return (
                      <div key={v.ID}>
                        <input
                          type="radio"
                          name={v.QuestionAnswerLabel}
                          {...register(v.QuestionAnswerLabel)}
                        />
                        {v.QuestionAnswerLabel}
                        {/* {v.QuestionAnswerLabel} */}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
    </>
  );
};
