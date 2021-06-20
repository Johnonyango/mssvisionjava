Ext.define('MssPhoenix.view.tablet.member.personalinfo.PersonalInfoController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.memberpersonalinfocontroller',

    /**
     * Called when the view is created
     */
    isPhone: false,
    init: function () {
        let me = this;
        let view = me.getView();
        view.mask("loading...")
        me.loadMemberInformation(function (callBackData) {
            view.unmask()
            me.loadDataToForm(callBackData)
        }, function (res) {
            Ext.toast("Please try again")
            view.unmask()
        });

        me.isPhone = MssPhoenix.profile.Phone.isPhone();
    },

    employmentdetailsWindow: null,

    showAllMemberDetails: function () {
        let me=this;
        me.redirectTo('allmemberdetails')
    },

    showEmploymentDetailsWin: function () {
        let me = this,
            view = me.getView();
        view.mask("loading...")
        me.loadMemberInformation(function (callBackData) {
            view.unmask()
            me.loadDataToForm(callBackData);
            if (me.employmentdetailsWindow != null) {
                me.employmentdetailsWindow.show();
            }
        }, function (res) {
            Ext.toast("Please try again")
            view.unmask()
        });
    },

    btnSaveOnClick: function () {
        console.log("=============================");
        let form = Ext.ComponentQuery.query('memberpersonalinfo')[0];
        console.log("=============================");
    },

    loadDataToForm: function (data) {
        let me = this, form;
        if (me.isPhone) {
            form = Ext.ComponentQuery.query('memberphone-personalinfo')[0];
            me.employmentdetailsWindow = Ext.widget('memberphone-employmentdetails');
        } else {
            form = Ext.ComponentQuery.query('memberpersonalinfo')[0];
            me.employmentdetailsWindow = Ext.widget('memberemploymentdetails');
        }
        if (form) {
            form.setValues(data)
            if (me.employmentdetailsWindow != null) {
                me.employmentdetailsWindow.lookupReference('myform').setValues(data);
            }
        }
        let main = Ext.ComponentQuery.query('main')[0];
        if (main) {
            let mainViewModel = main.getViewModel();
            if (mainViewModel) {
                mainViewModel.set('memberInfo', data)
            }
        }
    },
});