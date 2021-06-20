Ext.define('MssPhoenix.store.MemberSummaryChart', {
    extend: 'Ext.data.Store',
    alias: 'store.membersummarychart',

    // fields: ['country', 'agr', 'ind', 'ser'],
    fields: ['accntprd','year', 'total','month'],
    // data: [
    //     { year: '2016', agr: 188217, total: 30000, ser: 12500746 },
    //     { year: '2017', agr: 918138, total: 45000, ser: 3792665 },
    //     { year: '2018', agr: 71568, total: 60000, ser: 4258274 },
    //     { year: '2019', agr: 17084, total: 72000, ser: 1910915 },
    //     { year: '2020', agr: 78856, total: 120000, ser: 1215198 }
    // ]

    proxy: {
        type: 'ajax',
        // url:`${MssPhoenix.model.Session.baseUrl}/api/getContributionsSummary/${MssPhoenix.model.Session.getMemberId()}/${MssPhoenix.model.Session.getSchemeId()}`,
        url:`${MssPhoenix.model.Session.baseUrl}/api/getClosingBalancesSummary/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true,
    pageSize: 10

});