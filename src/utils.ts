
import { ToolboxInfo, StaticCategoryInfo } from 'blockly/core/utils/toolbox';

//
export class ToolboxUtils {

  constructor() {}
  
  add(a: ToolboxInfo, b: ToolboxInfo, num: number): ToolboxInfo {
    //
    if ((a.kind as string) !== (b.kind as string)) undefined;

    const c : ToolboxInfo = { kind: a.kind, contents: new Array<StaticCategoryInfo> }
    const a_len = a.contents.length;
    const b_len = b.contents.length;

    for (let i = 0; i < a_len; i++) {
      c.contents[i] = a.contents[i];
    }
    // separator
    for (let i = 0; i < num; i++) {
      c.contents[a_len + i] = { kind: 'SEP' };
    }
    for (let i = 0; i < b_len; i++) {
      c.contents[a_len + num + i] = b.contents[i];
    }
    return c;
  }
}
