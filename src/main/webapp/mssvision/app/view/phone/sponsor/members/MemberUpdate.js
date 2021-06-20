    Ext.define('MssPhoenix.view.phone.sponsor.members.MemberUpdate', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'sponsormemberupdatebatchfinishphone',
    width: '70%',
    controller: 'memberbatchupdatecontroller',
    items: [{
            xtype: 'formpanel',
            layout: 'form',
            reference: 'fileform',
            itemId: 'updatememberform',
            items: [{
                xtype: 'filefield',
                label: "Batch:",
                name: 'template',
                allowBlank: false,
                accept: '.xls',
                anchor: '100%',
            }],
            buttons: [
              
                {
                text: 'Upload',
                handler: 'onFileFormUpdateButtonClick',
                formBind: true,
            },
           

             ]
        },
        {
            xtype: 'formpanel',
            reference: 'importform',
            itemId: 'saveupdatememberform',
            labelAlign: 'left',
            bodyStyle: 'padding:5px',
            height: 300,
            frame: true,
            items: [{
                xtype: 'tabpanel',
                height: 500,
                autoHeight: true,
                layoutOnTabChange: true,
                defaults: {
                    autoScroll: true,
                    height: 200,
                    layout: 'fit',
                },
                activeTab: 0,

                items: [{
                    title: 'Valid Imports',
                    border: false,
                    items: [{
                        xtype: 'membervalidupdategrid'
                    }]
                }, {
                    title: 'Exceptions',
                    border: false,
                    items: [{
                        xtype: 'memberexceptionupdategrid'
                    }]
                }]

            }]
        }
    ],
    buttons: ['->', {
            text: 'Save',
            disabled: true,
            reference: 'savebtn',
            handler: 'onSaveBtnClick'
        },
        {
            text: 'Close',
            reference: 'closeBtn',
            handler: 'onCloseBtnClick'
        },
    ]

});