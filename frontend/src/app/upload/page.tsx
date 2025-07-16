"use client";
import { useState, DragEvent } from "react";

function FileDrop({ label }: { label: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <label className="block text-lg font-semibold mb-2" style={{color: 'var(--foreground)'}}>{label}</label>
      <div
        className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 transition-colors duration-200 ${dragActive ? 'border-[var(--primary)] bg-[var(--accent)]/30' : 'border-[var(--accent)] bg-[var(--card-bg)]'} cursor-pointer`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        style={{minHeight: 160}}
      >
        <input
          type="file"
          className="hidden"
          id={`file-input-${label}`}
          onChange={handleFileChange}
        />
        <label htmlFor={`file-input-${label}`} className="cursor-pointer font-medium text-[var(--secondary)] hover:text-[var(--primary)] transition-colors duration-200">
          {file ? file.name : `Click or drag & drop to upload ${label}`}
        </label>
      </div>
    </div>
  );
}

export default function UploadPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-[var(--background)] p-4">
      <div className="w-full max-w-2xl bg-[var(--card-bg)] rounded-2xl shadow-2xl p-10 border border-[var(--accent)] flex flex-col items-center" style={{boxShadow: '0 8px 32px 0 rgba(73,88,103,0.10)'}}>
        <h1 className="text-3xl font-bold mb-2 text-[var(--foreground)] text-center">Upload Documents</h1>
        <p className="mb-8 text-[var(--secondary)] text-center">Upload your Job Description and Resume files below. Supported formats: PDF, DOCX.</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <FileDrop label="Job Description" />
          <FileDrop label="Resume" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto">
          <button
            className="flex-1 py-3 px-6 rounded-lg font-bold shadow-md border-none transition-all duration-300 cursor-pointer"
            style={{background: 'var(--accent)', color: 'var(--foreground)'}}
          >
            Upload
          </button>
          <button
            className="flex-1 py-3 px-6 rounded-lg font-bold shadow-md border-none transition-all duration-300 cursor-pointer"
            style={{background: 'var(--primary)', color: '#fff'}}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
} 