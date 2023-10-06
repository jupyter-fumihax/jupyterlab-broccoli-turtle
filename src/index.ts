import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { IBlocklyRegistry, BlocklyRegistry } from 'jupyterlab-broccoli';
import { ITranslator, nullTranslator } from '@jupyterlab/translation';

import { TOOLBOX } from './blocks';
import * as func_python from './python/func.js';
import * as func_js from './javascript/func.js';
//import * as func_lua from './lua/func.js';
//import * as func_dart from './dart/func.js';
//import * as func_php from './php/func.js';

/**
 * Initialization data for the jupyterlab-broccoli-turtle extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-broccoli-turtle:plugin',
  autoStart: true,
  requires: [IBlocklyRegistry, ITranslator],
  activate: (app: JupyterFrontEnd, register: IBlocklyRegistry, translator: ITranslator) => {
    console.log(
      'JupyterLab extension jupyterlab-broccoli-turtle is activated!'
    );

    // Localization 
    const language = (register as BlocklyRegistry).language;
    import(`./msg/${language}.js`)
    .catch(() => {
      if (language !== 'En') {
        import(`./msg/En.js`)
        .catch(() => {});
      }
    });
    const trans = (translator || nullTranslator).load('jupyterlab');

    register.registerToolbox(trans.__('Turtle'), TOOLBOX);

    register.registerCodes('python', func_python);
    register.registerCodes('javascript', func_js);
    //register.registerCodes('lua', func_lua);
    //register.registerCodes('dart', func_dart);
    //register.registerCodes('php', func_php);
  }
};

export default plugin;

