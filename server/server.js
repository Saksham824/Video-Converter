import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { exec } from "child_process";
import path from "path";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/convert", (req, res) => {
  const { url } = req.body;
  const fileName = `video_${Date.now()}.mp4`;
  const outputPath = path.resolve("downloads", fileName);

  const command = `yt-dlp -f best -o "${outputPath}" "${url}"`;

  exec(command, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Conversion failed" });
    }
    return res.json({ downloadUrl: `http://localhost:5000/downloads/${fileName}` });
  });
});

app.use("/downloads", express.static("downloads"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
