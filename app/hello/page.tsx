"use client";

import React from "react";

const handleSignup = async (data: string) => {
  console.log("data", data);
  const response = await fetch(`/api/hello`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

const HelloPage = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = (event.currentTarget[0] as HTMLInputElement).value;
    try {
      handleSignup(inputValue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div> Hello Page</div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default HelloPage;
