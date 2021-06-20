Ext.define('MssPhoenix.store.MemberValidUpdateStore', {
    extend: 'Ext.data.Store',
    storeId: 'membervalidupdatestore',
    alias:'store.membervalidupdatestore',

    fields: ['name', 'email', 'phone'],
      
    proxy: {
        type: 'ajax',
        // url: `${MssPhoenix.model.Session.baseUrl}/updateMemberBatch`,
        // cors:true,
        // useDefaultXhrHeader : false,
        reader: {
            type: 'json',
            rootProperty: 'rows'
        }
    },
    
});



