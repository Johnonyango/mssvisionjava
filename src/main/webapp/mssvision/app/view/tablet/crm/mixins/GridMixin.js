Ext.define('MssPhoenix.view.tablet.crm.mixins.GridMixin', {
   
    getSelectedRecord: function() {
        let me = this;
        let records = me.getView().getSelections();
        if (records[0]) {
            //processing
            return records[0];
        } else {
            Ext.Msg.alert('No Item Selected', 'Please select an item from the list');
        }
    },
    
    getSelectedRecords: function() {
        let me = this;
        let records = me.getView().getSelections();
        if (records) {
            return records;
        } else {
            Ext.Msg.alert('No Item Selected', 'Please select an item from the list');
        }
    }
});