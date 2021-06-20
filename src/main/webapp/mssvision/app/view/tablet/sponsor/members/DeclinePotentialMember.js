Ext.define('MssPhoenix.view.tablet.sponsor.members.DeclinePotential', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'sponsorpotentialmemberdecline',
    maxWidth: 900,
    scrollable: true,
    maxHeight: 650,
    closable:true,

    controller: 'declinepotentialmembercontroller',

    padding: 15,
    items: [
        {
            xtype: 'toolbar',
            cls: 'module-head',
            items: [
                {
                    xtype: 'component',
                    bind: {
                        html: '<h3>Send back decline response to potential member</h3>'
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
                    jsonSubmit: true,
                    items: [
                        {
                            alignSelf: 'right',
                            xtype: 'textareafield',
                            labelAlign: 'top',
                            msgTarget: 'side',
                            labelTextAlign: 'left',
                            name: 'message',
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
                            placeholder: 'Input your Message...'
                        }
                    ]
                }
            ]
        }
    ],
    bbar: [
        {
            text: 'Submit',
            ui: 'action',
            handler: 'onSubmitBtnClick',
            iconCls: 'fa fa-save',

        },
        '->',
        {
            text: 'Cancel',
            ui: 'action',
            handler: 'onCancelBtnClick',
            iconCls: 'fa fa-ban',

        }
    ],
});