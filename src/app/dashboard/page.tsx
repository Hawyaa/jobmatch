"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useAuth } from "@/lib/auth-context";

type Profile = {
  skills: string[];
  seniority: string;
  titles: string[];
  years_exp: number;
};

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState<"idle" | "uploading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [rawText, setRawText] = useState("");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [extracting, setExtracting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  function validateAndSetFile(f: File) {
    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validTypes.includes(f.type)) {
      setErrorMsg("Please upload a PDF or DOCX file.");
      setStatus("error");
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setErrorMsg("File must be under 5MB.");
      setStatus("error");
      return;
    }
    setErrorMsg("");
    setStatus("idle");
    setRawText("");
    setProfile(null);
    setSaved(false);
    setFile(f);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) validateAndSetFile(f);
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) validateAndSetFile(f);
  }

  async function handleUpload() {
    if (!file || !user) return;
    setStatus("uploading");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const token = await user.getIdToken();

      const res = await fetch("/api/cv/parse", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      setRawText(data.rawText);
      setStatus("done");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong uploading your CV.");
      setStatus("error");
    }
  }

  async function handleExtract() {
    if (!user || !rawText) return;
    setExtracting(true);
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/cv/extract", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rawText }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Extraction failed");
      setProfile(data.profile);
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong extracting your profile.");
      setStatus("error");
    } finally {
      setExtracting(false);
    }
  }

  function updateProfileField(field: keyof Profile, value: any) {
    if (!profile) return;
    setProfile({ ...profile, [field]: value });
    setSaved(false);
  }

  async function handleSaveProfile() {
    if (!user || !profile) return;
    setSaving(true);
    try {
      await addDoc(collection(db, "users", user.uid, "profiles"), {
        rawCvText: rawText,
        skills: profile.skills,
        seniority: profile.seniority,
        titles: profile.titles,
        yearsExp: profile.years_exp,
        extractedAt: serverTimestamp(),
      });
      setSaved(true);
    } catch (err) {
      setErrorMsg("Failed to save profile.");
      setStatus("error");
    } finally {
      setSaving(false);
    }
  }

  if (loading || !user) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center">
        <p className="font-body text-burgundy-dark">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-display text-3xl text-burgundy-dark">
            Dashboard
          </h1>
          <button
            onClick={() => signOut(auth)}
            className="font-body text-sm uppercase tracking-wide text-burgundy border border-burgundy px-4 py-2 hover:bg-burgundy hover:text-cream transition-colors"
          >
            Log out
          </button>
        </div>

        <p className="font-body text-burgundy-dark/70 mb-8">
          Signed in as {user.email}
        </p>

        <section>
          <h2 className="font-display text-xl text-burgundy-dark mb-4">
            Upload your CV
          </h2>

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed px-6 py-12 text-center transition-colors ${
              dragOver ? "border-burgundy bg-burgundy/5" : "border-burgundy/30"
            }`}
          >
            <p className="font-body text-burgundy-dark/70 mb-4">
              Drag and drop your CV here, or
            </p>
            <label className="inline-block font-body text-sm uppercase tracking-wide bg-burgundy text-cream px-6 py-2 cursor-pointer hover:bg-burgundy-light transition-colors">
              Choose file
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileInput}
                className="hidden"
              />
            </label>
            <p className="font-body text-xs text-burgundy-dark/40 mt-4">
              PDF or DOCX, up to 5MB
            </p>
          </div>

          {file && (
            <div className="mt-4 flex items-center justify-between bg-burgundy-dark/5 px-4 py-3">
              <p className="font-body text-sm text-burgundy-dark">{file.name}</p>
              <button
                onClick={handleUpload}
                disabled={status === "uploading"}
                className="font-body text-sm uppercase tracking-wide bg-gold text-burgundy-dark px-4 py-2 hover:bg-burgundy-light hover:text-cream transition-colors disabled:opacity-50"
              >
                {status === "uploading" ? "Uploading..." : "Upload"}
              </button>
            </div>
          )}

          {status === "error" && (
            <p className="font-body text-sm text-red-600 mt-3">{errorMsg}</p>
          )}
          {status === "done" && (
            <p className="font-body text-sm text-green-700 mt-3">
              CV uploaded — extracting your profile next.
            </p>
          )}

          {status === "done" && rawText && (
            <div className="mt-4 bg-burgundy-dark/5 px-4 py-3 max-h-64 overflow-y-auto">
              <p className="font-body text-xs text-burgundy-dark/50 mb-2">
                Extracted text (preview):
              </p>
              <pre className="font-body text-xs text-burgundy-dark/80 whitespace-pre-wrap">
                {rawText.slice(0, 1000)}
              </pre>
            </div>
          )}

          {status === "done" && rawText && !profile && (
            <button
              onClick={handleExtract}
              disabled={extracting}
              className="mt-4 font-body text-sm uppercase tracking-wide bg-burgundy text-cream px-6 py-2 hover:bg-burgundy-light transition-colors disabled:opacity-50"
            >
              {extracting ? "Extracting..." : "Extract Profile"}
            </button>
          )}

          {profile && (
            <div className="mt-4 bg-burgundy-dark/5 px-4 py-4">
              <p className="font-body text-xs text-burgundy-dark/50 mb-3">
                Review your profile — edit anything that's off:
              </p>

              <label className="block font-body text-xs uppercase tracking-wider text-burgundy-dark/60 mb-1">
                Seniority
              </label>
              <select
                value={profile.seniority}
                onChange={(e) => updateProfileField("seniority", e.target.value)}
                className="w-full bg-cream border border-burgundy/30 px-3 py-2 mb-4 font-body text-sm"
              >
                <option value="junior">Junior</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
              </select>

              <label className="block font-body text-xs uppercase tracking-wider text-burgundy-dark/60 mb-1">
                Years of experience
              </label>
              <input
                type="number"
                min={0}
                value={profile.years_exp}
                onChange={(e) => updateProfileField("years_exp", Number(e.target.value))}
                className="w-full bg-cream border border-burgundy/30 px-3 py-2 mb-4 font-body text-sm"
              />

              <label className="block font-body text-xs uppercase tracking-wider text-burgundy-dark/60 mb-1">
                Titles (comma-separated)
              </label>
              <input
                type="text"
                value={profile.titles?.join(", ")}
                onChange={(e) =>
                  updateProfileField(
                    "titles",
                    e.target.value.split(",").map((t) => t.trim()).filter(Boolean)
                  )
                }
                className="w-full bg-cream border border-burgundy/30 px-3 py-2 mb-4 font-body text-sm"
              />

              <label className="block font-body text-xs uppercase tracking-wider text-burgundy-dark/60 mb-1">
                Skills (comma-separated)
              </label>
              <textarea
                value={profile.skills?.join(", ")}
                onChange={(e) =>
                  updateProfileField(
                    "skills",
                    e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                  )
                }
                rows={3}
                className="w-full bg-cream border border-burgundy/30 px-3 py-2 mb-4 font-body text-sm"
              />

              <button
                onClick={handleSaveProfile}
                disabled={saving}
                className="font-body text-sm uppercase tracking-wide bg-burgundy text-cream px-6 py-2 hover:bg-burgundy-light transition-colors disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Profile"}
              </button>

              {saved && (
                <p className="font-body text-sm text-green-700 mt-3">
                  Profile saved.
                </p>
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}