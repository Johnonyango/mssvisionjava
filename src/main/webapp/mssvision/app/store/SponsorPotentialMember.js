Ext.define('MssPhoenix.store.SponsorPotentialMember', {
    extend: 'Ext.data.Store',

    alias: 'store.sponsorpotentialmember',

    storeId:'sponsorpotentialmemberid',

    fields: [
        {
            name: 'id'
        },
        {
            name: 'memberNo'
        },
        {
            name: 'name'
        },
        {
            name: 'ssnit'
        },
        {
            name: 'cellPhone'
        },
        {
            name: 'email'
        },
        {
            name: 'dob'
        },
        {
            name: 'approved'
        },
        {
            name: 'idNo'
        },
        {
            name: 'age'
        },
        {
            name: 'dateApproved'
        },
        {
            name: 'dateDeclined'
        },
        {
            name: 'declineReason'
        },
        {
            name: 'declined'
        }, 
        {
            name: 'sponsorId'
        }, 
        {
            name: 'sponsorProdNo'
        }, 
        {
            name: 'sponsorName'
        }, 
    ],

    proxy: {
        
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getSponsorPotentialMembers/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}`,
        cors:true,
        useDefaultXhrHeader : false,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    pageSize: 5,
    
});