Ext.define('MssPhoenix.view.phone.member.documents.MemberMissingDocuments', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'memberdocumentscontroller',
    // xtype:'memberphone-missingdocuments',

    items: [{
        xtype: 'module',
        padding: '15px',
        items: [

            {
                xtype: 'formpanel',
                reference: 'membermissingdocumentsform',
                itemId: 'membermissingdocumentsform',
                layout: {
                    type: 'vbox',
                    align: 'stretch',
                },
                items: [
                    {
                        xtype: 'mitextfield',
                        name: 'userId',
                        hidden: true,
                        bind: {
                            value: '{userId}'
                        }
                    },
                    {
                        xtype: 'filefield',
                        name: 'file',
                        placeholder: 'Select file',
                        tooltip: 'Select file',
                        flex: 1,
                        required: true,
                        minWidth: 200
                    },

                ],
                bbar: [
                    {
                        margin: '0 0 0 10',
                        xtype: 'button',
                        scale: 'small',
                        text: 'Pick From Uploaded',
                        ui: 'action',
                        formBind: true,
                        handler: 'pickFromUploadesdBtnController'
                    },
                    '->',
                    {
                        margin: '0 0 0 10',
                        xtype: 'button',
                        scale: 'small',
                        text: 'Upload',
                        ui: 'action',
                        formBind: true,
                        handler: 'membermissingdocumentsformSubmit'
                    },
                    {
                        margin: '0 0 0 10',
                        iconCls: 'fa fa-redo',
                        handler: 'reloadMissingDocs',
                        ui: 'action'
                    },
                ]
            },

            {
                xtype: 'container',
                cls: 'module-body',
                minHeight: 200,
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
                        {text: 'Name', dataIndex: 'name', flex: 2},
                        {text: 'Owner', dataIndex: 'checkListOwner', flex: 1, hidden: true},
                        {text: 'Checklist TYpe', dataIndex: 'checklistType', flex: 1},
                        {text: 'Beneficiary Name', dataIndex: 'beneficiary', flex: 1, hidden: true},
                        {text: 'Relationship', dataIndex: 'relationshipType', flex: 1, hidden: true},
                        {text: 'Mandatory', dataIndex: 'mandatory', flex: 1, hidden: true},
                        {text: 'Comments', dataIndex: 'comments', flex: 1, hidden: true},
                    ]
                }]
            }
        ]
    }]
});