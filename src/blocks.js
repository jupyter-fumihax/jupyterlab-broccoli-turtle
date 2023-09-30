
import * as Blockly from 'blockly';

import { ToolboxUtils } from './utils';
import { TOOLBOX_BASIC } from './toolbox_basic';
import { TOOLBOX_TURTLE } from './toolbox_turtle';

const toolboxUtils = new ToolboxUtils();
export const TOOLBOX = toolboxUtils.add(TOOLBOX_TURTLE, TOOLBOX_BASIC, 2);

//
/*
Blockly.defineBlocksWithJsonArray(
[{
  "type": "text_nocrlf_print",
  "message0": "%{BKY_BLOCK_TEXT_NOCRLF_PRINT}  %1",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXT",
      "check": "String",
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
}]);
*/

Blockly.defineBlocksWithJsonArray(
[{
  "type": "turtle_init",
  "message0": "%{BKY_BLOCK_TURTLE_INIT}",
  "nextStatement": null,
  "colour": 100,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.defineBlocksWithJsonArray(
[{
  "type": "turtle_done",
  "message0": "%{BKY_BLOCK_TURTLE_DONE}",
  "previousStatement": null,
  "colour": 100,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.defineBlocksWithJsonArray(
[{
  "type": "turtle_pen_up",
  "message0": "%{BKY_BLOCK_TURTLE_PEN_UP}",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 150,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.defineBlocksWithJsonArray(
[{
  "type": "turtle_pen_down",
  "message0": "%{BKY_BLOCK_TURTLE_PEN_DOWN}",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 150,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.defineBlocksWithJsonArray(
[{
  "type": "turtle_forward",
  "message0": "%{BKY_BLOCK_TURTLE_FORWARD}  %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NUM",
      "check": "Number"
    } 
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 150,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.defineBlocksWithJsonArray(
[{
  "type": "turtle_turn_right",
  "message0": "%{BKY_BLOCK_TURTLE_TURN_RIGHT}  %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NUM",
      "check": "Number"
    } 
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 150,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.defineBlocksWithJsonArray(
[{
  "type": "turtle_turn_left",
  "message0": "%{BKY_BLOCK_TURTLE_TURN_LEFT}  %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NUM",
      "check": "Number"
    } 
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 150,
  "tooltip": "",
  "helpUrl": ""
}]);
/**/
