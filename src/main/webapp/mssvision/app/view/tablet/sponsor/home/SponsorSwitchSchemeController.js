Ext.define('MssPhoenix.view.tablet.sponsor.home.SponsorSwitchSchemeController', {
    extend: 'MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController',
    alias: 'controller.sponsorswitchschemecontroller',
  
    init: function () {},

    closeWin:function() {
        let me=this;
        me.getView().destroy()
    },
    onSwitchScheme: function (view, newValue, oldValue, eOpts) {
        let me = this;
        me.saveItem('schemeId', newValue);
        me.redirectTo('home');
        window.location.reload();
    },

    onSchemeSelected: function () {
        let me=this,
            view=me.getView(),
            data=me.getGridSelectedRecord('sponsorswitchschemewin #sponsorswitchschemewinTB');
        if (data){
            view.destroy()
            me.saveItem('schemeId',data.id);
            me.redirectTo('home');
            window.location.reload();
        }
    }

});