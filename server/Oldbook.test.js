import { expect, test } from "vitest";
import { editBook } from "./index.js";

test("update book", () => {
  const data = [
    {
      idBook: "1",
      name: "Old book",
      author: "Old author",
      description: "Old description",
    },
  ];
  const idToUpdate = "1";
  const updatedValues = {
    name: "New Book",
    author: "New Author",
    description: "New description",
  };
  console.log(data);
  const updatedData = editBook(data, idToUpdate, updatedValues);
  console.log(updatedData);
  expect(updatedData[0]).toEqual({
    idBook: "1",
    name: "New Book",
    author: "New Author",
    description: "New description",
  });
});
