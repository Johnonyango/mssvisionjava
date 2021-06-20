Ext.define('MssPhoenix.view.tablet.sponsor.claims.DeclineClaims', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'sponsorclaimsdecline',
    maxWidth: 900,
    scrollable: true,
    maxHeight: 650,
    viewModel:
    {
        type: 'sponsorclaimsviewmodel'
    },
    controller: 'sponsorclaimsdeclinecontroller',

    padding: 15,
    items: [
        {
            xtype: 'toolbar',
            cls: 'module-head',
            items: [
                {
                    xtype: 'component',
                    bind: {
                        html: '<h3>Send back claims to Member</h3>'
                    }
                }

            ]
        },
        {
            xtype: 'container',
            cls: 'module-body',
            items: [
                {
                    xtype: 'formpanel',
                    margin: '10 10 0 10',
                    layout: 'hbox',
                    reference: 'form',
                    jsonSubmit: true,
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'id',
                            name: 'id',
                            margin: '10 0 0 0',
                            bind: {
                                value: '{sponsorClaimsId}'
                            },
                            readOnly: true,
                            hidden: true
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'userId',
                            name: 'userId',
                            margin: '10 0 0 0',
                            bind: {
                                value: '{sponsorClaimsUserId}'
                            },
                            readOnly: true,
                            hidden: true
                        },
                        {
                            alignSelf: 'right',
                            xtype: 'textareafield',
                            labelAlign: 'top',
                            msgTarget: 'side',
                            labelTextAlign: 'left',
                            name: 'reason',
                            id: 'reason',
                            required: true,
                            errorTarget:'under',
                            enforceMaxLength: true,
                            maxLength: 200,
                            label: '<span class="labelReview">Please specify decline reason <span style="float:right" id="numChar">200</span> <span style="float:right" >characters remaining:</span></span>',
                            listeners: {
                                'keyup': function () {
                                    var newValue = 200 - Ext.getCmp('reason').getValue().length;
                                    Ext.get('numChar').update(newValue);
                                },
                                'change': function () {
                                    var newValue = 200 - Ext.getCmp('reason').getValue().length;
                                    if (newValue <= 0) {
                                        Ext.toast('You can only write reason of up to 200 characters.', 5000);
                                    }
                                }
                            },
                            maxRows: 10,
                            inputType: 'text',
                            placeholder: 'Input your reason...'
                        }
                    ]
                }
            ]
        }
    ],
    bbar: [
        {
            text: 'submit',
            ui: 'action',
            // scale: 'small',
            handler: 'onSubmitBtnClick',
            iconCls: 'fa fa-save',

        },
        '->',
        {
            text: 'cancel',
            ui: 'action',
            handler: 'onCancelBtnClick',
            iconCls: 'fa fa-ban',

        }
    ],
});