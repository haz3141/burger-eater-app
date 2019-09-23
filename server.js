const express = require("express");
const orm = require("./config/orm");

orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "Veggie Burger");