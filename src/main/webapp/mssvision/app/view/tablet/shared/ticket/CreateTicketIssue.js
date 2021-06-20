Ext.define('MssPhoenix.view.tablet.shared.ticket.CreateTicketIssue', {
    extend: 'MssPhoenix.view.widgets.Window',

    // requires: ['Ext.froala.Editor'],

    xtype: 'createticketissue',
    width: 600,
    // height: 556,
    // title: 'Create your Ticket',

    controller: 'createticketissuecontroller',
    // padding: 15,
    items: [

        {
            maxHeight: 600,
            margin: '0 0 0 0',
            flex: 1,
            xtype: 'module',
            items: [{
                xtype: 'formpanel',
                items: [{
                    cls: 'module-head',
                    xtype: 'component',
                    html: `<h3>Ticket issue</h3>`,
                },
                {
                    cls: 'module-body',
                    xtype: 'formpanel',
                    reference: 'form',
                    jsonSubmit: true,
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
                    },
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Ticket issue',
                            name: 'issue'
                        }
                        ,
                        {
                            xtype: 'selectbox',
                            label: 'Issue Handler',
                            name: 'profileId',
                            store: {
                                type: 'profile'
                            },
                            displayField: 'name',
                            valueField: 'id',
                        }


                    ]
                }
                ],
                bbar: [
                    '->',
                    {
                        minWidth: 200,
                        iconCls: 'fa fa-save',
                        text: 'Save',
                        name: 'cancelTicketIssue',
                        formBind: true,
                        ui: 'action',
                        handler: 'onSaveTicketIssueBtnClick'

                    }, {
                        minWidth: 200,
                        iconCls: 'fa fa-ban',
                        name: 'cancelTicketIssue',
                        text: 'close',
                        ui: 'action',
                        handler: 'onCancelBtnClick'
                    }
                ]
            }],

        }

    ]


});