Ext.define('MssPhoenix.view.tablet.member.documents.MemberDocumentsController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.memberdocumentscontroller',
    /**
     * Called when the view is created
     */
    isPhone: false,
    init: function () {
        let me = this,
            view = me.getView(),
            vm = view.getViewModel();

        if (vm) {
            vm.set('userId', MssPhoenix.model.Session.getUserId());
        }

        me.isPhone = MssPhoenix.profile.Phone.isPhone();
    },


    pickFromUploadesdBtnController: function () {
        let me = this,
            grid = Ext.ComponentQuery.query('#membermissingdocuments');
        if (grid) {
            let record = me.getGridSelectedRecord('#membermissingdocuments');
            if (record) {
                let pickWin = Ext.widget(me.isPhone ? 'memberphone-pickdocument' : 'memberpickdocument');
                pickWin.show();
            } else {
                me.showToast('Kindly select a record')
            }
        }
    },

    closePickDocWin: function () {
        let me = this;
        me.getView().destroy()
    },

    pickDocumentGridSelected: function () {
        let me = this,
            view = me.getView(),
            record = me.getGridSelectedRecord('#membermissingdocuments'),
            doc = me.getGridSelectedRecord('#memberpickdocumentgrid')
        if (record && doc) {
            let params = {
                "documentId": doc.id,
                "memberId": record.memberId,
                "docName": record.name,
                "docNotes": record.comments,
                "docNum": record.checkListId,
                "docTypeId": record.id
            };
            me.maskView(view, 'submitting...')
            Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/memberSubmitRequiredDocument/${MssPhoenix.model.Session.getUserId()}`,
                method: 'POST',
                params: me.encodeJson(params),
                success: function (response, opts) {
                    me.unMaskView(view)
                    let obj = me.decodeJson(response.responseText);
                    if (obj.success) {
                        view.destroy();
                        me.showAlert('Pending approval', obj.data);
                    } else {
                        me.showToast("Failed, please try again", 3000)
                    }
                },
                failure: function (response, opts) {
                    me.unMaskView(view)
                    let obj = me.decodeJson(response.responseText);
                    if (obj)
                        me.showToast(obj.msg, 3000)
                    me.showToast("Failed, please try again", 3000)
                }
            })
        } else {
            me.showToast("Failed, please try again", 3000)
        }
    },

    showMissingDocs: function () {
        let me = this;
        me.redirectTo('membermissingdocuments');
    },

    reloadSubmittedDocs: function () {
        let me = this;
        me.reloadGrid(me.isPhone ? 'memberphone-documentsgrid' : 'memberdocumentsgrid')
    },

    reloadMissingDocs: function () {
        let me = this;
        me.reloadGrid('#membermissingdocuments')
    },

    membermissingdocumentsformSubmit: function () {
        let me = this,
            view = me.getView(),
            grid = Ext.ComponentQuery.query('#membermissingdocuments'),
            form = Ext.ComponentQuery.query('membermissingdocuments #membermissingdocumentsform')[0];
        if (grid) {
            let record = me.getGridSelectedRecord('#membermissingdocuments');
            if (!record) {
                me.showToast('Kindly select a record');
                return;
            }
            let params = {
                "memberId": record.memberId,
                "docName": record.name,
                "docNotes": record.comments,
                "docNum": record.checkListId,
                "docTypeId": record.id
            };

            let userId = MssPhoenix.model.Session.getUserId(),
                memberId = MssPhoenix.model.Session.getMemberId(),
                recordString = me.encodeJson(params);
            let endpoint = `${MssPhoenix.model.Session.baseUrl}/api/memberUploadRequiredDocument/${userId}/${memberId}/${recordString}`;
            // let endpoint=`${MssPhoenix.model.Session.fileUploadPath}/FileHandler`;
            if (form && form.validate()) {
                me.maskView(view, "Submitting...")
                form.submit({
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    url: endpoint,
                    method: 'POST',
                    cors: true,
                    success: function (form, action) {
                        me.unMaskView(view)
                        me.showAlert('Pending approval', action.data);
                        form.reset()
                        // Ext.widget('memberpickdocument').show();
                    },
                    failure: function (form, action) {
                        me.unMaskView(view)
                        me.showAlert('Sorry', me.decodeFormSubmitError(action));
                        // Ext.widget('memberpickdocument').show();
                    }
                })
                return;
            }
        }
        me.showToast('Select file to upload');
    },

    /**
     * PHONE VIEW
     */
    documentListSelected: function (view, selected, eOpts) {
        let data = selected.getData();
        if (data) {
            this.redirectTo(data.id)
        }
    }
});