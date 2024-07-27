import { createRequire } from "module";
const require = createRequire(import.meta.url);
const chai = require("chai");
const chaiHttp = require("chai-http");
import { app } from "../server.js";
import Link from "../models/link.js";
const { expect } = chai;
chai.use(chaiHttp);
describe("Link Shortener API", () => {
  it("should create a short link", (done) => {
    chai
      .request(app)
      .post("/api/links/shorten")
      .send({ originalUrl: "https://www.google.com" })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property(
          "originalUrl",
          "https://www.google.com"
        );
        expect(res.body).to.have.property("shortUrl");
        done();
      });
  });
  it("Should Redirect to Original URL", (done) => {
    const link = new Link({ originalUrl: "https://www.google.com" });
    link.save().then(() => {
      chai
        .request(app)
        .get(`/api/links/${link.shortUrl}`)
        .end((err, res) => {
          expect(res).to.redirectTo("https://www.google.com/");
          done();
        });
    });
  });
});