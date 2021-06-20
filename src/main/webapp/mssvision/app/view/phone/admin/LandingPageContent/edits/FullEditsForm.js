Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.edits.FullEditsForm', {

    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'edits-fulleditsform',
    width: 900,
    height: 656,
    controller: 'logocontroller',
    padding: 15,

    items: [


        {
            height: 600,
            margin: '0 0 0 20',
            flex: 1,
            reference: 'logoform',
            xtype: 'formpanel',
            items: [{
                xtype: 'formpanel',
                items: [{
                    cls: 'module-head',
                    xtype: 'component',
                    html: `<h3>Change LandingPageContent</h3>`,
                },
                {
                    cls: 'module-body',
                    xtype: 'container',
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
                        scrollable: true,
                    },
                    items: [
                        {
                            xtype: 'image',
                            userCls: 'main-user-image small-image circular',
                            alt: 'Current user image',

                            width: 400,
                            height: 150,
                            bind: {
                                src:
                                    'resources/images/SystechLogo.PNG '
                                // //#21
                                // html:'<h2>As a pensioner, you can manage your scheme account details!</h2>'
                            }
                        },
                        { height: 20 },
                        {
                            xtype: 'filefield',
                            flex: 1,
                            placeholder: 'Change Your Logo Image',
                            name: 'logo',
                            //name: 'photo-path',   

                            buttonText: '',
                            buttonConfig: {
                                iconCls: 'file-uploads-image-add'
                            }
                        },
//End of Logo
                        { height: 20 },
//Pensioner Image
                        {
                            xtype: 'image',
                            userCls: 'main-user-image small-image circular',
                            alt: 'Current user image',

                            width: 400,
                            height: 150,
                            bind: {
                                src:
                                    'resources/images/OldCouple.jpg '
                                // //#21
                                // html:'<h2>As a pensioner, you can manage your scheme account details!</h2>'
                            }
                        },
                        { height: 10 },


                        {
                            xtype: 'filefield',
                            flex: 1,
                            placeholder: 'Change Your Pensioner Image',
                            name: 'pensionerImage',
                            //name: 'photo-path',   

                            buttonText: '',
                            buttonConfig: {
                                iconCls: 'file-uploads-image-add'
                            }
                        },
                        { height: 20 },
//Login Image
                        {
                            xtype: 'image',
                            userCls: 'main-user-image small-image circular',
                            alt: 'Current user image',

                            width: 400,
                            height: 150,
                            bind: {
                                src:
                                    'resources/images/bg23.jpg '
                                // //#21
                                // html:'<h2>As a pensioner, you can manage your scheme account details!</h2>'
                            }
                        },
                        { height: 10 },


                        {
                            xtype: 'filefield',
                            flex: 1,
                            placeholder: 'Change Your Login Image',
                            name: 'pensionerImage',
                            //name: 'photo-path',   

                            buttonText: '',
                            buttonConfig: {
                                iconCls: 'file-uploads-image-add'
                            }
                        },
                        { height: 20 },
//Member Icon
                        {
                            xtype: 'image',
                            userCls: 'main-user-image small-image circular',
                            alt: 'Current user image',

                            width: 400,
                            height: 150,
                            bind: {
                                src:
                                    'resources/images/MemberIcon.png '
                                // //#21
                                // html:'<h2>As a pensioner, you can manage your scheme account details!</h2>'
                            }
                        },
                        { height: 10 },


                        {
                            xtype: 'filefield',
                            flex: 1,
                            placeholder: 'Change Your Member Icon',
                            name: 'pensionerImage',
                            //name: 'photo-path',   

                            buttonText: '',
                            buttonConfig: {
                                iconCls: 'file-uploads-image-add'
                            }
                        },
                        { height: 20 },
//Member Icon
                        {
                            xtype: 'image',
                            userCls: 'main-user-image small-image circular',
                            alt: 'Current user image',

                            width: 400,
                            height: 150,
                            bind: {
                                src:
                                    'resources/images/PensionerIcon.png '
                                // //#21
                                // html:'<h2>As a pensioner, you can manage your scheme account details!</h2>'
                            }
                        },
                        { height: 10 },


                        {
                            xtype: 'filefield',
                            flex: 1,
                            placeholder: 'Change Your Pensioner Icon',
                            name: 'pensionerImage',
                            
                            buttonText: '',
                            buttonConfig: {
                                iconCls: 'file-uploads-image-add'
                            }
                        },
                        { height: 20 },
                        //Member Icon
                    {
                        xtype: 'image',
                        userCls: 'main-user-image small-image circular',
                        alt: 'Current user image',

                        width: 400,
                        height: 150,
                        bind: {
                            src:
                                'resources/images/PensionerIcon.png '
                            // //#21
                            // html:'<h2>As a pensioner, you can manage your scheme account details!</h2>'
                        }
                    },
                    { height: 10 },


                    {
                        xtype: 'filefield',
                        flex: 1,
                        placeholder: 'Change Your Pensioner Icon',
                        name: 'pensionerImage',
                        
                        buttonText: '',
                        buttonConfig: {
                            iconCls: 'file-uploads-image-add'
                        }
                    },


                        //End of Pictures

                    ],
                }
                ],
                bbar: [
                    '->',
                    {
                        minWidth: 200,
                        iconCls: 'fa fa-save',
                        text: 'Save Changes',
                        ui: 'action',
                        handler: 'onSaveLogoBtnClick'

                    }, {
                        minWidth: 200,
                        iconCls: 'fa fa-ban',
                        text: 'Exit',
                        ui: 'action',
                        handler: 'onCancelBtnClick'
                    }
                ]
            }],

        }

    ]
});
