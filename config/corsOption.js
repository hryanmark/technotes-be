const allowedOrigin = require("./allowedOrigin");

const corsOptions = {
  origin: (origin, calllback) => {
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      calllback(null, true);
    } else {
      calllback(new Error("Not allowed by CORS!"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
