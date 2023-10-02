
export const TOOLBOX_TURTLE = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'CATEGORY',
      name: '%{BKY_TOOLBOX_TURTLE}',
      colour: '5',
      contents: [
        {
          kind: 'BLOCK',
          type: 'turtle_init',
          blockxml:
            `<block type="turtle_init">
               <value name="XSIZE">
                 <shadow type="math_number">
                   <field name="NUM">640</field>
                 </shadow>
               </value>
               <value name="YSIZE">
                 <shadow type="math_number">
                   <field name="NUM">400</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'turtle_speed',
          blockxml:
            `<block type="turtle_speed">
               <value name="VAL">
                 <shadow type="math_number">
                   <field name="NUM">2</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'turtle_width',
          blockxml:
            `<block type="turtle_width">
               <value name="VAL">
                 <shadow type="math_number">
                   <field name="NUM">2</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'turtle_color',
          blockxml:
            `<block type="turtle_color">
               <value name="VAL">
                 <shadow type="colour_picker">
                   <field name="COLOR">(0, 0, 0)</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'turtle_hsv',
          blockxml:
            `<block type="turtle_hsv">
               <value name="VAL">
                 <shadow type="math_number">
                   <field name="NUM">0</field>
                 </shadow>
               </value>
             </block>`
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
               <value name="VAL">
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
               <value name="VAL">
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
               <value name="VAL">
                 <shadow type="math_number">
                   <field name="NUM">90</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'turtle_move',
          blockxml:
            `<block type="turtle_move">
               <value name="XPOS">
                 <shadow type="math_number">
                   <field name="NUM">0</field>
                 </shadow>
               </value>
               <value name="YPOS">
                 <shadow type="math_number">
                   <field name="NUM">0</field>
                 </shadow>
               </value>
             </block>`
        },
      ]
    }
  ]
};

