Blockly.Blocks['web_fetch'] = {
  init: function () {
    this.appendValueInput("data_")
      .setCheck(null)
      .appendField("取得內容")
      .appendField(new Blockly.FieldDropdown([["text", "text"], ["json", "json"]]), "type_");
    this.appendStatementInput("do_")
      .setCheck(null)
      .appendField("執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(130);
    this.setTooltip("");
    this.setHelpUrl("https://oxxo.studio");
  }
};

Blockly.Blocks['web_fetch_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("取得的內容");
    this.setOutput(true, null);
    this.setColour(105);
    this.setTooltip("");
    this.setHelpUrl("https://oxxo.studio");
  }
};