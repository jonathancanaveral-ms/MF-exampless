import express from 'express';
import bodyParser from 'body-parser';
import pm2 from 'pm2';

const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  pm2.connect((err) => {
    const errorCallback = (err) => {
      if(err) return res.sendStatus(404);
    }

    errorCallback(err);

    pm2.list((err, list) => {
      errorCallback(err);

      if(list.length == 0) errorCallback(true);

      const deadPids = list.filter((l) => l.pid == 0);

      if (deadPids.length) {
        errorCallback(true);
      } else {
        res.sendStatus(200);
      }
    });
  });
});

module.exports = {
  path: '/membership',
  handler: app,
};
