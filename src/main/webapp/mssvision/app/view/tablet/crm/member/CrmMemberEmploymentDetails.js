Ext.define('MssPhoenix.view.tablet.crm.member.CrmMemberEmploymentDetails', {
    extend: 'MssPhoenix.view.widgets.Window',

    width: 600,
    // height: 430,

    // closable: true,
    xtype: 'crmmemberemploymentdetails',
    // title: 'Employment Details',

    controller: 'crmmemberemploymentdetailscontroller',
    // padding: 15,

    items: [
        {
            xtype: 'module',
            items: [
                {
                    xtype: 'component',
                    cls: 'module-head',
                    html: `<h3>Employment Details</h3>`
                },
                {
                    xtype: 'formpanel',
                    cls: 'module-body',
                    reference:'form',
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
                            items: [
                                {
                                    xtype: 'mitextfield',
                                    label: 'Member No.',
                                    name: 'memberNo',
                                    margin: '10 0 0 0',
                                    readOnly: true,
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Department',
                                    name: 'department',
                                    readOnly: true,
                                    margin: '10 0 0 6'
                                },]
                        },

                        {
                            items: [
                                {
                                    xtype: 'mitextfield',
                                    label: 'Designation',
                                    name: 'designation',
                                    margin: '10 0 0 0',
                                    readOnly: true
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'National Pension Number.',
                                    margin: '10 0 0 6',
                                    name: 'nationalPenNo',
                                    readOnly: true
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
                                    margin: '10 0 0 0',
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'Party Ref. No',
                                    margin: '10 0 0 6',
                                    name: 'partyrefno',
                                    readOnly: true
                                }
                            ]
                        }                        
                    ],
                }
            ]
        }
    ],
    bbar: [
        '->',
        {
            text: 'close',
            ui:'action',
            handler:'onCloseButtonClick',
            iconCls:'fa fa-ban',

        }
    ],



});