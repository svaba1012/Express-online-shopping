const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const articles = require("./articlesModel.js");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let filteredArticles;
let addedArticles = [];

app.get("/", function (req, res) {
  res.render("main.ejs", { articles: filteredArticles });
});

app.post("/", function (req, res) {
  filteredArticles = articles.articles;
  console.log(req.body);
  if (req.body.type != "all") {
    filteredArticles = filteredArticles.filter(
      (el) => el.type == req.body.type
    );
  }

  if (req.body.isMale == null) {
    console.log(null);
    filteredArticles = filteredArticles.filter((el) => el.sex != "m");
  }

  if (req.body.isFemale == null) {
    filteredArticles = filteredArticles.filter((el) => el.sex != "w");
  }

  if (req.body.minValue != "") {
    filteredArticles = filteredArticles.filter(
      (el) => el.price > req.body.minValue
    );
  }

  if (req.body.maxValue != "") {
    filteredArticles = filteredArticles.filter(
      (el) => el.price < req.body.maxValue
    );
  }
  res.redirect("/#filter-title");
});

app.get("/cart", function (req, res) {
  res.render("cart.ejs", { addedArticles: addedArticles });
});

app.post("/cart", function (req, res) {
  let articleId;
  let newArticle = addedArticles.find(
    (el) => el.article.id == req.body.articleId
  );
  if (newArticle == null) {
    newArticle = articles.articles.find((el) => el.id == req.body.articleId);
    addedArticles.push({ article: newArticle, ammount: 1 });
    articleId = newArticle.id;
  } else {
    articleId = newArticle.article.id;
    newArticle.ammount++;
  }

  res.redirect("/#articleId" + articleId);
});

app.post("/menage-cart-add", function (req, res) {
  addedArticles.find((el) => el.article.id == req.body.articleId).ammount++;
  res.redirect("/cart");
});

app.post("/menage-cart-subtract", function (req, res) {
  let articleIndex = addedArticles.findIndex(
    (el) => el.article.id == req.body.articleId
  );
  addedArticles[articleIndex].ammount--;
  if (addedArticles[articleIndex].ammount <= 0) {
    addedArticles.splice(articleIndex, articleIndex + 1);
  }
  res.redirect("/cart");
});

app.post("/menage-cart-remove", function (req, res) {
  let articleIndex = addedArticles.findIndex(
    (el) => el.article.id == req.body.articleId
  );
  addedArticles.splice(articleIndex, articleIndex + 1);
  res.redirect("/cart");
});

app.get("/contact-us", function (req, res) {
  res.render("info.ejs", {
    title: "Contact us",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit repellendus magni quis tenetur molestiae enim totam accusamus, ipsam quos eius nemo. Totam dolorem et beatae non, laudantium quibusdam ullam aliquam?",
  });
});

app.get("/about-us", function (req, res) {
  res.render("info.ejs", {
    title: "About us",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit repellendus magni quis tenetur molestiae enim totam accusamus, ipsam quos eius nemo. Totam dolorem et beatae non, laudantium quibusdam ullam aliquam?",
  });
});

app.listen(3000, function () {
  articles.articlesInit();
  filteredArticles = articles.articles;
  console.log("Server is listening");
});
