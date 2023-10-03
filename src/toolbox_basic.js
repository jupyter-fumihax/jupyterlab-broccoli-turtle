//
export const TOOLBOX_BASIC = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: '%{BKY_TOOLBOX_LOGIC}',
      colour: '210',
      contents: [
        {
          kind: 'block',
          type: 'controls_if'
        },
        {
          kind: 'BLOCK',
          type: 'logic_compare'
        },
        {
          kind: 'BLOCK',
          type: 'logic_operation',
          blockxml: `<block type='logic_operation'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'logic_negate',
          blockxml: `<block type='logic_negate'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'logic_boolean',
          blockxml: `<block type='logic_boolean'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'logic_null',
          blockxml: `<block type='logic_null'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'logic_ternary',
          blockxml: `<block type='logic_ternary'></block>`
        }
      ]
    },
    {
      kind: 'category',
      name: '%{BKY_TOOLBOX_LOOPS}',
      colour: '120',
      contents: [
        {
          kind: 'BLOCK',
          type: 'controls_repeat_ext',
          blockxml: 
            `<block type='controls_repeat_ext'>
               <value name='TIMES'>
                 <shadow type='math_number'>
                   <field name='NUM'>10</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'controls_whileUntil',
          blockxml: `<block type='controls_whileUntil'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'controls_for',
          blockxml:
            `<block type='controls_for'>
               <value name='FROM'>
                 <shadow type='math_number'>
                   <field name='NUM'>1</field>
                 </shadow>
               </value>
               <value name='TO'>
                 <shadow type='math_number'>
                   <field name='NUM'>10</field>
                 </shadow>
               </value>
               <value name='BY'>
                 <shadow type='math_number'>
                   <field name='NUM'>1</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'controls_forEach',
          blockxml: `<block type='controls_forEach'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'controls_flow_statements',
          blockxml: `<block type='controls_flow_statements'></block>`
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: '%{BKY_TOOLBOX_MATH}',
      colour: '230',
      contents: [
        {
          kind: 'BLOCK',
          type: 'math_number',
          blockxml: `<block type='math_number'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'math_arithmetic',
          blockxml:
            `<block type='math_arithmetic'>
               <value name='A'>
                 <shadow type='math_number'>
                   <field name='NUM'>1</field>
                 </shadow>
               </value>
               <value name='B'>
                 <shadow type='math_number'>
                   <field name='NUM'>1</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'math_single',
          blockxml:
            `<block type='math_single'>
               <value name='NUM'>
                 <shadow type='math_number'>
                   <field name='NUM'>9</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'math_trig',
          blockxml:
            `<block type='math_trig'>
               <value name='NUM'>
                 <shadow type='math_number'>
                   <field name='NUM'>45</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'math_constant',
          blockxml: `<block type='math_constant'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'math_number_property',
          blockxml:
            `<block type='math_number_property'>
               <value name='NUMBER_TO_CHECK'>
                 <shadow type='math_number'>
                   <field name='NUM'>0</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'math_change',
          blockxml:
            `<block type='math_change'>
               <value name='DELTA'>
                 <shadow type='math_number'>
                   <field name='NUM'>1</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'math_round',
          blockxml:
            `<block type='math_round'>
               <value name='NUM'>
                 <shadow type='math_number'>
                   <field name='NUM'>3.1</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'math_on_list',
          blockxml: `<block type='math_on_list'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'math_modulo',
          blockxml:
            `<block type='math_modulo'>
               <value name='DIVIDEND'>
                 <shadow type='math_number'>
                   <field name='NUM'>64</field>
                 </shadow>
               </value>
               <value name='DIVISOR'>
                 <shadow type='math_number'>
                   <field name='NUM'>10</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'math_constrain',
          blockxml:
            `<block type='math_constrain'>
              <value name='VALUE'>
                <shadow type='math_number'>
                  <field name='NUM'>50</field>
                </shadow>
              </value>
              <value name='LOW'>
                <shadow type='math_number'>
                  <field name='NUM'>1</field>
                </shadow>
              </value>
              <value name='HIGH'>
                <shadow type='math_number'>
                  <field name='NUM'>100</field>
                </shadow>
              </value>
            </block>`
        },
        {
          kind: 'BLOCK',
          type: 'math_random_int',
          blockxml:
            `<block type='math_random_int'>
               <value name='FROM'>
                 <shadow type='math_number'>
                   <field name='NUM'>1</field>
                 </shadow>
               </value>
               <value name='TO'>
                 <shadow type='math_number'>
                   <field name='NUM'>100</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'math_random_float',
          blockxml: `<block type='math_random_float'></block>`
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: '%{BKY_TOOLBOX_TEXT}',
      colour: '160',
      contents: [
        {
          kind: 'BLOCK',
          type: 'text',
          blockxml: `<block type='text'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'text_join',
          blockxml: `<block type='text_join'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'text_append',
          blockxml:
            `<block type='text_append'>
               <value name='TEXT'>
                 <shadow type='text'></shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'text_length',
          blockxml:
            `<block type='text_length'>
               <value name='VALUE'>
                 <shadow type='text'>
                   <field name='TEXT'>abc</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'text_isEmpty',
          blockxml:
            `<block type='text_isEmpty'>
               <value name='VALUE'>
                 <shadow type='text'>
                   <field name='TEXT'></field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'text_indexOf',
          blockxml:
            `<block type='text_indexOf'>
               <value name='VALUE'>
                 <block type='variables_get'>
                   <field name='VAR'>text</field>
                 </block>
               </value>
               <value name='FIND'>
                 <shadow type='text'>
                   <field name='TEXT'>abc</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'text_charAt',
          blockxml:
            `<block type='text_charAt'>
               <value name='VALUE'>
                 <block type='variables_get'>
                   <field name='VAR'>text</field>
                 </block>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'text_getSubstring',
          blockxml:
            `<block type='text_getSubstring'>
               <value name='STRING'>
                 <block type='variables_get'>
                   <field name='VAR'>text</field>
                 </block>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'text_changeCase',
          blockxml:
            `<block type='text_changeCase'>
               <value name='TEXT'>
                 <shadow type='text'>
                   <field name='TEXT'>abc</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'text_trim',
          blockxml:
            `<block type='text_trim'>
               <value name='TEXT'>
                 <shadow type='text'>
                   <field name='TEXT'>abc</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'text_print',
          blockxml:
            `<block type='text_print'>
               <value name='TEXT'>
                 <shadow type='text'>
                   <field name='TEXT'>abc</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'text_prompt_ext',
          blockxml:
            `<block type='text_prompt_ext'>
               <value name='TEXT'>
                 <shadow type='text'>
                   <field name='TEXT'>abc</field>
                 </shadow>
               </value>
             </block>`
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: '%{BKY_TOOLBOX_LISTS}',
      colour: '260',
      contents: [
        {
          kind: 'BLOCK',
          type: 'lists_create_with',
          blockxml:
            `<block type='lists_create_with'>
               <mutation items='0'></mutation>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'lists_create_with',
          blockxml: `<block type='lists_create_with'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'lists_repeat',
          blockxml:
            `<block type='lists_repeat'>
               <value name='NUM'>
                 <shadow type='math_number'>
                   <field name='NUM'>5</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'lists_length',
          blockxml: `<block type='lists_length'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'lists_isEmpty',
          blockxml: `<block type='lists_isEmpty'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'lists_indexOf',
          blockxml:
            `<block type='lists_indexOf'>
               <value name='VALUE'>
                 <block type='variables_get'>
                   <field name='VAR'>list</field>
                 </block>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'lists_getIndex',
          blockxml:
            `<block type='lists_getIndex'>
               <value name='VALUE'>
                 <block type='variables_get'>
                   <field name='VAR'>list</field>
                 </block>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'lists_setIndex',
          blockxml:
            `<block type='lists_setIndex'>
               <value name='LIST'>
                 <block type='variables_get'>
                   <field name='VAR'>list</field>
                 </block>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'lists_getSublist',
          blockxml:
            `<block type='lists_getSublist'>
               <value name='LIST'>
                 <block type='variables_get'>
                   <field name='VAR'>list</field>
                 </block>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'lists_split',
          blockxml:
            `<block type='lists_split'>
               <value name='DELIM'>
                 <shadow type='text'>
                   <field name='TEXT'>,</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'lists_sort',
          blockxml: `<block type='lists_sort'></block>`
        }
      ]
    },
    {
      kind: 'CATEGORY',
      name: '%{BKY_TOOLBOX_COLOR}',
      colour: '20',
      contents: [
        {
          kind: 'BLOCK',
          type: 'colour_picker',
          blockxml: `<block type='colour_picker'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'colour_random',
          blockxml: `<block type='colour_random'></block>`
        },
        {
          kind: 'BLOCK',
          type: 'colour_rgb',
          blockxml:
            `<block type='colour_rgb'>
               <value name='RED'>
                 <shadow type='math_number'>
                   <field name='NUM'>100</field>
                 </shadow>
               </value>
               <value name='GREEN'>
                 <shadow type='math_number'>
                   <field name='NUM'>50</field>
                 </shadow>
               </value>
               <value name='BLUE'>
                 <shadow type='math_number'>
                   <field name='NUM'>0</field>
                 </shadow>
               </value>
             </block>`
        },
        {
          kind: 'BLOCK',
          type: 'colour_blend',
          blockxml:
            `<block type='colour_blend'>
               <value name='COLOUR1'>
                 <shadow type='colour_picker'>
                   <field name='COLOUR'>#ff0000</field>
                 </shadow>
               </value>
             <value name='COLOUR2'>
               <shadow type='colour_picker'>
                 <field name='COLOUR'>#3333ff</field>
               </shadow>
             </value>
             <value name='RATIO'>
               <shadow type='math_number'>
                 <field name='NUM'>0.5</field>
               </shadow>
             </value>
           </block>`
        }
      ]
    },
    {
      kind: 'SEP'
    },
    {
      kind: 'CATEGORY',
      custom: 'VARIABLE',
      colour: '330',
      name: '%{BKY_TOOLBOX_VARIABLES}'
    },
    {
      kind: 'CATEGORY',
      custom: 'PROCEDURE',
      colour: '290',
      name: '%{BKY_TOOLBOX_FUNCTIONS}'
    },
  ]
};

