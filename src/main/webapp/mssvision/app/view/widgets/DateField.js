Ext.define('MssPhoenix.view.widgets.DateField', {
    extend: 'Ext.field.Date',
    xtype : 'midatefield', 
    labelAlign: 'top',
    msgTarget: 'side',
    labelTextAlign:'left',
    dateFormat: 'd-m-Y',
    flex: 1
});