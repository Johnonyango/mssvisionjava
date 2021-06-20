Ext.define('MssPhoenix.store.SponsorUserStore', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name'],
    alias:'store.sponsorusers',

    data : [
        {"id":"8", "name":"CLAIM OFFICER"},
        {"id":"9", "name":"BILLING OFFICER"},
        {"id":"10", "name":"CLAIM REVIEWER"}
    ]
});