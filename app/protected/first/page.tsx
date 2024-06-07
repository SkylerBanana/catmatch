"use client";
import { SubmitButton } from "@/app/login/submit-button";
import checkstatus from "@/app/serveractions/checkstatus";
import { useState } from "react";

export default function first() {
  enum FormStep {
    STEP_ONE = "stepone",
    STEP_TWO = "stepTwo",
    STEP_THREE = "stepThree",
  }

  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState<FormStep>(FormStep.STEP_ONE);

  checkstatus;

  async function Determine() {
    console.log("aaa");
  }

  return (
    <div className="flex-1 flex flex-col w-full px-8  justify-center  bg-gradient-to-r ">
      <form className="animate-in flex-1 flex flex-col  justify-center items-center text-black ">
        <div className="flex flex-col bg-white rounded-lg  p-5 justify-between gap-3  max-h-[350px] max-w-[350px] min-[275px]:w-full  flex-1">
          <div className="flex flex-col  gap-2">
            <h1 className="text-center">Tell Us About Yourself</h1>
            {currentStep === FormStep.STEP_ONE && (
              <>
                <div className="flex flex-col space-y-2">
                  <label className="text-md" htmlFor="firstname">
                    First Name
                  </label>
                  <input
                    className="rounded-md px-4 py-2  border border-black"
                    name="firstname"
                    placeholder="Peanut"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-md" htmlFor="lastname">
                    Last Name
                  </label>
                  <input
                    className="rounded-md px-4 py-2 bg-inherit border border-black"
                    name="lastname"
                    placeholder="thegreat"
                    required
                  />
                </div>
                <div className="flex flex-col  ">
                  <label>Gender</label>
                  <div className="flex flex-row gap-8 justify-center items-center">
                    <label>
                      <input
                        type="radio"
                        id="option1"
                        name="options"
                        value="Male"
                      />
                      Male
                    </label>

                    <label>
                      <input
                        type="radio"
                        id="option2"
                        name="options"
                        value="Female"
                      />
                      Female
                    </label>
                  </div>
                </div>
              </>
            )}
            <SubmitButton
              formAction={Determine}
              className="bg-blue-700 rounded-md px-4 py-2 text-foreground border border-black "
              pendingText="One Moment"
            >
              Next
            </SubmitButton>
          </div>
        </div>
      </form>
    </div>
  );
}
