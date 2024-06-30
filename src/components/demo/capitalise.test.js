//This file is just here to demonstrate how to write tests
//Feel free to delete it

import { test, expect } from "vitest";
import { capitalise } from "./capitalise.js";

test("capitalise with single lowercase word ", () => {
    expect(capitalise("hello")).toBe("Hello");
});

test("capitalise with empty string ", () => {
    expect(capitalise("")).toBe("");
});

//etc...
