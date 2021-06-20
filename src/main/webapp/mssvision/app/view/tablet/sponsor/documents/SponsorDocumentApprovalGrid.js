Ext.define('MssPhoenix.view.tablet.sponsor.documents.SponsorDocumentApprovalGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    
    xtype: 'sponsorschemedocumentsapprovalgrid',
    viewModel: {
        type: 'sponsorgridvmodel'
    },
    controller:'sponsordocumentapprovalgridcontroller',
    store: {
        type: 'sponsorapproval'
    },
    layout: 'fit',
    // scrollable:true,
    plugins: {
        gridpagingtoolbar: true
    },
    selectable: {
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        extensible: 'y'
    },
    height:500,
    scrollable: true,
    constrain: true,


    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            default: {
                ui: 'action'
            },

            items: [    
                {
                    bind: {
                        style: {
                            'display': '{isApproveDocument}'
                        }
                    },
                    text: 'Approve Document',
                    // scale: 'small',
                    handler: 'onApproveBtnClick',
                    id: 'approvedocumentsSponsor',
                    ui:'action',
                },
             '->',
            {
                iconCls:'fa fa-redo',
                handler: 'reloadDocumentsGrid',
                ui: 'action'
            },  
            ],
        }
    ],
    columns: [
        {
            text: 'Member  No',
            dataIndex: 'memberId',
            flex: 1
        },
        {
            text: 'Document Name',
            dataIndex: 'docName',
            flex: 3
        },
        {
            text: 'Document No',
            dataIndex: 'docNum',
            flex: 1
        },
        {
            text: 'Approved',
            dataIndex: 'approved',             
            renderer: 'formatTrueOrFalseDisplay', 
            cell: {
                encodeHtml: false
            },
            flex: 1
        },
        {
            text: ':::',
            flex: 1,
            dataIndex: 'documentId.id',
            renderer: function (v) {
                return `<a target="_blank" href="${MssPhoenix.model.Session.fileUploadPath}/FileHandler?file=${v}">Download</a>`;
            },
            cell: {
                encodeHtml: false
            },
        },
    ]
});















