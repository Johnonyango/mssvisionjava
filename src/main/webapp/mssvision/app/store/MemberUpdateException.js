Ext.define('MssPhoenix.store.MemberUpdateException', {
    extend: 'Ext.data.Store',
    storeId: 'memberexceptionupdatestore',
    alias:'store.memberexceptionupdatestore',

    fields: ['name', 'email', 'phone'],
      
    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/updateMemberBatch`,
        cors:true,
        useDefaultXhrHeader : false,
        reader: {
            type: 'json',
            rootProperty: 'rows'
        }
    },
    
});