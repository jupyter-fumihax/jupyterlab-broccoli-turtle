//
//
//import { javascriptGenerator as Js } from 'blockly/javascript';

const notImplementedMsg = 'Not implemented at this Kernel';

export function getJsFunctions(generator) {
  var funcs = {};

//
funcs['turtle_init'] = function(block) {
  alert(notImplementedMsg);
  return 'console.log(' +  notImplementedMsg + ');\n';
};

  //
  return funcs;
}

