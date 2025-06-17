"use client";

import { useState } from "react";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      await res.json(); // No unused variable

      if (res.ok) {
        setResponseMsg("✅ Your request was received!");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setResponseMsg("❌ Something went wrong.");
      }
    } catch {
      setResponseMsg("❌ Server error. Try again later."); // No unused `error`
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">
          AI Assistant for Real Estate Builders
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Automatically find high-value property deals, schedule meetings, and
          close more deals with the power of AI.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded shadow text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition"
          >
            {loading ? "Submitting..." : "Request Early Access"}
          </button>
        </form>

        {responseMsg && (
          <p className="mt-4 text-center text-sm text-gray-700">{responseMsg}</p>
        )}
      </div>
    </main>
  );
}
