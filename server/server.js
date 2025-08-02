import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { exec } from "child_process";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const downloadDir = path.resolve("downloads");
if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir);

app.post("/convert", (req, res) => {
  const { url } = req.body;
  const timestamp = Date.now();
  const fileName = `video_${timestamp}.mp4`;
  const outputPath = path.resolve(downloadDir, fileName);

  const command = `yt-dlp -f best -o "${outputPath}" "${url}"`;

  exec(command, (err) => {
    if (err) {
      console.error("Download failed:", err);
      return res.status(500).json({ error: "Conversion failed" });
    }

    const baseUrl = req.protocol + "://" + req.get("host");
    return res.json({ downloadUrl: `${baseUrl}/downloads/${fileName}` });
  });
});

app.use("/downloads", express.static("downloads"));

// ⏱ Auto delete files older than 60 minutes
const DELETE_AFTER_MINUTES = 60;
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000; // every 10 minutes

setInterval(() => {
  const now = Date.now();

  fs.readdir(downloadDir, (err, files) => {
    if (err) {
      console.error("Failed to read downloads folder:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(downloadDir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) return;

        const fileAgeMinutes = (now - stats.mtimeMs) / 60000;
        if (fileAgeMinutes > DELETE_AFTER_MINUTES) {
          fs.unlink(filePath, (err) => {
            if (!err) {
              console.log(`🧹 Deleted old file: ${file}`);
            }
          });
        }
      });
    });
  });
}, CLEANUP_INTERVAL_MS);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
