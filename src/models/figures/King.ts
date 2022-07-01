import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackLogo from "../../assets/chess_black_king.png";
import whiteLogo from "../../assets/chess_white_king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  };

  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false;
    return true;
  };
};