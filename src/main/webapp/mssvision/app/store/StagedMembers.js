Ext.define('MssPhoenix.store.StagedMembers', {
    extend: 'Ext.data.Store',

    alias: 'store.stagedmembers',
    storeId: 'stagedmembers',
    fields: [
        {
            name: 'memberId'
        },
        {
            name: 'fname'
        },
        {
            name: 'lastName'
        }, {
            name: 'shortCreatedAt'
        },
    ],


    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getStagedMemberDetails`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true,
    pageSize: 100,
});