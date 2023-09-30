
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
//const notImplementedMsg = 'Not implemented';

export function text_nocrlf_print(block) {
  const msg = BlocklyGene.valueToCode(block, 'TEXT', Order.NONE) || "''";
  return 'print(' + msg + ', end="")\n';
};

export function turtle_init(block) {
  const msg = 'from jturtle import *\n' +
              'from math import * \n\n' +
              'init()\n';
  return msg;
};

export function turtle_done(block) {
  return 'done()\n';
};

export function turtle_pen_up(block) {
  return 'penup()\n';
};

export function turtle_pen_down(block) {
  return 'pendown()\n';
};

export function turtle_forward(block) {
  const val = BlocklyGene.valueToCode(block, 'NUM', Order.NONE) || "''";
  return 'forward(' + val + ')\n';
};

export function turtle_turn_right(block) {
  const val = BlocklyGene.valueToCode(block, 'NUM', Order.NONE) || "''";
  return 'right(' + val + ')\n';
};

export function turtle_turn_left(block) {
  const val = BlocklyGene.valueToCode(block, 'NUM', Order.NONE) || "''";
  return 'left(' + val + ')\n';
};
/**/


