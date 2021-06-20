Ext.define('MssPhoenix.view.tablet.shared.notifications.NotificationsController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.notificationscontroller',
    /**
     * Called when the view is created
     */

    init: function () {
        let me = this,
            view = me.getView(),
            vm = view.getViewModel(),
            role = MssPhoenix.model.Session.getUserRole();
        switch (role) {
            case 'PENSIONER':
            case 'MEMBER':
                vm.set('allowCompose', 'none');
                vm.set('showOutbox', 'none');
                break;
            default:
        }
    },

    sendBroadCastOnProfileChange: function (v, newValue, eOpts) {
        let me = this,
            view = me.getView(),
            vm = view.getViewModel();
        let data = newValue.data;
        let profileV = me.getComponentById('profile'),
            labelTextV = me.getComponentById('labelText');
        if (profileV && labelTextV) {
            profileV.setValue(data.name);
            labelTextV.setHtml(`Enter comma separated <b>${data.loginIdentifierName}</b>, leave blank to send to ALL`);
        }
    },

    onSendBroadcastClick: function () {
        let me = this,
            view = me.getView(),
            sendBroadcastForm = view.lookupReference('sendbroadcastform');
        if (sendBroadcastForm && sendBroadcastForm.validate()) {
            me.maskView(view, "Please wait...")
            sendBroadcastForm.submit({
                url: `${MssPhoenix.model.Session.baseUrl}/api/sendBroadCast/${MssPhoenix.model.Session.getUserId()}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                success: function (form, action) {
                    me.unMaskView(view);
                    me.showAlert('Success', 'Message has been sent')
                },
                failure: function (form, action) {
                    me.unMaskView(view);
                    me.showAlert("Sorry", me.decodeFormSubmitError(action));
                }
            });
        }
    },

    onComposeClick: function () {
        let me = this,
            view = Ext.widget('sendbroadcast');
        view.show();
    },

    onInboxGridSelected: function () {
        let me = this,
            record = me.getGridSelectedRecord('#inboxtb');
        if (record) {
            let id = record.id,
                messages = record.messages;
            // console.log(messages)
            let params = {
                'subject': messages.subject,
                'shortDate': messages.shortCreatedAt,
                'to': messages.toName,
                'message': messages.message,
            };
            let view = Ext.widget('detailsinbox'),
                form = view.lookupReference('detailsform');
            if (form) {
                form.setValues(params)
                view.show();

                me.urlGet(`${MssPhoenix.model.Session.baseUrl}/api/setMessageRead/${id}`, function (obj) {
                    let str = Ext.getStore('broadcastmessagesinbox');
                    if (str)
                        str.reload()
                }, function (err) {
                })

            }
        }
    },

    onOutboxGridSelected: function () {
        let me = this,
            record = me.getGridSelectedRecord('#outboxtb');
        if (record) {
            let messages = record.messages;
            // console.log(messages)
            let params = {
                'shortDate': messages.shortCreatedAt,
                'to': messages.receiversOutbox,
                'profile': messages.toProfileName,
                'subject': messages.subject,
                'message': messages.message,
            };
            let view = Ext.widget('detailsoutbox'),
                form = view.lookupReference('detailsform');
            if (form) {
                form.setValues(params)
                view.show();
            }
        }
    },

    downloadInboxFiles: function () {
        let me = this,
            view = me.getView(),
            record = me.getGridSelectedRecord('#inboxtb');
        if (record) {
            let messages = record.messages,
                files = messages.documents;
            if (files) {
                files = me.decodeJson(files);
                me.downloadFile(files)
                return
            }
            me.showToast("No attached files")
        }
    },

    downloadOutboxFiles: function () {
        let me = this,
            view = me.getView(),
            record = me.getGridSelectedRecord('#outboxtb');
        if (record) {
            let messages = record.messages,
                files = messages.documents;
            if (files) {
                files = me.decodeJson(files);
                me.downloadFile(files)
                return
            }
            me.showToast("No attached files")
        }
    },

    downloadFile: function (files) {
        for (let i = 0; i < files.length; i++) {
            let file = files[i],
                originalFileName = file.originalFileName,
                fileName = file.fileName,
                winUrl = `${MssPhoenix.model.Session.fileUploadPath}/FileHandler?file=${fileName}&o=${originalFileName}`;

            window.open(winUrl, "_blank");
        }
    },

    formMessageReadStatus: function (v) {
        if (v) {
            return '<span style="color:red">Read</span>';
        }
        return '<span style="color:green">Unread</span>';
    },

    onReloadClick: function () {
        let me = this;
        me.reloadGrid('#inboxtb')
        me.reloadGrid('#outboxtb')
    }

});