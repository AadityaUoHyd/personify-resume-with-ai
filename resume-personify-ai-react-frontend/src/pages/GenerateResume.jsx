import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaPaperPlane, FaPlusCircle, FaRedo } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { generateResume } from "../api/ResumeService";
import { BiBook, BiRefresh } from "react-icons/bi";
import { useForm, useFieldArray } from "react-hook-form";
import Resume from "../components/Resume";

const GenerateResume = () => {
  const [data, setData] = useState({
    personalInformation: {
      fullName: "",
    },
    summary: "",
    skills: [],
    experience: [],
    education: [],
    certifications: [],
    projects: [],
    languages: [],
    interests: [],
  });

  const { register, handleSubmit, control, setValue, reset } = useForm({
    defaultValues: data,
  });

  const [showFormUI, setShowFormUI] = useState(false);
  const [showResumeUI, setShowResumeUI] = useState(false);
  const [showPromptInput, setShowPromptInput] = useState(true);

  const experienceFields = useFieldArray({ control, name: "experience" });
  const educationFields = useFieldArray({ control, name: "education" });
  const certificationsFields = useFieldArray({
    control,
    name: "certifications",
  });
  const projectsFields = useFieldArray({ control, name: "projects" });
  const languagesFields = useFieldArray({ control, name: "languages" });
  const interestsFields = useFieldArray({ control, name: "interests" });
  const skillsFields = useFieldArray({ control, name: "skills" });

  //handle form submit
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setData({ ...data });

    setShowFormUI(false);
    setShowPromptInput(false);
    setShowResumeUI(true);
  };

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {

    // server call to get resume
    try {
      setLoading(true);
      const responseData = await generateResume(description);
      console.log(responseData);
      reset(responseData.data);

      toast.success("Your Resume Generated Successfully!", {
        duration: 3000,
        position: "top-center",
      });
      setShowFormUI(true);
      setShowPromptInput(false);
      setShowResumeUI(false);
    } catch (error) {
      console.log(error);
      toast.error("Error During Generating Resume!");
    } finally {
      setLoading(false);
      setDescription("");
    }
  };

  const handleClear = () => {
    setDescription("");
    setLoading(false);
  };

  const renderInput = (name, label, type = "text") => (
    <div className="form-control w-full  mb-4">
      <label className="label">
        <span className="label-text text-base-content">{label}</span>
      </label>
      <input
        type={type}
        {...register(name)}
        className="input input-bordered rounded-xl w-full bg-base-100 text-base-content"
      />
    </div>
  );
  const renderFieldArray = (fields, label, name, keys) => {
    return (
      <div className="form-control w-full mb-4">
        <h3 className="text-xl font-semibold">{label}</h3>
        {fields.fields.map((field, index) => (
          <div key={field.id} className="p-4 rounded-lg mb-4 bg-base-100">
            {keys.map((key) => (
              <div key={key}>
                {console.log(`${name}`)}
                {renderInput(`${name}.${index}.${key}`, key)}
              </div>
            ))}
            <button
              type="button"
              onClick={() => fields.remove(index)}
              className="btn btn-error btn-sm mt-2"
            >
              <FaTrash className="w-5 h-5 text-base-content" /> Remove {label}
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            fields.append(
              keys.reduce((acc, key) => ({ ...acc, [key]: "" }), {})
            )
          }
          className="btn btn-secondary btn-sm mt-2 flex items-center"
        >
          <FaPlusCircle className="w-5 h-5 mr-1 text-base-content" /> Add{" "}
          {label}
        </button>
      </div>
    );
  };

  function showFormFunction() {
    return (
      <div className="w-full p-10">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">
          <BiBook className="text-accent" /> Resume Form
        </h1>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 space-y-6 bg-base-200 rounded-lg text-base-content"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInput("personalInformation.fullName", "Full Name")}
              {renderInput("personalInformation.email", "Email", "email")}
              {renderInput(
                "personalInformation.phoneNumber",
                "Phone Number",
                "tel"
              )}
              {renderInput("personalInformation.location", "Location")}
              {renderInput("personalInformation.linkedin", "LinkedIn", "url")}
              {renderInput("personalInformation.gitHub", "GitHub", "url")}
              {renderInput("personalInformation.portfolio", "Portfolio", "url")}
            </div>

            <h3 className="text-xl font-semibold">Summary</h3>
            <textarea
              {...register("summary")}
              className="textarea textarea-bordered w-full bg-base-100 text-base-content"
              rows={4}
            ></textarea>

            {renderFieldArray(skillsFields, "Skills", "skills", [
              "title",
              "level",
            ])}
            {renderFieldArray(experienceFields, "Experience", "experience", [
              "jobTitle",
              "company",
              "location",
              "duration",
              "responsibility",
            ])}
            {renderFieldArray(educationFields, "Education", "education", [
              "degree",
              "university",
              "location",
              "graduationYear",
            ])}
            {renderFieldArray(
              certificationsFields,
              "Certifications",
              "certifications",
              ["title", "issuingOrganization", "year"]
            )}
            {renderFieldArray(projectsFields, "Projects", "projects", [
              "title",
              "description",
              "technologiesUsed",
              "githubLink",
            ])}

            <div className="flex gap-3 mt-16  p-4 rounded-xl ">
              <div className="flex-1">
                {renderFieldArray(languagesFields, "Languages", "languages", [
                  "name",
                ])}
              </div>
              <div className="flex-1">
                {renderFieldArray(interestsFields, "Interests", "interests", [
                  "name",
                ])}
              </div>
            </div>

            <button type="submit" className="btn btn-md text-white font-bold px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-white animate-gradient transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-125 w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  function ShowInputField() {
    return (
      <div className="bg-black shadow-lg rounded-lg p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">
          <LuBrain className="text-accent" /> Generate Your AI Resume
        </h1>
        <p className="mb-4 text-lg text-gray-600">
        Write Your Personal and Professional Details for Resume Drafting Here.
        </p>
        <textarea
          disabled={loading}
          className="textarea textarea-bordered w-full h-48 mb-6 resize-none bg-base-100"
          placeholder="Type your description here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="flex justify-center gap-4">

          <button
            disabled={loading}
            onClick={handleGenerate}
            className="btn flex items-center gap-2 text-black font-bold px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 transition-all duration-300 ease-in-out hover:brightness-110 hover:scale-105"
          >
            {loading && <span className="loading loading-spinner"></span>}
            <FaPaperPlane />
            Generate Resume
          </button>


          <button
           onClick={handleClear}
           className="btn flex items-center gap-2 text-white-200 font-bold px-6 py-3 rounded-lg bg-red-300 transition-all duration-300 ease-in-out hover:bg-red-600">
           <FaTrash />
           Clear
          </button>


        </div>
      </div>
    );
  }
  function showResume() {
    return (
      <div>
        <Resume data={data} />

        <div className="flex mt-5 justify-center gap-2">
          <div
            onClick={() => {
              setShowPromptInput(true);
              setShowFormUI(false);
              setShowResumeUI(false);
            }}
            className="btn flex items-center gap-4 text-black font-bold px-10 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-pink-700 to-pink-900 transition-all duration-300 ease-in-out hover:brightness-110 hover:scale-105 hover:text-black">
          <BiRefresh />
            Generate Another
          </div>
          <button
            onClick={() => {
              setShowPromptInput(false);
              setShowFormUI(true);
              setShowResumeUI(false);
            }}
            className="btn flex items-center gap-4 text-white font-bold px-10 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 transition-all duration-300 ease-in-out hover:brightness-110 hover:scale-105 hover:text-black"
          >
            <FaRedo />
            Edit Resume
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="mt p-10 flex flex-col gap-3 items-center justify-center font-sans bg-base-200 min-h-screen">
      {showFormUI && showFormFunction()}
      {showPromptInput && ShowInputField()}
      {showResumeUI && showResume()}
    </div>
  );
};

export default GenerateResume;