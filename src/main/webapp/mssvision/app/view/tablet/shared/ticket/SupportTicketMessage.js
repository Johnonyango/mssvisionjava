Ext.define('MssPhoenix.view.tablet.shared.ticket.SupportTicketMessage', {
    extend: 'MssPhoenix.view.widgets.Module',
    xtype:'supportticketmessage',
    controller: 'ticketmessagecontroller',
    height: 400,
    layout: 'vbox',
    width: 400,
    padding: '15px',
    scrollable: true,
    items: [

        {
            xtype: 'toolbar',
            cls: 'module-head',
            items: [
                {
                    xtype: 'component',
                    cls: 'module-head',
                    html: '<h3>Ticket Replies</h3>'

                },
                '->',
                {
                    text: 'back',
                    ui: 'action',
                    cls: 'icon-print',
                    iconCls: 'x-fa fa-reply',
                    scale: 'small',
                    handler: 'goBackToTickets',
                    name:'goBackToSupportTickets'
                }
            ]
        },

        {
            xtype: 'component',
            bind:{
                html:'<div style="border: 2px solid orange;padding-left: 30px;padding-bottom: 10px; border-top-left-radius: 15px;">'+
                    '<h5><strong> Ticket Title: </strong>{TicketSubject}   '+
                    '<div style="align: right;"> <strong> Ticket status: </strong>{TicketStatus}</div> </h5> '+
                    '<h3><strong>Message:</strong> </h3>{TicketBody}'+
                    '</div>'
            }
        },

        {
            xtype: 'container',
            cls: 'module-body',

            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'list',
                            padding: '0px',
                            store: {
                                type: 'ticketmessage'
                            },
                            itemTpl: '<div style="padding-left: 10px;width:auto;border-left: 6px solid blue;" > ' +
                                '<h4> <strong >{ownerName}</strong>' +
                                ' - {profileName} </h4>' +
                                '<p>  <span style="color:blue;padding-top:100px" > {message} </span> </p> ' +
                                '<i>at {shortDateTime}</i>' +
                                '</div>',
                            emptyText: 'no replies so far',
                            flex:1

                        },
                        {
                            xtype: 'container',
                            html:'<center> <span style="font-size: 3em; color: Tomato;"><i class="fas fa-ban"></i></span><h1>TICKET RESOLVED</h1>' + 
                            ' </center>',
                            bind: {
                                style: {
                                     'display': '{hideClosed}',
                                }
                             },
                        },
                        {
                            xtype: 'formpanel',
                            layout: 'vbox',
                            reference: 'form',
                            alignSelf: 'right',
                            jsonSubmit: true,
                            width: '50%',
                            bind: {
                               style: {
                                    'display': '{hideReply}',
                               }
                            },
                            items: [
                                {
                                    alignSelf: 'right',
                                    xtype: 'textareafield',
                                    required: true,
                                    labelAlign: 'top',
                                    msgTarget: 'side',
                                    labelTextAlign: 'left',
                                    name: 'message',
                                    id: 'message',
                                    required: true,
                                    errorTarget: 'under',
                                    enforceMaxLength: true,
                                    maxLength: 200,
                                    label: '<span class="labelReview">Reply <span style="float:right" id="numChar">200</span> <span style="float:right" >characters remaining:</span></span>',
                                    listeners: {
                                        'keyup': function () {
                                            var newValue = 200 - Ext.getCmp('message').getValue().length;
                                            Ext.get('numChar').update(newValue);
                                        },
                                        'change': function () {
                                            var newValue = 200 - Ext.getCmp('message').getValue().length;
                                            if (newValue <= 0) {
                                                Ext.toast('You can only write reply of up to 200 characters.', 5000);
                                            }
                                        }
                                    },
                                    maxRows: 10,
                                    inputType: 'text',
                                    placeholder: 'input your reply ...'
                                }
                                ,
                                {
                                    xtype: 'mitextfield',
                                    label: 'creator',
                                    name: 'created_by_id',
                                    bind: {
                                        value: '{user.more.id}'
                                    },
                                    hidden: true,
                                },
                                {
                                    xtype: 'mitextfield',
                                    label: 'ticketId',
                                    name: 'ticket_id',
                                    bind: {
                                        value: '{TicketId}'
                                    },
                                    hidden: true,
                                },
                                {
                                    xtype: 'button',
                                    // margin: '0 0 0 500',
                                    width: 110,
                                    iconCls: 'fa fa-save',
                                    text: 'submit',
                                    formBind: true,
                                    ui: 'action',
                                    handler: 'onSaveReplyBtnClick'
                                }
                            ],

                        }

                    ]
                }

            ]
        },

    ]
});