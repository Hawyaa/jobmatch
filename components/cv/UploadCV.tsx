"use client";

import { useState } from "react";
import {
  UploadCloud,
  FileText,
  X,
  CheckCircle2,
} from "lucide-react";


export default function UploadCV() {

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);


  function handleFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const selected = e.target.files?.[0];


    if (!selected) return;


    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];


    if (!allowedTypes.includes(selected.type)) {

      alert("Only PDF or DOCX files are allowed");

      return;

    }


    setFile(selected);

  }



  function removeFile(){

    setFile(null);
    setSuccess(false);

  }



  async function uploadCV(){

    if(!file) return;


    setUploading(true);


    // Later:
    // await axios.post("/api/cv/parse", formData)


    setTimeout(()=>{

      setUploading(false);
      setSuccess(true);

    },1500);


  }



  return (

    <div className="rounded-3xl border border-bronze/30 bg-white p-8">


      <h2 className="text-2xl font-bold text-burgundy">
        Upload Your CV
      </h2>


      <p className="mt-2 text-espresso/70">
        Upload your resume and let AI analyze your skills.
      </p>



      {!file && (

        <label
          className="
          mt-8 flex cursor-pointer
          flex-col items-center justify-center
          rounded-2xl border-2 border-dashed
          border-bronze/50
          bg-cream-light
          p-10
          transition
          hover:bg-cream
          "
        >

          <UploadCloud
            size={45}
            className="text-bronze"
          />


          <p className="mt-4 font-medium text-burgundy">
            Click to upload CV
          </p>


          <p className="mt-2 text-sm text-espresso/60">
            PDF or DOCX (Max 5MB)
          </p>



          <input
            type="file"
            hidden
            accept=".pdf,.docx"
            onChange={handleFile}
          />


        </label>

      )}



      {file && (

        <div className="mt-8 rounded-2xl bg-cream-light p-5">


          <div className="flex items-center justify-between">


            <div className="flex items-center gap-3">


              <FileText
                className="text-bronze"
              />


              <div>

                <p className="font-medium text-burgundy">
                  {file.name}
                </p>


                <p className="text-sm text-espresso/60">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>


              </div>


            </div>



            <button
              onClick={removeFile}
              className="text-red-500"
            >

              <X size={20}/>

            </button>


          </div>



          <button
            onClick={uploadCV}
            disabled={uploading}
            className="
            mt-6 w-full rounded-xl
            bg-burgundy py-3
            font-semibold text-cream
            hover:bg-burgundy-dark
            disabled:opacity-60
            "
          >

            {
              uploading
              ? "Analyzing CV..."
              : "Upload & Analyze"
            }


          </button>



          {success && (

            <div className="mt-5 flex items-center gap-2 text-green-700">

              <CheckCircle2 size={20}/>

              CV uploaded successfully

            </div>

          )}



        </div>

      )}



    </div>

  );
}