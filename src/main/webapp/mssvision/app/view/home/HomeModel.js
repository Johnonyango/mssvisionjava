Ext.define('MssPhoenix.view.home.HomeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.home',


    stores: {
        persons: {
            type: 'persons'
        }
    }
});