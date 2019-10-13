const express = require('express');
const { TeamMember } = require('./model');

const app = express();

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

//build a route like app.post (/newMember) needs to match what I have for onSubmit
//gotta build front end routes as a way to connect the front and back


module.exports = app;
