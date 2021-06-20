Ext.define('MssPhoenix.store.MemberReasonForExit', {
    extend: 'Ext.data.Store',
    alias: 'store.memberreasonsforexit',
    
    fields: [
        {name: 'id'},
        {name: 'category'},
        {name: 'reason'},
    ],
   
   proxy: {
       type: 'ajax',
       url: `${MssPhoenix.model.Session.baseUrl}/api/getReasonsForExit/${MssPhoenix.model.Session.getUserId()}`,
       reader: {
           type: 'json',
           rootProperty: 'data'
       }
   },
   autoLoad: true,
   pageSize: 10,
});