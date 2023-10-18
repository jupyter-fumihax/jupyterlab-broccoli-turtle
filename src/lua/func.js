//
//import { luaGenerator as Lua } from 'blockly/lua';

const notImplementedMsg = 'Not implemented at this kernel';

export function getLuaFunctions(generator) {
  var funcs = {};

//
funcs['turtle_init'] = function(block) {
  alert(notImplementedMsg);
  return 'print(' +  notImplementedMsg + ');\n';
};

  //
  return funcs;
}
