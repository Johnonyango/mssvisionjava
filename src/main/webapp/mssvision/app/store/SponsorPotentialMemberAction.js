Ext.define('MssPhoenix.store.SponsorPotentialMemberAction', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name'],
    alias:'store.sponsorpotentialmemberaction',

    data : [
        {"id":"1", "name":"SPONSOR_APPROVE"},
        {"id":"2", "name":"DECLINE"},
     ]
});