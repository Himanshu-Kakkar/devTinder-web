// export const BASE_URL = "http://localhost:7777"

// Production URL
// export const BASE_URL = 
//     location.hostname === "localhost" ? "http://localhost:7777" : "/api";


// export const BASE_URL =
//     (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_API_BASE_URL)
//         ? import.meta.env.VITE_API_BASE_URL
//         : (location.hostname === "localhost" ? "http://localhost:7777" : "/api");

export const BASE_URL =
  location.hostname === "localhost"
    ? "http://localhost:7777" // Localhost
    : location.hostname.includes("onrender.com")
    ? "https://devconnect-no9b.onrender.com" // Render
    : "/api"; // AWS
