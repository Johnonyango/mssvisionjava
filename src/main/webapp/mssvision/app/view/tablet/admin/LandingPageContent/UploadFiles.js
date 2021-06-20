Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.UploadFiles', {
    extend: 'Ext.Container',
    xtype: 'uploadfiles',
    width: 900,
    //height: 556,
    // maxHeight:1800,
    controller: 'uploadfilescontroller',
    padding: 15,
    items: [

        {
            height: 600,
            margin: '0 0 0 20',
            flex: 1,
            xtype: 'module',
            items: [
                {
                    xtype: 'formpanel',
                    reference: 'adminuploadsform',
                    items: [
                        {
                            cls: 'module-head',
                            xtype: 'component',
                            html: `<h3>Upload your files here</h3>`,
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
                                    type: 'vbox',
                                    align: 'stretch',
                                },
                            },
                            items: [

                                {
                                    xtype: 'selectbox',
                                    store: {
                                        type: 'permissions'
                                    },
                                    label: 'Viewed by',
                                    displayField: 'name',
                                    name: 'profileId',
                                    valueField: 'id',
                                    flex: 1,
                                    minWidth: 200,
                                },
                                {
                                    xtype: 'selectbox',
                                    store: {
                                        type: 'permissions'
                                    },
                                    label: 'Send To',
                                    displayField: 'name',
                                    name: 'profileId2',
                                    valueField: 'id',
                                    flex: 1,
                                    minWidth: 200,
                                },

                                {
                                    label: 'File Priority:',
                                    labelTextAlign: 'Top',
                                    xtype: 'combobox',
                                    queryMode: 'local',
                                    displayField: 'name',
                                    valueField: 'abbr',

                                    store: [
                                        {name: 'Actionable'},
                                        {name: 'Informative'}
                                    ]
                                },
                                {
                                    xtype: 'textareafield',
                                    labelAlign: 'left',
                                    msgTarget: 'side',
                                    labelTextAlign: 'Top',
                                    name: 'body',
                                    label: 'Description',
                                    // maxRows: 10,
                                    inputType: 'text'
                                },

                                // {
                                //     xtype: 'filefield',
                                //     reference: 'basicFile',
                                //     placeholder:'Choose a file to upload'
                                // },


                            ],
                        }
                    ],
                    // bbar: [
                    //     '->',
                    //     {
                    //         minWidth: 200,
                    //         iconCls: 'fa fa-save',
                    //         text: 'Send',
                    //         ui: 'action',
                    //         handler: 'onSendBtnClick'

                    //     },

                    // ]
                }],

        }

    ]


});