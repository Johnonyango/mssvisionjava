Ext.define('MssPhoenix.view.tablet.pensioner.personalinfo.PersonalDetailsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.pensionerdetailscontroller',

    
    init: function () {
        let me = this;
        me.loadPersonalInfo()
    },

    showEmploymentDetailsWin: function () {
        var winContainer = Ext.widget('pensionerdetails');
        winContainer.show();
        let main = Ext.ComponentQuery.query('main')[0];
        if (main){
            let mainViewModel=main.getViewModel();
            if (mainViewModel){
                let data=mainViewModel.getData().memberInfo
                winContainer.lookupReference('pensionerform').setValues(data);
            }
        }
    },

    btnSaveOnClick: function () {
        console.log("=============================");
        let form = Ext.ComponentQuery.query('pensionerpersonalinfo')[0];
        // console.log(form.getValues());
        console.log("=============================");
    },

    loadDataToForm: function (data) {
        if (MssPhoenix.profile.Phone.isPhone()) {
            let form = Ext.ComponentQuery.query('phonepensionerpersonalinfo')[0];
            if (form) {
                form.setValues(data)
            }
        }
        else {
            let form = Ext.ComponentQuery.query('pensionerpersonalinfo')[0];
            if (form) {
                form.setValues(data)
            }
        }
    },

    loadPersonalInfo: function () {
        let me = this;
        me.getView().mask('Please wait...');
        Ext.Ajax.request({
            url:`${MssPhoenix.model.Session.baseUrl}/api/getpensionerdetails/${MssPhoenix.model.Session.getMemberId()}`,

            success: function (response, opts) {
                me.getView().unmask();
                let obj = Ext.decode(response.responseText);
                // console.dir(obj.data);
                me.loadDataToForm(obj.data)
            },
            failure: function (response, opts) {
                me.getView().unmask();
                console.log('server-side failure with status code ' + response.status);
            }
        });
    }
});