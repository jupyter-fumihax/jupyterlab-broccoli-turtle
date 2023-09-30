

export const TOOLBOX_TURTLE = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'CATEGORY',
      name: '%{BKY_TOOLBOX_TURTLE}',
      colour: '150',
      contents: [
        {
          kind: 'BLOCK',
          type: 'turtle_init',
        },
        {
          kind: 'BLOCK',
          type: 'turtle_done',
        },
        {
          kind: 'BLOCK',
          type: 'turtle_pen_down',
        },
        {
          kind: 'BLOCK',
          type: 'turtle_pen_up',
        },
        {
          kind: 'BLOCK',
          type: 'turtle_forward',
          blockxml:
            `<block type="turtle_forward">
               <value name="NUM">
                 <shadow type="math_number">
                   <field name="NUM">100</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'turtle_turn_right',
          blockxml:
            `<block type="turtle_turn_right">
               <value name="NUM">
                 <shadow type="math_number">
                   <field name="NUM">90</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'turtle_turn_left',
          blockxml:
            `<block type="turtle_turn_left">
               <value name="NUM">
                 <shadow type="math_number">
                   <field name="NUM">90</field>
                 </shadow>
               </value>
             </block>`
        },
      ]
    }
  ]
};

