// export const BASE_URL = "http://localhost:7777"

// Production URL
export const BASE_URL = 
    location.hostname === "localhost" ? "http://localhost:7777" : "/api";