Ext.define('MssPhoenix.view.tablet.pensioner.personalinfo.PersonalDetails', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'pensionerpersonaldetails',

    controller: 'pensionerdetailscontroller',
    // width:'100%',
    
    items: [{
        xtype: 'panel',
        items: [{
            xtype: 'module',
            items: [
                {
                    xtype: 'component',
                    cls: 'module-head',
                    html: `<h3>Pensioner Details</h3>`
                },
                {
                    xtype: 'formpanel',
                    cls: 'module-body',
                    reference:'pensionerform',
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
                        },
                        margin: '5 0',
                    },
                    items: [{
                        items: [{
                            xtype: 'mitextfield',
                            label: 'Name',
                            name: 'name',
                            readOnly: true,
                            bind: {
                                value: '{name}'
                            }
                        },
                            {
                                xtype: 'mitextfield',
                                label: 'Member Number',
                                name: 'memberNo',
                                readOnly: true,
                                margin: '0 0 0 6',
                                bind: {
                                    value: '{memberNo}'
                                }
                            },
                        ]
                    },

                        {
                            items: [{
                                xtype: 'mitextfield',
                                label: 'Pensioner Number',
                                name: 'pensionerNo',
                                readOnly: true,
                                bind: {
                                    value: '{pensionerNo}'
                                }
                            },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Scheme ID',
                                    margin: '0 0 0 6',
                                    name: 'schemeId',
                                    readOnly: true,
                                    bind: {
                                        value: '{schemeId}'
                                    }
                                }
                            ]
                        },

                        {
                            items: [{
                                xtype: 'mitextfield',
                                label: 'ID Number',
                                name: 'idNo',
                                readOnly: true,
                                bind: {
                                    value: '{idNo}'
                                }
                            },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Tax Number',
                                    margin: '0 0 0 6',
                                    name: 'pinNo',
                                    readOnly: true,
                                    bind: {
                                        value: '{pinNo}'
                                    }
                                }
                            ]
                        },
                        {
                            items: [{
                                xtype: 'mitextfield',
                                label: 'Date Of Birth',
                                name: 'dob',
                                readOnly: true,
                                flex: 0,
                                width: '50%',
                                bind: {
                                    value: '{dob}'
                                }
                            },
                            {
                                xtype: 'mitextfield',
                                label: 'Gender',
                                margin: '0 0 0 6',
                                name: 'gender',
                                readOnly: true,
                                bind: {
                                    value: '{gender}'
                                }
                            }
                        ]
                        },
                    ],
                }
            ]
        }],
        // bbar: [
        //     '->',
        //     {
        //         text: 'Close',
        //         ui: 'action',
        //         handler: 'onCancelBtnClick',
        //     }
        // ],

    }],
});