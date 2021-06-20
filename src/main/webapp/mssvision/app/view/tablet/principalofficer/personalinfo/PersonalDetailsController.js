Ext.define('MssPhoenix.view.tablet.principalofficer.personalinfo.PersonalDetailsController', {
    extend: 'MssPhoenix.view.tablet.principalofficer.PoBaseController',

    alias: 'controller.podetailscontroller',


    init: function () {
        let me = this,
            view = me.getView();
        view.mask('Please wait...');
        me.loadPersonalInfo(function (data) {
            me.unMaskView(view)
            me.loadDataToForm(data[0])
        }, function () {
            me.unMaskView(view)
        });
    },


    loadDataToForm: function (data) {
        let me = this, form;
        if (MssPhoenix.profile.Phone.isPhone()) {
            form = Ext.ComponentQuery.query('popersonalinfophone')[0];
        } else {
            form = Ext.ComponentQuery.query('popersonalinfo')[0];
        }
        if (form) {
            form.setValues(data)
        }
        let main = Ext.ComponentQuery.query('main')[0];
        if (main) {
            let mainViewModel = main.getViewModel();
            if (mainViewModel) {
                mainViewModel.set('poInfo', data)
            }
        }
    },

});