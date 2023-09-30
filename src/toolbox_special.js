
export const TOOLBOX_SPECIAL = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'CATEGORY',
      name: '%{BKY_TOOLBOX_SPECIAL}',
      colour: 330,
      contents: [
        {
          kind: 'BLOCK',
          type: 'text_nocrlf_print',
          blockxml:
            `<block type="text_nocrlf_print">
               <value name="TEXT">
                 <shadow type="text">
                   <field name="TEXT">abc</field>
                 </shadow>
               </value>
             </block>`,
        }
      ]
    }
  ]
};

