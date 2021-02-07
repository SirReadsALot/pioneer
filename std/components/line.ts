import { Component } from "../../engine/mod.ts";
import { Vector2 } from "../vector2.ts";

export class Line extends Component {
  start: Vector2 = Vector2.zero();
  end: Vector2 = Vector2.one();
}