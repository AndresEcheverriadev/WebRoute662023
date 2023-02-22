import cors from "cors";

const onAuthorizationHeaders = cors({
  origin: "http://localhost:3000",
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
  credentials: true,
});

export { onAuthorizationHeaders };
