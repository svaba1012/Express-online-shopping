class Article {
  constructor(name, price, desc, imgUrl, type, sex, id) {
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.imgUrl = imgUrl;
    this.type = type;
    this.sex = sex;
    this.id = id;
    if (sex == "m") {
      this.sexText = "Male";
    } else {
      this.sexText = "Female";
    }
  }
}

let articles = [];

exports.articles = articles;

exports.articlesInit = function () {
  articles.push(
    new Article(
      "Light jacket",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/jacket.jpg",
      "jacket",
      "m",
      0
    )
  );

  articles.push(
    new Article(
      "Dark jacket",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/jacket2.jpg",
      "jacket",
      "m",
      1
    )
  );

  articles.push(
    new Article(
      "Dark jacket",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/jacketW.jpg",
      "jacket",
      "w",
      2
    )
  );

  articles.push(
    new Article(
      "Rose jacket",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/jacketW2.jpg",
      "jacket",
      "w",
      3
    )
  );

  articles.push(
    new Article(
      "Brown shirt",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/shirt1.jpg",
      "shirt",
      "m",
      4
    )
  );

  articles.push(
    new Article(
      "Dark shirt",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/shirt3.jpg",
      "shirt",
      "m",
      5
    )
  );

  articles.push(
    new Article(
      "White shirt",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/shirtW1.jpg",
      "shirt",
      "w",
      6
    )
  );
  articles.push(
    new Article(
      "Light blouse",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/shirtW2.jpg",
      "shirt",
      "w",
      7
    )
  );

  articles.push(
    new Article(
      "Grey shirt",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/shirtW3.jpg",
      "shirt",
      "w",
      8
    )
  );

  articles.push(
    new Article(
      "Rose shirt",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/shirtW4.jpg",
      "shirt",
      "w",
      9
    )
  );

  articles.push(
    new Article(
      "Dark shoes",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/shoes.jpg",
      "shoes",
      "m",
      10
    )
  );

  articles.push(
    new Article(
      "Dark high heels shoes",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/shoesW.jpg",
      "shoes",
      "w",
      11
    )
  );

  articles.push(
    new Article(
      "Orange shorts",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/shorts.jpg",
      "shorts",
      "m",
      12
    )
  );

  articles.push(
    new Article(
      "Grey shorts",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/shortsW.jpg",
      "shorts",
      "w",
      13
    )
  );

  articles.push(
    new Article(
      "Dark trousers",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/trousers1.jpg",
      "trousers",
      "m",
      14
    )
  );

  articles.push(
    new Article(
      "Jeans",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/trousers2.jpg",
      "trousers",
      "m",
      15
    )
  );

  articles.push(
    new Article(
      "Rose trousers",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/trousersW1.jpg",
      "trousers",
      "w",
      16
    )
  );

  articles.push(
    new Article(
      "Dark trousers",
      200,
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ullam reiciendis unde esse ad, quaerat, doloribus aperiam totam doloremque quasi facere quis. Corrupti maxime ducimus unde aperiam aliquam possimus. Modi!",
      "images/trousersW2.jpg",
      "trousers",
      "w",
      17
    )
  );
};
