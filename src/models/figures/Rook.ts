import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackLogo from "../../assets/chess_black_rook.png";
import whiteLogo from "../../assets/chess_white_rook.png";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  };

  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false;
    return true;
  };
};