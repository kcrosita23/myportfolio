import test from "node:test";
import assert from "node:assert/strict";
import { validateContact } from "../src/lib/contactValidation.js";

const valid = { name: "Kim Carlo", email: "kim@example.com", message: "A new website project." };

test("accepts valid input with surrounding whitespace", () => {
  assert.deepEqual(validateContact({ name: "  Kim Carlo  ", email: " kim@example.com ", message: " A new website project. " }), {});
});

test("reports all empty fields including whitespace-only input", () => {
  assert.deepEqual(Object.keys(validateContact({ name: " ", email: "", message: "\n " })), ["name", "email", "message"]);
});

test("enforces the name boundaries after trimming", () => {
  for (const length of [2, 50]) assert.equal(validateContact({ ...valid, name: "a".repeat(length) }).name, undefined);
  for (const length of [1, 51]) assert.ok(validateContact({ ...valid, name: "a".repeat(length) }).name);
});

test("enforces the message boundaries after trimming", () => {
  for (const length of [10, 1000]) assert.equal(validateContact({ ...valid, message: "x".repeat(length) }).message, undefined);
  for (const length of [9, 1001]) assert.ok(validateContact({ ...valid, message: "x".repeat(length) }).message);
});

test("rejects malformed email addresses and excessive lengths", () => {
  for (const email of ["missing-at.com", "test@", "test@example", "test @example.com", "test@example.com extra", "x".repeat(250) + "@example.com"]) {
    assert.ok(validateContact({ ...valid, email }).email, email);
  }
});

test("accepts ordinary subdomains and email aliases", () => {
  assert.equal(validateContact({ ...valid, email: "kim+portfolio@mail.example.com" }).email, undefined);
});
