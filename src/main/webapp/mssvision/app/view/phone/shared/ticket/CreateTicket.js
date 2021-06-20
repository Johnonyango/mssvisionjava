Ext.define('MssPhoenix.view.phone.shared.ticket.CreateTicket', {
    extend: 'MssPhoenix.view.widgets.Window',

    // requires: ['Ext.froala.Editor'],

    xtype: 'phonecreateticket',
    width: "90%",
    // height: 556,
    // title: 'Create your Ticket',

    controller: 'createticketcontroller',
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
                    html: `<h3>Ticket</h3>`,
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
                            type: 'vbox',
                            align: 'stretch',
                        },
                    },
                    items: [
                        {
                            items: [
                                {
                                    xtype: 'selectbox',
                                    errorTarget: 'under',
                                    label: 'Issue',
                                    name: 'ticketIssueId',
                                    required: true,
                                    editable: false,
                                    errorTarget: 'under',
                                    store: {
                                        type: 'ticketissue'
                                    },
                                    displayField: 'issue',
                                    valueField: 'id',
                                },
                                {
                                    label: 'Ticket Priority',
                                    errorTarget: 'under',
                                    xtype: 'selectbox',
                                    name: 'priority',
                                    queryMode: 'local',
                                    displayField: 'name',
                                    required: true,
                                    errorTarget: 'under',
                                    valueField: 'name',

                                    store: [
                                        { name: 'LOW' },
                                        { name: 'MEDIUM' },
                                        { name: 'HIGH' }
                                    ],
                                    margin: '0 0 0 6',
                                },
                            ]
                        }
                        ,
                        {
                            xtype: 'mitextfield',
                            errorTarget: 'under',
                            required: true,
                            maxLength: 200,
                            errorTarget: 'under',
                            label: 'subject',
                            name: 'subject'
                        }
                        ,
                        {
                            xtype: 'mitextfield',
                            label: 'creator',
                            name: 'createdById',
                            bind: {
                                value: '{user.more.id}'
                            },
                            hidden: true,
                        }
                        ,
                        {
                            xtype: 'textareafield',
                            errorTarget: 'under',
                            labelAlign: 'top',
                            msgTarget: 'side',
                            labelTextAlign: 'left',
                            name: 'body',
                            id: 'body',
                            required: true,
                            enforceMaxLength: true,
                            maxLength: 200,
                            label: '<span class="labelReview">Describe the challenges you are facing <span style="float:right" id="numChar">200</span> <span style="float:right" >characters remaining:</span></span>',
                            listeners: {
                                'keyup': function () {
                                    var newValue = 200 - Ext.getCmp('body').getValue().length;
                                    Ext.get('numChar').update(newValue);
                                },
                                'change': function () {
                                    var newValue = 200 - Ext.getCmp('body').getValue().length;
                                    if (newValue <= 0) {
                                        Ext.toast('You can only write challenge of up to 200 characters.', 5000);
                                    }
                                }
                            },
                            // maxRows: 10,
                            inputType: 'text'
                        },


                    ],
                }
                ],
                bbar: [
                    {
                        iconCls: 'fa fa-save',
                        formBind: true,
                        ui: 'action',
                        handler: 'onSaveTicketBtnClick'

                    }, {
                        iconCls: 'fa fa-ban',
                        ui: 'action',
                        handler: 'onCancelBtnClick'
                    }
                ]
            }],

        }

    ]


});