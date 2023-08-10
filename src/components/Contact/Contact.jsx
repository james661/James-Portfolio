import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, comment }),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        // Reset form fields
        setName("");
        setEmail("");
        setComment("");
      } else {
        console.log("Failed to send email.");
      }
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };

  return <form onSubmit={handleSubmit}>
    {/* Form fields */}</form>;
};

export default ContactForm;