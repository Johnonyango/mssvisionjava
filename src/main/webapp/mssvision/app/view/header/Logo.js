Ext.define('MssPhoenix.view.header.Logo', {
    extend: 'Ext.Img',

    xtype: 'headerlogo',

    alt: 'logo',
    src: `${MssPhoenix.model.Session.getLogoUrl()}`,
    width: 217,
    height: 60,
});