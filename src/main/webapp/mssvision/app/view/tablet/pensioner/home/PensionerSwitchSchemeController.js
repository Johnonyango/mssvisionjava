Ext.define('MssPhoenix.view.tablet.pensioner.home.PensionerSwitchSchemeController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.pensionerswitchschemecontroller',
  
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
            data=me.getGridSelectedRecord('pensionerswitchschemewin #pensionerswitchschemewinTB');
        if (data){
            view.destroy()
            me.saveItem('schemeId',data.id);
            me.redirectTo('home');
            window.location.reload();
        }
    }

});