Ext.define('MssPhoenix.view.phone.member.personalinfo.EmploymentDetails', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'memberphone-employmentdetails',
    width: '80%',
    controller: 'memberemplymentdetailscontroller',
    maxHeight: '80%',
    closable: true,
    title: 'Employment Details',
    items: [{
        xtype: 'panel',
        items: [{
            xtype: 'module',
            scrollable: true,
            items: [
                {
                    xtype: 'formpanel',
                    cls: 'module-body',
                    reference: 'myform',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                    },
                    defaults: {
                        width: '100%',
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            align: 'stretch',
                        },
                        margin: '5 0',
                    },
                    items: [{
                        items: [{
                            xtype: 'mitextfield',
                            label: 'Member No.',
                            name: 'memberNo',
                            readOnly: true,
                            bind: {
                                value: '{memberInfo.memberNo}'
                            }
                        },
                            {
                                xtype: 'mitextfield',
                                label: 'Department',
                                name: 'department',
                                readOnly: true,
                                margin: '0 0 0 0',
                                bind: {
                                    value: '{memberInfo.department}'
                                }
                            },
                        ]
                    },

                        {
                            items: [{
                                xtype: 'mitextfield',
                                label: 'Designation',
                                name: 'designation',
                                readOnly: true,
                                bind: {
                                    value: '{memberInfo.designation}'
                                }
                            },
                                {
                                    xtype: 'mitextfield',
                                    label: 'National Pension Number.',
                                    margin: '0 0 0 0',
                                    name: 'nationalPenNo',
                                    readOnly: true,
                                    bind: {
                                        value: '{memberInfo.nationalPenNo}'
                                    }
                                }
                            ]
                        },

                        {
                            items: [
                                {
                                    xtype: 'mitextfield',
                                    label: 'TAX NUMBER',
                                    name: 'pinNo',
                                    readOnly: true,
                                    width: '50%',
                                    bind: {
                                        value: '{memberInfo.pinNo}'
                                    }
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Party Ref. No',
                                    margin: '0 0 0 0',
                                    name: 'partyrefno',
                                    readOnly: true,
                                    bind: {
                                        value: '{memberInfo.partyrefno}'
                                    }
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'mitextfield',
                                    label: 'Policy Number',
                                    name: 'policyNo',
                                    readOnly: true,
                                    bind: {
                                        value: '{memberInfo.policyNo}'
                                    }
                                },]
                        },
                    ],
                }
            ]
        }],
        bbar: [
            '->',
            {
                text: 'Close',
                ui: 'action',
                handler: 'onCancelBtnClick'
            }
        ]
    }],
});