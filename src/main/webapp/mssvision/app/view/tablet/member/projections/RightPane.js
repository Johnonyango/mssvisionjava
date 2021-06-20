Ext.define('MssPhoenix.view.tablet.member.projections.RightPane', {
    extend: 'Ext.Container',

    xtype: 'p-rightpane',

    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    defaults: {
        width: '100%',
        xtype: 'container',
        layout: 'hbox',
        layout:{
            type:'hbox',
            align: 'stretch',
        }
    },
    items: [

        {
            xtype: 'component',
            html: '<h4>Select financial assumptions</h4>'
        },

        {

            items: [
                {
                xtype: 'selectbox',
                fieldLabel: 'Future inflation per annum',
                name: 'FUTUREINFLATIONPERANNUM',
                store: {
                    fields: ['value', 'name'],
                    data: [
                        { "value": "3%", "name": "3%" },
                        { "value": "4%", "name": "4%" },
                        { "value": "5%", "name": "5%" },
                        { "value": "6%", "name": "6%" },
                        { "value": "7%", "name": "7%" },
                        { "value": "8%", "name": "8%" },
                    ]
                },
                value:'3%',
                displayField: 'name',
                valueField: 'value',
            },

            {
                xtype: 'mitextfield',
                fieldLabel: 'Future investment return per annum',
                margin: '0 0 0 6',
                name: 'FUTUREINVESTMENTRETURNPERANNUM',
                store: {
                    fields: ['value', 'name'],
                    data: [
                        { "value": "2%", "name": "2%" },
                        { "value": "3%", "name": "3%" },
                        { "value": "4%", "name": "4%" },
                        { "value": "5%", "name": "5%" },
                        { "value": "6%", "name": "6%" },
                    ]
                },
                value:'2%',
                displayField: 'name',
                valueField: 'value',
            }]
        },

        {
            items: [
                {
                    xtype: 'mitextfield',
                    fieldLabel: 'Future salary increases per annum',
                    name: 'FUTURESALARYINCREASESPERANNUM',
                    store: {
                        fields: ['value', 'name'],
                        data: [
                            { "value": "0%", "name": "0%" },
                            { "value": "1%", "name": "1%" },
                            { "value": "2%", "name": "2%" },
                        ]
                    },
                    displayField: 'name',
                    valueField: 'value',
                    value:'0%'
                },
                {
                    xtype: 'mitextfield',
                    fieldLabel: 'Future investment return per annum',
                    margin: '0 0 0 6',
                    name: 'FUTUREINVESTMENTRETURNPERANNUM',
                    value: '10%',
                    readOnly: true
                }
            ]
        },

        {
            items: [
                {
                    xtype: 'mitextfield',
                    fieldLabel: 'Future salary increases per annum',
                    name: 'FUTURESALARYINCREASESPERANNUM',
                    readOnly: true,
                    width: '50%',
                    value: '6%',
                    flex: 0
                },
            ]
        },
    ],
});