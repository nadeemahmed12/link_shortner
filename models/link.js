//connection to database moongoosh
import mongoose from "mongoose";
import shortid from "shortid";

const linkSchema = {
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, default: shortid.generate },
  clicks: { type: Number, default: 0 },
};

const Link = mongoose.model("Link", linkSchema);
export default Link;