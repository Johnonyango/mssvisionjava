Ext.define('MssPhoenix.view.phone.crm.claims.SubmittedDocuments', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'crmphonesubmitteddocuments',
    width: "90%",
    maxHeight: "90%",
    controller: 'crmsubmittedDocumentController',
    padding: 15,
    closable: true,
    title: 'Documents',
    items: [
        {
            xtype: 'useruploadeddocsgrid'
        }
    ],
    bbar: [
        '->',
        {
            text: 'close',
            ui: 'action',
            // scale: 'small',
            handler: 'onCancelBtnClick',
            iconCls: 'fa fa-ban',
        }
    ],
});