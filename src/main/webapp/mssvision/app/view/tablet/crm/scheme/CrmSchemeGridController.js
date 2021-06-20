Ext.define('MssPhoenix.view.tablet.crm.scheme.CrmSchemeGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.crmschemegridcontroller',
    mixins:[
        'MssPhoenix.view.tablet.crm.mixins.GridMixin'
     ],
    onViewMembersButtonClick: function (cmp, record, item, index, e, eOpts) {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            var xType = 'crmmembers';
            me.redirectTo(xType);
            // me.collapse();
        }
    },
    init: function () { }
});