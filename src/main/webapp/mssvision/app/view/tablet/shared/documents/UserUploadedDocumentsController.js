Ext.define('MssPhoenix.view.tablet.shared.documents.UserUploadedDocumentsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.useruploadeddocumentscontroller',
    /**
     * Called when the view is created
     */
    init: function () {
        let me=this,
            view=me.getView(),
            vm=view.getViewModel();

        if (vm){
            vm.set('userId',MssPhoenix.model.Session.getUserId());
        }
    },

    useruploadeddocsformSubmit: function () {
        let me = this,
            view = me.getView(),
            form = Ext.ComponentQuery.query('useruploadeddocuments #useruploadeddocsform')[0];

        if (form && form.validate()) {
            me.maskView(view, "Uploading...")
            form.submit({
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*'
                },
                url: `${MssPhoenix.model.Session.fileUploadPath}/FileHandler`,
                method: 'POST',
                cors: true,
                useDefaultXhrHeader: false,
                success: function (form, action) {
                    me.unMaskView(view)
                    form.reset()
                    me.showAlert('Success', 'File uploaded successfully')
                },
                failure: function (form, action) {
                    me.unMaskView(view)
                    me.showAlert('Success', 'File uploaded successfully')
                }
            })
            return;
        }
        me.showToast('Select file to upload');
    },

    reloadUploadedDocs: function () {
        let me = this;
        me.reloadGrid('useruploadeddocsgrid')
    },

});