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

      const data = await res.json();
      if (res.ok) {
        setResponseMsg("✅ Your request was received!");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setResponseMsg("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMsg("❌ Server error. Please try again later.");
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
