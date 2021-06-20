Ext.define('MssPhoenix.view.tablet.principalofficer.registeredmembers.StagedBeneficiariesGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    
    // Uncomment to give this component an xtype 
    xtype : 'stagedbeneficiariesgrid',


    store: {
        type: 'stagedbeneficiaries'
    },

    minHeight: 200,
    layout: 'fit',
    plugins: {
        gridpagingtoolbar: true
    },
    scrollable: true,

    selectable: {
        columns: true,
        checkbox: true,
        extensible: 'y',
        mode: 'single'
    },

    columns: [
        {
            text: 'MEMBER ID',
            dataIndex: 'benMemberId',
            flex: 1
        },
        {
            text: 'BENEFICIARY NAME',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: 'RELATIONSHIP TYPE',
            dataIndex: 'benRelationshipType',
            flex: 1
        },
        {
            text: 'BENLUMPSUM ENTITLEMENT',
            dataIndex: 'benLumpsumEntitlement',
            flex: 1
        },
        {
            text: 'DATE CREATED',
            dataIndex: 'shortCreatedAt',
            flex: 1,
        },
    ],

    listeners: {
        click: {
            element: 'element',
            fn: 'viewStagedBeneficiaryDetails'
        },
    }
});