Ext.define('MssPhoenix.view.tablet.sponsor.mixins.GridMixin', { 
   
    getSelectedRecord: function() {
        var me = this;

        var records = me.getView().getSelections();
        if (records[0]) {
            return records[0];
        } else {
            Ext.Msg.alert('No Item Selected', 'Please select an item from the list');
        }
    },
    getSelectedRecords: function() {
        var me = this;

        var records = me.getView().getSelections();
        if (records) {
            //processing
            return records;
        } else {
            Ext.Msg.alert('No Item Selected', 'Please select an item from the list');
        }
    }
});