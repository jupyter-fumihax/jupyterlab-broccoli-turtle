
import { pythonGenerator as Python } from 'blockly/python';


export function getPythonFunctions(generator)
{
  var funcs = {};


//
funcs['turtle_init'] = function(block) {
  const xsz = generator.valueToCode(block, 'XSIZE', Python.ORDER_NONE) || "600";
  const ysz = generator.valueToCode(block, 'YSIZE', Python.ORDER_NONE) || "600";
  const msg = 'from jbturtle import *\n' +
              'from math import * \n\n' +
              'turtle = JBTurtle(' + xsz + ', ' + ysz + ')\n';
  return msg;
};

funcs['turtle_speed'] = function(block) {
  const val = generator.valueToCode(block, 'VAL', Python.ORDER_NONE) || "2";
  return 'turtle.speed(' + val + ')\n';
};

funcs['turtle_line_widt'] = function(block) {
  const val = generator.valueToCode(block, 'VAL', Python.ORDER_NONE) || "2";
  return 'turtle.line_width(' + val + ')\n';
};

funcs['turtle_line_color'] = function(block) {
  const val = generator.valueToCode(block, 'VAL', Python.ORDER_NONE) || "#000000";
  return 'turtle.line_color(' + val + ')\n';
};

funcs['turtle_line_hsv'] = function(block) {
  const hh = generator.valueToCode(block, 'H', Python.ORDER_NONE) || "0";
  const ss = generator.valueToCode(block, 'S', Python.ORDER_NONE) || "0.45";
  const vv = generator.valueToCode(block, 'V', Python.ORDER_NONE) || "0.65";
  return 'turtle.line_hsv(' + hh + ', ' + ss + ', ' + vv + ')\n';
};

funcs['turtle_pen_up'] = function(block) {
  return 'turtle.pen_up()\n';
};

funcs['turtle_pen_down'] = function(block) {
  return 'turtle.pen_down()\n';
};

funcs['turtle_forward'] = function(block) {
  const val = generator.valueToCode(block, 'VAL', Python.ORDER_NONE) || "100";
  return 'turtle.forward(' + val + ')\n';
};

funcs['turtle_turn_right'] = function(block) {
  const val = generator.valueToCode(block, 'VAL', Python.ORDER_NONE) || "90";
  return 'turtle.turn_right(' + val + ')\n';
};

funcs['turtle_turn_left'] = function(block) {
  const val = generator.valueToCode(block, 'VAL', Python.ORDER_NONE) || "90";
  return 'turtle.turn_left(' + val + ')\n';
};

funcs['turtle_move'] = function(block) {
  const xp = generator.valueToCode(block, 'XPOS', Python.ORDER_NONE) || "300";
  const yp = generator.valueToCode(block, 'YPOS', Python.ORDER_NONE) || "300";
  return 'turtle.move(' + xp + ', ' + yp + ')\n';
};


  //
  return funcs;
}


