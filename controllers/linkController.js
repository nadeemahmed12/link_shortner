import Link from "../models/link.js";

const createShortLink = async (req, res) => {
  const { originalUrl } = req.body;
  const link = new Link({ originalUrl });
  await link.save();
  return res.status(201).send(link);
};

const getOriginalUrl = async (req, res) => {
  const shortUrl = req.params;
  const link = await Link.findOne(shortUrl);

  if (link) {
    link.clicks += 1;
    await link.save();
    return res.redirect(link.originalUrl);
  } else {
    return res.status(404).send("Link not Found");
  }
};

const getAnalytics = async (req, res) => {
  const shortUrl = req.params;
  const link = await Link.findOne(shortUrl);

  if (link) {
    return res.status(200).json({click:link.clicks, url:link.originalUrl, url2:link.shortUrl});
  } else {
    return res.status(404).send("Link not found");
  }
};

export { createShortLink, getOriginalUrl, getAnalytics }