import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-500 mb-10 px-4 text-center">
      <small className="mb-2 text-xs block">
        &copy; 2023 Jacob S. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">A Personal Portfolio Website</span>{" "}
        build using React & Next.js (App Router & Server actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend
      </p>
    </footer>
  );
}
