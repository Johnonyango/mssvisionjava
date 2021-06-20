Ext.define('MssPhoenix.view.tablet.admin.mixin.GridMixin', {
    //extend: 'Ext.Container',
    
    getSelectedRecord: function() {
        var me = this;

        var records = me.getView().getSelectionModel().getSelection();
        if (records[0]) {
            //processing
            return records[0];
        } else {
            Ext.Msg.alert('No Item Selected', 'Please select an item from the list');
        }
    },
    getSelectedRecords: function() {
        var me = this;

        var records = me.getView().getSelectionModel().getSelection();
        if (records) {
            //processing
            return records;
        } else {
            Ext.Msg.alert('No Item Selected', 'Please select an item from the list');
        }
    }
});