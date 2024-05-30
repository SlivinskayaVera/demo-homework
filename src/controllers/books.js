const Book = require("../models/books");

const getBooks = (request, response) => {
  return Book.find({})
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const getBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findById(book_id)
    .then((book) => {
      if (!book) {
        response.status(404).send("Book is not found");
      } else {
        response.status(200).send(book);
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const createBook = (request, response) => {
  const data = request.body;
  return Book.create(data)
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const updateBook = (request, response) => {
  const { book_id } = request.params;
  const data = request.body;
  return Book.findByIdAndUpdate(book_id, data, {
    new: true,
    runValidators: true,
  })
    .then((book) => {
      if (!book) {
        response.status(404).send("Book is not found");
      } else {
        response.status(200).send(book);
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const deleteBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findByIdAndDelete(book_id)
    .then((book) => {
      if (!book) {
        response.status(404).send("Book is not found");
      } else {
        response.status(200).send("Done");
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
