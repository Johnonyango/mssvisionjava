Ext.define('MssPhoenix.view.actions.Pensioner.certifficates.CertificateGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'pensionercertificategrid',
    height: 456,
    scrollable: true,

    controller: 'basecontroller',

    store: {
        type: 'pensionercertificate'
    },


    columns: [
        { text: 'Cycle', dataIndex: 'cycle', flex: 1 },
        { text: 'StartDate', dataIndex: 'startDate', flex: 1 },
        { text: 'EndDate', dataIndex: 'stopDate', flex: 1 },
        { text: 'Center', dataIndex: 'center', flex: 1 },
        {
            text: 'Details',
            dataIndex: 'daysRemaining', 
            renderer: 'formatPensionerCoeStatus',
            cell: {
                encodeHtml: false
            },
            flex: 1
        },
        {
            text: 'Status',
            dataIndex: 'status',
            renderer: 'formatCertificateStatus',
            cell: {
                encodeHtml: false
            },
            flex: 1
        },
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },

});