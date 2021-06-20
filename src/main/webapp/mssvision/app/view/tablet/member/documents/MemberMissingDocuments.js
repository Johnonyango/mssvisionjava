Ext.define('MssPhoenix.view.tablet.member.documents.MemberMissingDocuments', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    // controller: 'memberdocumentscontroller',
    xtype:'membermissingdocuments',

    items: [{
        xtype: 'module',
        padding: '15px',
        items: [{
            xtype: 'toolbar',
            items: [
                {
                    margin:'0 0 0 10',
                    xtype: 'button',
                    scale: 'small',
                    text:'Pick From Uploaded',
                    ui: 'action',
                    formBind: true,
                    handler: 'pickFromUploadesdBtnController'
                },
                '->',
                {
                    xtype: 'formpanel',
                    reference: 'membermissingdocumentsform',
                    itemId: 'membermissingdocumentsform',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                    },
                    items: [
                        {
                            xtype: 'mitextfield',
                            name:'userId',
                            hidden:true,
                            bind:{
                                value:'{userId}'
                            }
                        },
                        {
                            xtype: 'filefield',
                            name: 'file',
                            placeholder: 'Select file',
                            tooltip: 'Select file',
                            flex: 1,
                            required:true,
                            minWidth:200
                        },
                        {
                            margin:'0 0 0 10',
                            xtype: 'button',
                            scale: 'small',
                            text:'Upload',
                            ui: 'action',
                            formBind: true,
                            handler: 'membermissingdocumentsformSubmit'
                        },
                        {
                            margin:'0 0 0 10',
                            iconCls:'fa fa-redo',
                            handler: 'reloadMissingDocs',
                            ui: 'action'
                        },
                    ]
                },
            ]
        },
            {
                xtype: 'container',
                cls: 'module-body',
                height:300,
                scrollable: true,
                items: [{
                    xtype: 'table',
                    itemId: 'membermissingdocuments',
                    store: {
                        type: 'membermissingdocuments'
                    },

                    selectable: {
                        columns: true,
                        checkbox: true,
                        extensible: 'y'
                    },

                    minHeight: 200,

                    columns: [
                        {text: 'Name', dataIndex: 'name', flex: 3},
                        {text: 'Owner', dataIndex: 'checkListOwner', flex: 1},
                        {text: 'Checklist TYpe', dataIndex: 'checklistType', flex: 1},
                        {text: 'Beneficiary Name', dataIndex: 'beneficiary', flex: 1},
                        {text: 'Relationship', dataIndex: 'relationshipType', flex: 1},
                        {text: 'Mandatory', dataIndex: 'mandatory', flex: 1},
                        {text: 'Comments', dataIndex: 'comments', flex: 1,hidden:true},
                    ]
                }]
            }
        ]
    }]
});