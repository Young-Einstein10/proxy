const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.get("/", function (req, res) {
  return res.send("Proxy Server Running");
});
app.use(
  "/maps",
  createProxyMiddleware({
    target: "https://maps.googleapis.com",
    changeOrigin: true,
  })
);

app.listen(process.env.PORT || 8000);
