
import { pythonGenerator as BlocklyGene } from 'blockly/python';

const Order = {
  ATOMIC: 0,             // 0 "" ...
  COLLECTION: 1,         // tuples, lists, dictionaries
  STRING_CONVERSION: 1,  // `expression...`
  MEMBER: 2.1,           // . []
  FUNCTION_CALL: 2.2,    // ()
  EXPONENTIATION: 3,     // **
  UNARY_SIGN: 4,         // + -
  BITWISE_NOT: 4,        // ~
  MULTIPLICATIVE: 5,     // * / // %
  ADDITIVE: 6,           // + -
  BITWISE_SHIFT: 7,      // << >>
  BITWISE_AND: 8,        // &
  BITWISE_XOR: 9,        // ^
  BITWISE_OR: 10,        // |
  RELATIONAL: 11,        // in, not in, is, is not, >, >=, <>, !=, ==
  LOGICAL_NOT: 12,       // not
  LOGICAL_AND: 13,       // and
  LOGICAL_OR: 14,        // or
  CONDITIONAL: 15,       // if else
  LAMBDA: 16,            // lambda
  NONE: 99,              // (...)
};

//
//const notImplementedMsg = 'Not implemented at this Kernel';

export function turtle_init(block) {
  const xsz = BlocklyGene.valueToCode(block, 'XSIZE', Order.NONE) || "''";
  const ysz = BlocklyGene.valueToCode(block, 'YSIZE', Order.NONE) || "''";
  const msg = 'from jbturtle import *\n' +
              'from math import * \n\n' +
              'turtle = JBTurtle(' + xsz + ', ' + ysz + ')\n';
  return msg;
};

export function turtle_speed(block) {
  const val = BlocklyGene.valueToCode(block, 'VAL', Order.NONE) || "''";
  return 'turtle.speed(' + val + ')\n';
};

export function turtle_line_width(block) {
  const val = BlocklyGene.valueToCode(block, 'VAL', Order.NONE) || "''";
  return 'turtle.line_width(' + val + ')\n';
};

export function turtle_line_color(block) {
  const val = BlocklyGene.valueToCode(block, 'VAL', Order.NONE) || "''";
  return 'turtle.line_color(' + val + ')\n';
};

export function turtle_line_hsv(block) {
  const hh = BlocklyGene.valueToCode(block, 'H', Order.NONE) || "''";
  const ss = BlocklyGene.valueToCode(block, 'S', Order.NONE) || "''";
  const vv = BlocklyGene.valueToCode(block, 'V', Order.NONE) || "''";
  return 'turtle.line_hsv(' + hh + ', ' + ss + ', ' + vv + ')\n';
};

export function turtle_pen_up(block) {
  return 'turtle.pen_up()\n';
};

export function turtle_pen_down(block) {
  return 'turtle.pen_down()\n';
};

export function turtle_forward(block) {
  const val = BlocklyGene.valueToCode(block, 'VAL', Order.NONE) || "''";
  return 'turtle.forward(' + val + ')\n';
};

export function turtle_turn_right(block) {
  const val = BlocklyGene.valueToCode(block, 'VAL', Order.NONE) || "''";
  return 'turtle.turn_right(' + val + ')\n';
};

export function turtle_turn_left(block) {
  const val = BlocklyGene.valueToCode(block, 'VAL', Order.NONE) || "''";
  return 'turtle.turn_left(' + val + ')\n';
};

export function turtle_move(block) {
  const xp = BlocklyGene.valueToCode(block, 'XPOS', Order.NONE) || "''";
  const yp = BlocklyGene.valueToCode(block, 'YPOS', Order.NONE) || "''";
  return 'turtle.move(' + xp + ', ' + yp + ')\n';
};

/**/


