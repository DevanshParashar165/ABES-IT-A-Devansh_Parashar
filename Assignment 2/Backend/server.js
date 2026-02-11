const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

app.get("/api/os-info", (req, res) => {
  const data = {
    userInfo: os.userInfo(),
    architecture: os.arch(),
    hostName: os.hostname(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
  };

  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
