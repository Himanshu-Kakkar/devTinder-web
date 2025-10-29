import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Gemini = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    try {
      // Replace '/ai/search' with your actual AI search endpoint
      const res = await axios.post(
        BASE_URL + "/ai/search",
        { query },
        { withCredentials: true }
      );
      setResult(res.data.result);
    } catch (err) {
      setResult("Error: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="m-10 max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          className="input input-bordered flex-1"
          type="text"
          placeholder="Ask anything with AI..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      <div className="mt-4 p-4 bg-base-200 rounded">
        {result && <div>{result}</div>}
      </div>
    </div>
  );
};

export default Gemini;