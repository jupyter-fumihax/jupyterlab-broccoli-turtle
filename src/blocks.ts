
import * as Blockly from 'blockly';

import { ToolboxUtils } from './utils';
import { TOOLBOX_BASIC } from './toolbox_basic';
import { TOOLBOX_TURTLE } from './toolbox_turtle';

//
const toolboxUtils = new ToolboxUtils();
export const TOOLBOX = toolboxUtils.add(TOOLBOX_TURTLE, TOOLBOX_BASIC, 2);


// Init
Blockly.defineBlocksWithJsonArray(
[{
  'type': 'turtle_init',
  'message0': '%{BKY_BLOCK_TURTLE_INIT}  %1 %{BKY_BLOCK_TURTLE_XSIZE}  %2 %{BKY_BLOCK_TURTLE_YSIZE}  %3',
  'args0': [
    {
      'type': 'input_dummy'
    },
    {
      'type':  'input_value',
      'name':  'XSIZE',
      'check': 'Number',
      'align': 'RIGHT'
    }, 
    {
      'type':  'input_value',
      'name':  'YSIZE',
      'check': 'Number',
      'align': 'RIGHT'
    } 
  ],
  'nextStatement': null,
  'colour': 5,
  'tooltip': '',
  'helpUrl': ''
}]);

// Turtle Speed
Blockly.defineBlocksWithJsonArray(
[{
  'type': 'turtle_speed',
  'message0': '%{BKY_BLOCK_TURTLE_SPEED}  %1',
  'args0': [
    {
      'type':  'input_value',
      'name':  'VAL',
      'check': 'Number'
    } 
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 290,
  'tooltip': '',
  'helpUrl': ''
}]);

// Line Width
Blockly.defineBlocksWithJsonArray(
[{
  'type': 'turtle_line_width',
  'message0': '%{BKY_BLOCK_TURTLE_WIDTH}  %1',
  'args0': [
    {
      'type':  'input_value',
      'name':  'VAL',
      'check': 'Number'
    } 
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 290,
  'tooltip': '',
  'helpUrl': ''
}]);

// Line Color
Blockly.defineBlocksWithJsonArray(
[{
  'type': 'turtle_line_color',
  'message0': '%{BKY_BLOCK_TURTLE_COLOR}  %1',
  'args0': [
    {
      'type':  'input_value',
      'name':  'VAL',
      'check': 'Colour'
    } 
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 290,
  'tooltip': '',
  'helpUrl': ''
}]);

// Line HSV Color
Blockly.defineBlocksWithJsonArray(
[{
  'type': 'turtle_line_hsv',
  'message0': '%{BKY_BLOCK_TURTLE_HSV} %1' +  
    '%{BKY_BLOCK_TURTLE_HSV_S}  %2' + 
    '%{BKY_BLOCK_TURTLE_HSV_V}  %3',
  'args0': [
    {
      'type':  'input_value',
      'name':  'H',
      'check': 'Number',
      'align': 'RIGHT',
    }, 
    {
      'type':  'input_value',
      'name':  'S',
      'check': 'Number',
      'align': 'RIGHT',
    }, 
    {
      'type':  'input_value',
      'name':  'V',
      'check': 'Number',
      'align': 'RIGHT',
    }, 
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 290,
  'tooltip': '',
  'helpUrl': ''
}]);

// Pen Up
Blockly.defineBlocksWithJsonArray(
[{
  'type': 'turtle_pen_up',
  'message0': '%{BKY_BLOCK_TURTLE_PEN_UP}',
  'previousStatement': null,
  'nextStatement': null,
  'colour': 50,
  'tooltip': '',
  'helpUrl': ''
}]);

// Pen Down
Blockly.defineBlocksWithJsonArray(
[{
  'type': 'turtle_pen_down',
  'message0': '%{BKY_BLOCK_TURTLE_PEN_DOWN}',
  'previousStatement': null,
  'nextStatement': null,
  'colour': 50,
  'tooltip': '',
  'helpUrl': ''
}]);

// Foward
Blockly.defineBlocksWithJsonArray(
[{
  'type': 'turtle_forward',
  'message0': '%{BKY_BLOCK_TURTLE_FORWARD}  %1',
  'args0': [
    {
      'type':  'input_value',
      'name':  'VAL',
      'check': 'Number'
    } 
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 200,
  'tooltip': '',
  'helpUrl': ''
}]);

// Turn Right
Blockly.defineBlocksWithJsonArray(
[{
  'type': 'turtle_turn_right',
  'message0': '%{BKY_BLOCK_TURTLE_TURN_RIGHT}  %1',
  'args0': [
    {
      'type': 'input_value',
      'name': 'VAL',
      'check':'Number'
    } 
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 200,
  'tooltip': '',
  'helpUrl': ''
}]);

// Turn Left
Blockly.defineBlocksWithJsonArray(
[{
  'type': 'turtle_turn_left',
  'message0': '%{BKY_BLOCK_TURTLE_TURN_LEFT}  %1',
  'args0': [
    {
      'type':  'input_value',
      'name':  'VAL',
      'check': 'Number'
    } 
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 200,
  'tooltip': '',
  'helpUrl': ''
}]);

// Move to
Blockly.defineBlocksWithJsonArray(
[{
  'type': 'turtle_move',
  'message0': '%{BKY_BLOCK_TURTLE_MOVE}  %1 %{BKY_BLOCK_TURTLE_XPOS}  %2 %{BKY_BLOCK_TURTLE_YPOS}  %3',
  'args0': [
    {
      'type': 'input_dummy'
    },
    {
      'type':  'input_value',
      'name':  'XPOS',
      'check': 'Number',
      'align': 'RIGHT'
    }, 
    {
      'type':  'input_value',
      'name':  'YPOS',
      'check': 'Number',
      'align': 'RIGHT'
    }
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 200,
  'tooltip': '',
  'helpUrl': ''
}]);

