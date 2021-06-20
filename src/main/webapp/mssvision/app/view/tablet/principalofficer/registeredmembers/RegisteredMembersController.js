Ext.define('MssPhoenix.view.tablet.principalofficer.registeredmembers.RegisteredMembersController', {
    extend: 'MssPhoenix.view.tablet.member.personalinfo.BeneficiaryContoller',
    alias: 'controller.registeredmemberscontroller',

    listen: {
        controller: {
            '#maincontroller': {
                loadRegMember: 'loadRegisteredMember',
            }
        }
    },

    init: function () {

    },

    reloadMemberDetails: function () {
        let me = this,
            id = me.getItem('regMemberId');
        me.removeItem('regMemberId');
        me.loadRegisteredMember(id, null);
    },

    loadRegisteredMember: function (id, args) {
        let me = this,
            view = me.getView(),
            vm = view.getViewModel(),
            form = view.lookupReference('registeredmemberdetailsform'),
            prevId = me.getItem('regMemberId');
        if (prevId !== id) {
            me.saveItem('regMemberId', id)
            let url = `${MssPhoenix.model.Session.baseUrl}/api/register/membersdetails/${id}`;
            me.maskView(view, 'Loading details...');
            me.urlGet(url, function (data) {
                me.unMaskView(view)
                let details = data.data;
                if (form)
                    form.setValues(details)
                if (vm) {
                    vm.set('numAttachedDocs', details.numAttachedDocs);
                }
            }, function (err) {
                me.unMaskView(view)
                me.showToast(err.msg)
            })
        }
    },

    viewMemberDetails: function () {
        let me = this,
            record = me.getGridSelectedRecord('registeredmembersgrid');
        if (record) {
            me.redirectTo('registeredmemberdetails/' + (record.id));
        }
    },

    viewStagedMemberDetails: function () {
        let me = this,
            record = me.getGridSelectedRecord('stagemembersgrid');
        if (record) {
            let id = record.id,
                details = record.details,
                window = Ext.widget('stagedmemberswindow'),
                form = window.lookupReference('memberform')
            if (form && details) {
                form.setValues(details)
            }
            window.show();
        }
    },

    reloadMembersGrid: function () {
        let me = this;
        me.reloadGrid('registeredmembersgrid')
    },

    reloadStagedMembersGrid: function () {
        let me = this;
        me.reloadGrid('stagemembersgrid')
    },

    downloadMemberDocs: function () {
        let me = this,
            view = me.getView(),
            id = me.getItem('regMemberId'),
            url = `${MssPhoenix.model.Session.baseUrl}/api/register/member/docs/${id}`;

        if (id) {
            me.maskView(view, "please wait...");
            me.urlGet(url, function (obj) {
                me.unMaskView(view)
                let data = obj.data;
                if (data) {
                    for (let i = 0; i < data.length; i++) {
                        let file = data[i],
                            originalFileName = file.originalFileName,
                            fileName = file.fileName,
                            winUrl = `${MssPhoenix.model.Session.fileUploadPath}/FileHandler?file=${fileName}&o=${originalFileName}`;

                        window.open(winUrl, "_blank");
                    }
                }
            }, function (err) {
                me.unMaskView(view)
                me.showAlert('Sorry', err.msg)
            })
        } else {
            me.showToast('Error encountered');
        }

    },

    downloadStagedMemberDocs: function () {
        let me = this,
            record = me.getGridSelectedRecord('stagemembersgrid');
        if (record) {
            let numDocuments = record.numDocuments;
            if (numDocuments === 0) {
                me.showAlert("Sorry", 'No attached documents found');
            }
            return;
        }
        me.showToast("No record selected")
    },

    onDeclineStageMemberDetails: function () {
        let me = this,
            view = me.getView(),
            record = me.getGridSelectedRecord('stagemembersgrid');
        if (record) {
            let id = record.id,
                mssUserId = MssPhoenix.model.Session.getUserId(),
                url = `${MssPhoenix.model.Session.baseUrl}/api/stagedMemberDetails/decline/${mssUserId}/${id}`;

            me.maskView(view, "Please wait");
            me.urlGet(url, function (obj) {
                me.unMaskView(view);
                me.showAlert("Hello", "Operation successful")
                view.destroy();
                me.reloadGrid('stagemembersgrid')
            }, function (err) {
                me.unMaskView(view);
                me.showAlert("Sorry", err.msg)
            })
            return;
        }
        me.showToast("No record selected")
    },

    approveStageMemberDetails: function () {
        let me = this,
            view = me.getView(),
            record = me.getGridSelectedRecord('stagemembersgrid');
        if (record) {
            let id = record.id,
                mssUserId = MssPhoenix.model.Session.getUserId(),
                url = `${MssPhoenix.model.Session.baseUrl}/api/stagedMemberDetails/approve/${mssUserId}/${id}`;

            me.maskView(view, "Please wait");
            me.urlGet(url, function (obj) {
                me.unMaskView(view);
                me.showAlert("Hello", obj.msg)
                view.destroy();
                me.reloadGrid('stagemembersgrid')
            }, function (err) {
                me.unMaskView(view);
                me.showAlert("Sorry", err.msg)
            })
            return;
        }
        me.showToast("No record selected")
    },

    onDeclineNewMemberDetails: function () {
        let me = this,
            view = me.getView(),
            id = me.getItem('regMemberId'),
            mssUserId = MssPhoenix.model.Session.getUserId(),
            url = `${MssPhoenix.model.Session.baseUrl}/api/register/decline/${mssUserId}/${id}`;

        if (id) {
            me.maskView(view, "Please wait");
            me.urlGet(url, function (obj) {
                me.unMaskView(view);
                me.showAlert("Hello", "Operation successful")
                setTimeout(function () {
                    me.goBack()
                    me.reloadGrid('registeredmembersgrid')
                }, 1000)
            }, function (err) {
                me.unMaskView(view);
                me.showAlert("Sorry", err.msg)
            });
            return;
        }
        me.showToast('Please try again');
    },

    approveNewMemberDetails: function () {
        let me = this,
            view = me.getView(),
            id = me.getItem('regMemberId'),
            mssUserId = MssPhoenix.model.Session.getUserId(),
            url = `${MssPhoenix.model.Session.baseUrl}/api/register/approve/${mssUserId}/${id}`;

        if (id) {
            me.maskView(view, "Please wait");
            me.urlGet(url, function (obj) {
                me.unMaskView(view);
                me.showAlert("Hello", "Operation successful")
                setTimeout(function () {
                    me.goBack();
                    me.reloadGrid('registeredmembersgrid')
                }, 1000)
            }, function (err) {
                me.unMaskView(view);
                me.showAlert("Sorry", err.msg)
            });
            return;
        }
        me.showToast('Please try again');
    },

    pobDtrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/traditionalAuthority/${data.id}`,
                placeOfBirthTAName = me.getComponentById('placeOfBirthTAName'),
                traditionalauthoritystore = Ext.getStore('traditionalauthoritystore');
            // me.saveItem('districtId', newValue)
            if (traditionalauthoritystore) {
                traditionalauthoritystore.getProxy().url = url;
                placeOfBirthTAName.setStore(traditionalauthoritystore)
            }
        }
    },

    pobTrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/village/${data.id}`,
                villageName = me.getComponentById('villageName'),
                villagestore = Ext.getStore('villagestore');

            if (villagestore) {
                villagestore.getProxy().url = url;
                villageName.setStore(villagestore)
            }
        }
    },

    pmDtrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/traditionalAuthority/${data.id}`,
                permanentTAName = me.getComponentById('permanentTAName'),
                traditionalauthoritystore = Ext.getStore('traditionalauthoritystore');
            // me.saveItem('districtId', newValue)
            if (traditionalauthoritystore) {
                traditionalauthoritystore.getProxy().url = url;
                permanentTAName.setStore(traditionalauthoritystore)
            }
        }
    },

    pmTrSelect: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/village/${data.id}`,
                permanentVillageName = me.getComponentById('permanentVillageName'),
                villagestore = Ext.getStore('villagestore');

            if (villagestore) {
                villagestore.getProxy().url = url;
                permanentVillageName.setStore(villagestore)
            }
        }
    },

    pobPlaceOfBirth: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/traditionalAuthority/${data.id}`,
                pobTraditionalAuthority = me.getComponentById('pobTraditionalAuthority'),
                traditionalauthoritystore = Ext.getStore('traditionalauthoritystore');
            // me.saveItem('districtId', newValue)
            if (traditionalauthoritystore) {
                traditionalauthoritystore.getProxy().url = url;
                pobTraditionalAuthority.setStore(traditionalauthoritystore)
            }
        }
    },

    pobTraditionalAuthority: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/village/${data.id}`,
                pobVillage = me.getComponentById('pobVillage'),
                villagestore = Ext.getStore('villagestore');

            if (villagestore) {
                villagestore.getProxy().url = url;
                pobVillage.setStore(villagestore)
            }
        }
    },

    phmPlaceOfBirth: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/traditionalAuthority/${data.id}`,
                phmTraditionalAuthority = me.getComponentById('phmTraditionalAuthority'),
                traditionalauthoritystore = Ext.getStore('traditionalauthoritystore');
            // me.saveItem('districtId', newValue)
            if (traditionalauthoritystore) {
                traditionalauthoritystore.getProxy().url = url;
                phmTraditionalAuthority.setStore(traditionalauthoritystore)
            }
        }
    },

    phmTraditionalAuthority: function (combo, newValue, eOpts) {
        if (newValue) {
            let me = this,
                data = newValue.data,
                url = `${MssPhoenix.model.Session.baseUrl}/api/village/${data.id}`,
                phmVillage = me.getComponentById('phmVillage'),
                villagestore = Ext.getStore('villagestore');

            if (villagestore) {
                villagestore.getProxy().url = url;
                phmVillage.setStore(villagestore)
            }
        }
    },

    reloadStagedBeneficiariesGrid: function () {
        let me = this;
        me.reloadGrid('stagedbeneficiariesgrid')
    },

    viewStagedBeneficiaryDetails: function () {
        let me = this,
            record = me.getGridSelectedRecord('stagedbeneficiariesgrid');

        if (record) {
            let details = record.details,
                view = Ext.widget('stagedbeneficiarieswindow'),
                form = view.lookupReference('memberbeneficiaryform')
            if (form) {
                form.setValues(details);
                view.show();
            }
            return;
        }
        me.showToast('No record selected');

    },

    declineStagedBeneficiaryDetails: function () {
        let me = this,
            view = me.getView(),
            record = me.getGridSelectedRecord('stagedbeneficiariesgrid');
        if (record) {
            let id = record.id;
            me.approveDeclineDeleteStagedBeneficiaryDetails(
                view, id, 'DELETE'
            )
            return;
        }
        me.showToast("No record selected")
    },

    approveStagedBeneficiaryDetails: function () {
        let me = this,
            view = me.getView(),
            record = me.getGridSelectedRecord('stagedbeneficiariesgrid');
        if (record) {
            let id = record.id;
            me.approveDeclineDeleteStagedBeneficiaryDetails(
                view, id, 'APPROVE'
            )
            return;
        }
        me.showToast("No record selected")
    },

    approveDeclineDeleteStagedBeneficiaryDetails: function (view, id, action) {
        let me = this,
            mssUserId = MssPhoenix.model.Session.getUserId(),
            url = `${MssPhoenix.model.Session.baseUrl}/api/approveBeneficiary/${mssUserId}/${id}/${action}`;

        me.maskView(view, "Please wait");
        me.urlGet(url, function (obj) {
            me.unMaskView(view);
            me.reloadGrid('stagedbeneficiariesgrid')
            me.showAlert("Hello", "Operation successful")
            view.destroy();
        }, function (err) {
            me.unMaskView(view);
            me.showAlert("Sorry", err.msg)
        });
    },

    downloadStagedBeneficiaryDocs : function () {
        let me = this,
            view = me.getView(),
            record = me.getGridSelectedRecord('stagedbeneficiariesgrid');
        if (record) {
            let docs = record.documents;
            if (docs && docs.length>0){
                for (let i = 0; i < docs.length; i++) {
                    let file = docs[i],
                        originalFileName = file.originalFileName,
                        fileName = file.fileName,
                        winUrl = `${MssPhoenix.model.Session.fileUploadPath}/FileHandler?file=${fileName}&o=${originalFileName}`;

                    window.open(winUrl, "_blank");
                }
                return;
            }
            me.showAlert('Sorry','No documents attached');
            return;
        }
        me.showToast("No record selected")
    }
    
});