Ext.define('MssPhoenix.view.tablet.principalofficer.personalinfo.PersonalDetails', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'popersonaldetails',

    controller: 'podetailscontroller',
    // width:'100%',
    
    items: [{
        xtype: 'panel',
        items: [{
            xtype: 'module',
            items: [
                {
                    xtype: 'component',
                    cls: 'module-head',
                    html: `<h3>Personal Details</h3>`
                },
                {
                    xtype: 'formpanel',
                    cls: 'module-body',
                    reference:'poform',
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
                    items: [
                        
                        {
                        items: [{
                            xtype: 'mitextfield',
                            label: 'Name',
                            name: 'name',
                            readOnly: true,
                            bind: {
                                value: '{name}'
                            }
                        },
                        ]
                    },
                    {
                        items: [{
                            xtype: 'mitextfield',
                            label: 'Date of birth',
                            name: 'dob',
                            readOnly: true,
                            margin: '0 0 0 6',
                            bind: {
                                value: '{dob}'
                            }
                        },
                        ]
                    },

                        {
                            items: [{
                                xtype: 'mitextfield',
                                label: 'Identification Number',
                                name: 'idNumber',
                                readOnly: true,
                                bind: {
                                    value: '{idNumber}'
                                }
                            },
                            ]
                        },

                        {
                            items: [{
                                xtype: 'mitextfield',
                                label: 'Date of appointment',
                                name: 'dateOfAppointment',
                                readOnly: true,
                                bind: {
                                    value: '{dateOfAppointment}'
                                }
                            }
                            ]
                        },
                    ],
                }
            ]
        }],

    }],
});