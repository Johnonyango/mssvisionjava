Ext.define('MssPhoenix.view.tablet.sponsor.tpfa.TPFAGridController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.tpfagridcontroller',
    /**
     * Called when the view is created
     */
    init: function () { },

    reloadTpfaGrid: function () {
        var me = this;
        me.reloadGrid("tpfagrid");
    },

    ReceivedBtnClick: function () {
        let messageStore = Ext.getStore('sponsormembertpfa');
        messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getMemberTpfa/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}/RECEIVED`;
        messageStore.reload();
    },

    RequestedBtnClick: function () {
        let messageStore = Ext.getStore('sponsormembertpfa');
        messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getMemberTpfa/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}/REQUESTED`;
        messageStore.reload();
    },

    UnqualifiedBtnClick: function () {
        let messageStore = Ext.getStore('sponsormembertpfa');
        messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getMemberTpfa/${MssPhoenix.model.Session.getSchemeId()}/${MssPhoenix.model.Session.getSponsorIdField()}/UNQUALIFIED`;
        messageStore.reload();



    }


});