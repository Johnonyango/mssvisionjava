Ext.define('MssPhoenix.view.tablet.pensioner.personalinfo.EmploymentDetails', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'pensioneremploymentdetails',
    width: 600,
    height: 430,
    title: 'Employment Details',

    controller: 'pensioneremplymentdetailscontroller',
    padding: 15,

    items: [
        {
            xtype: 'module',
            items: [
                {
                    xtype: 'container',
                    cls: 'module-body',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                    },
                    defaults: {
                        width: '100%',
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'stretch',
                        }
                    },
                    items: [
                        {
                            items: [{
                                xtype: 'mitextfield',
                                label: 'pensioner No.',
                                name: 'pensionerNO',
                                value: '30748',
                                readOnly: true,
                            },
                            {
                                xtype: 'mitextfield',
                                label: 'Department',
                                name: 'DEPARTMENT',
                                value: 'I.T',
                                readOnly: true,
                                margin: '0 0 0 6',
                            },]
                        },

                        {
                            items: [
                                {
                                    xtype: 'mitextfield',
                                    label: 'Designation',
                                    name: 'DESIGNATION',
                                    value: 'C.E.O',
                                    readOnly: true,
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'National Pension Number.',
                                    margin: '0 0 0 6',
                                    name: 'NATIONALPENSIONNUMBER',
                                    value: '43567',
                                    readOnly: true
                                }
                            ]
                        },

                        {
                            items: [
                                {
                                    xtype: 'mitextfield',
                                    label: 'Policy Number',
                                    name: 'POLICYNUMBER',
                                    value: '27',
                                    readOnly: true
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Party Ref. No',
                                    margin: '0 0 0 6',
                                    name: 'PARTYREFNO',
                                    value: 'mary02/08/1965888888928',
                                    readOnly: true
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'mitextfield',
                                    label: 'TAX NUMBER',
                                    name: 'TAXNUMBER',
                                    value: 'A12345678H',
                                    readOnly: true,
                                    flex:0,
                                    width:'50%'
                                },
                            ]
                        },
                    ],
                }
            ]
        }
    ],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
            '->',
            {
                text: 'close',
                scale: 'small',
                listeners: {
                    click: 'onCancelBtnClick'
                }
            }]
    }]

});