import cors from "cors";

const onAuthorizationHeaders = cors({
  origin: "*",
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
  credentials: true,
});

export { onAuthorizationHeaders };
