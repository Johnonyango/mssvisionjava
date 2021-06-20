Ext.define('MssPhoenix.view.tablet.admin.User.BatchMemberRegistrationToMss', {
        extend: 'MssPhoenix.view.widgets.Window',
        xtype: 'batchmemberregistrationtomss',
        width: '70%',
        height:500,
        controller: 'adminuserformcontroller',
        items: [{
                xtype: 'formpanel',
                layout: 'form',
                reference: 'fileform',
                itemId: 'uploadfileform',
                items: [{
                    xtype: 'filefield',
                    label: "Batch:",
                    name: 'formFile',
                    allowBlank: false,
                    accept: '.xls, .xlsx',
                    anchor: '100%',
                }],
                buttons: [{
                    text: 'Upload And Register Members',
                    handler: 'onRegisterMembersBtnClick',
                    formBind: true,
                },
                '->',
                {
                    xtype: 'component',
                    html: `<a target="_blank" href="../docs/MssMemberBatchRegistration.xls">Download Template</a>`,
                }
            ]
            },
            {
                xtype: 'formpanel',
                reference: 'importform',
                itemId: 'saveexceptionform',
                labelAlign: 'left',
                bodyStyle: 'padding:5px',
    
                height: 500,
                frame: true,
                items: [{
                    xtype: 'tabpanel',
                    autoHeight: true,
                    height:400,
                    layoutOnTabChange: true,
                    defaults: {
                        autoScroll: true,
                        layout: 'fit',
                    },
                    activeTab: 0,
                    items: [{
                        title: 'Successful Registration',
                        items: [{
                            xtype: 'successfulregistrationgrid',
                            height: 250,
                        }]
                    }, {
                        title: 'Unsuccessful Registration',
                        items: [{
                            xtype: 'unsuccessfulregistrationgrid',
                            height: 250,
                        }]
                    }]
    
                }]
            }
        ],
        buttons: ['->', 
            {
                text: 'Close',
                reference: 'closeBtn',
                handler: 'onCancelBtnClick'
            },
        ]
    
    });