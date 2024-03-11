const { response } = require("express");
const { validateGoogleIdToken } = require("../helpers/validateGoogleIdToken");
const googleAuth = (req, res = response) => {
  const token = req.body.token;
  if (!token) return res.json({ ok: false, msg: "No existe el token" });
  res.send({
    ok: true,
    token,
  });

  const googleIdToken = validateGoogleIdToken(token);
  //TODO: Save user
};

module.exports = {
  googleAuth,
};
