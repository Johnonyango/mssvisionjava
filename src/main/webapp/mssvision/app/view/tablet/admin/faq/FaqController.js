Ext.define('MssPhoenix.view.tablet.admin.faq.FaqController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.faqcontroller',
    /**
     * Called when the view is created
     */
    isPhone: false,
    init: function () {
        let me = this;
        me.isPhone = MssPhoenix.profile.Phone.isPhone();

    },

    addFAQ: function () {
        let me = this,
            view = Ext.widget('faqaddedit');
        view.show();
    },
    addPhoneFAQ: function () {
        let me = this,
            view = Ext.widget('phonefaqaddedit');
        view.show();
    },

    saveFAQ: function () {
         let me=this,
             view=me.getView(),
             form=view.lookupReference('faqaddeditform'),
             method = 'POST',
             url =`${MssPhoenix.model.Session.baseUrl}/api/faq/addEditFAQ`;
        if (form && form.validate()) {
            me.maskView(view,'Saving...')
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert('Hello','Saved successfully');
                    form.reset();
                },
                failure: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert('Sorry','Failed, please try again');
                }
            });
        }
    },

    editFaq: function () {
        let me = this,
            record = me.getGridSelectedRecord("faqgrid");
        if (record) {
            let win = Ext.widget('faqaddedit');
            win.show();
            let form = win.lookupReference("faqaddeditform");
            if (form)
                form.setValues(record)
        }
    },
    
    reloadFaqs:function(){
        var me = this;
        // // let grid = Ext.ComponentQuery.query('faqgrid')[0];
        // if (grid) {
            me.reloadGrid('faqgrid');
        // }
    }
});