const express = require("express");
const cors = require("cors");
const app = express();
const { exec } = require("child_process");

app.use(
  express.json(),
  cors({
    origin: "*",
  })
);

var server = app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

// panel
app.get("/call/:extension", (req, res) => {
  exec(
    "twinkle --call " + req.params.extension + " --immediate --config /home/kiosek/.twinkle/8999.cfg --user=8999 --calleenumber=9000 --nogui",
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: $ {error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );
});

app.get("/bye", (req, res) => {
  exec(
    "twinkle --cmd bye",
    (error, stdout, stderr) => {
      if (error) {
        // console.log(`error: $ {error.message}`);
        return;
      }
      if (stderr) {
        // console.log(`stderr: ${stderr}`);
        return;
      }
      // console.log(`stdout: ${stdout}`);
    }
  );
});
