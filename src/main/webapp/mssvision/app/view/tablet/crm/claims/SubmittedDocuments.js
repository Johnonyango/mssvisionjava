Ext.define('MssPhoenix.view.tablet.crm.claims.SubmittedDocuments', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'crmsubmitteddocuments',
    maxWidth: 900,
    height: 300,
    minWidth: 600,
    maxHeight: 650,
    scrollable: false,

    controller: 'crmsubmittedDocumentController',
    padding: 15,
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
            name: 'onCancelBtnClick',
            iconCls: 'fa fa-ban',
        }
    ],
});