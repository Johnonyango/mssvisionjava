Ext.define('MssPhoenix.view.tablet.member.projections.ProjectionsController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.memberprojectionscontroller',
    /**
     * Called when the view is created
     */
    styles: `<style>
                            table {
                              font-family: arial, sans-serif;
                              border-collapse: collapse;
                              width: 100%;
                            }
                            
                            td, th {
                              border: 1px solid #dddddd;
                              text-align: left;
                              padding: 8px;
                            }
                            
                            tr:nth-child(even) {
                              background-color: #dddddd;
                            }
                        </style>`,
    isPhone: false,
    init: function () {
        let me = this,
            perms = me.decodePermissions();

        me.isPhone = MssPhoenix.profile.Phone.isPhone();

        let view = me.getView(),
            vm = view.getViewModel(),
            form = Ext.ComponentQuery.query('#memberprojectionsuserdetailsform')[0];
        if (vm) {
            vm.set('allowBenefitCalculator', me.permSetDisplayBlockOrNone(perms.allowBenefitCalculator))
            vm.set('allowWhatIfAnalysis', me.permSetDisplayBlockOrNone(perms.allowWhatIfAnalysis))

            me.hideTabs(perms);
        }

        if (form) {
            me.loadMemberInformation(function (dt) {
                form.setValues(dt)
                form.setValues({
                    "totalBenefits": (me.getItem('totalBenefits'))
                })
                me.getCurrentMonthlyContributionAndBasicSalary(form);
            }, function (er) {
                me.getCurrentMonthlyContributionAndBasicSalary(form);
            })
        }
    },

    hideTabs: function (perms) {
        let me = this,
            memberprojectionstab = me.getComponentById('memberprojectionstab');
        if (memberprojectionstab) {
            if (me.permSetDisplayBlockOrNone(perms.allowBenefitCalculator) === 'none')
                memberprojectionstab.removeAt(0, true)
            if (me.permSetDisplayBlockOrNone(perms.allowWhatIfAnalysis) === 'none')
                memberprojectionstab.removeAt(1, true)
        }
    },

    getCurrentMonthlyContributionAndBasicSalary: function (form) {
        let me = this,
            view = me.getView();
        me.maskView(view, 'loading...')
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/getCurrentMonthlyContributionAndBasicSalary/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}/${MssPhoenix.model.Session.getSchemeId()}`,
            success: function (response, opts) {
                me.unMaskView(view)
                let obj = Ext.decode(response.responseText);
                if (obj) {
                    form.setValues(obj.data)
                }
            },
            failure: function (response, opts) {
                me.unMaskView(view)
                me.showToast('Failed to connect')
            }
        })
    },

    calculateBenefitRequests: function () {
        let me = this,
            view = me.getView(),//me.getTargetView('benefitsprojection'),
            form = view.lookupReference('benefitsprojectionform'),
            vm = view.getViewModel(),
            url = `${MssPhoenix.model.Session.baseUrl}/api/getProjectionsForMember`;
        if (vm && form.validate()) {
            let values = form.getValues();
            values.mssUserId = MssPhoenix.model.Session.getUserId();
            values.memberId = MssPhoenix.model.Session.getMemberId();
            me.maskView(view, "please wait...")
            me.urlPost(url, values, function (obj) {
                me.unMaskView(view)
                let data = me.decodeJson(obj.data);
                // console.log(data)
                me.showBenefits(vm, data)
            }, function (err) {
                me.unMaskView(view)
                me.showAlert("Sorry", err.msg)
            })
        }
    },

    showBenefits: function (vm, data) {
        let me = this,
            content = me.styles;
        content += `
                                    <div class="row">
                                        <table class="display table table-bordered table-striped"
                                               id="projected_results">
                                            <thead>
                                            <th> Name</th>
                                            <th> Details</th>
                                            </thead>
                                            <tbody>
                                            <tr class="gradeA">
                                                <td>Date of Exit:</td>
                                                <td><span id="date_of_exit">${data.exit_date}</span></td>
                                            </tr>
                                            <tr class="gradeX">
                                                <td>Date of Calculation:</td>
                                                <td><span id="date_of_calc">${data.calc_date}</span></td>
                                            </tr>

                                            <tr class="gradeA">
                                                <td>Age at Exit:</td>
                                                <td><span id="age_at_exit">${me.precisionRoundToDP((data.exit_age), 0)}</span></td>
                                            </tr>
                                            <tr class="gradeA">
                                                <td>Pensionable Service:</td>
                                                <td><span id="pensionable_service">${me.precisionRoundToDP((data.years_worked), 0)}</span></td>

                                            </tr>
                                            <tr class="gradeA">
                                                <td>Exit Reason:</td>
                                                <td><span id="exit_reason">${data.exit_reason}</span></td>
                                            </tr>

                                            <tr class="gradeC">
                                                <td> Gross Monthly Pension :</td>
                                                <td><span id="projected_monthly_gross">${me.formatBenefitVal(data.netMonthlyPension)}</span></td>
                                            </tr>

                                            <tr class="gradeA">
                                                <td> Tax on Monthly Pension :</td>
                                                <td><span id="projected_monthly_tax">${me.formatBenefitVal(data.taxOnMonthlyPension)}</span></td>
                                            </tr>
                                            <tr class="gradeA">
                                                <td> Monthly Pension :</td>
                                                <td><span id="projected_monthly_net">${me.formatBenefitVal(data.monthlyPension)}</span></td>
                                            </tr>

                                            <tr class="gradeA">
                                                <td> Lumpsum Payable :</td>
                                                <td><span id="projected_lumpsum_payable">${me.formatBenefitVal(data.lumpsumPayable)}</span></td>
                                            </tr>
                                            <tr class="gradeC">
                                                <td>Tax Free Lumpsum:</td>
                                                <td><span id="projected_lumpsum_tax_free">${me.formatBenefitVal(data.taxFreeLumpsum)}</span></td>
                                            </tr>
                                            <tr class="gradeC">
                                                <td>Taxable Amount:</td>
                                                <td><span id="projected_lumpsum_taxable_amount">${me.formatBenefitVal(data.taxableAmount)}</span></td>
                                            </tr>
                                            <tr class="gradeC">
                                                <td>Tax on Lumpsum:</td>
                                                <td><span id="projected_lumpsum_tax">${me.formatBenefitVal(data.witholdingTax)}</span></td>
                                            </tr>

                                            <tr class="gradeX">
                                                <td>Commuted Lumpsum :</td>
                                                <td><span id="projected_lumpsum_net">${me.formatBenefitVal(data.commutedLumpsum)}</span></td>
                                            </tr>
                                            <tr class="gradeX">
                                                <td>Pension Purchase Price :</td>
                                                <td><span id="projected_pension_purchase">${me.formatBenefitVal(data.purchasePrice)}</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>`;
        vm.set('benefit', content);
        if (me.isPhone) {
            let winR = Ext.widget('benefitsresults');
            vm = winR.getViewModel();
            if (vm)
                vm.set('benefit', content)
            winR.show();
        }
    },

    formatBenefitVal: function (value) {
        let me = this;
        return me.format_no(
            me.precisionRoundToDP(value, 2)
        );
    },

    calculateProjection: function () {
        let me = this;
        let view = me.getView();
        // let vm = view.getViewModel();
        let form = view.lookupReference('memberprojectform');
        if (form && form.validate()) {
            view.mask('please wait...');
            let fields = form.getFields();
            // /calculateWhatIfAnalysis/{}/{memberId}/{avcReceiptOption}/{ageAtExit}/{returnRate}/{salaryEscalationRate}/{projectedAvc}/{inflationRate}
            let schemeId = MssPhoenix.model.Session.getSchemeId();
            let memberId = MssPhoenix.model.Session.getMemberId();
            let ageAtExit = (fields.ageAtExit).getInputValue();
            let returnRate = (fields.returnRate).getInputValue();
            let salaryEscalationRate = (fields.salaryEscalationRate).getInputValue();
            let projectedAvc = (fields.projectedAvc).getInputValue();
            let inflationRate = (fields.inflationRate).getInputValue();
            let targetMonthlyPension = (fields.targetMonthlyPension).getInputValue();

            let params = {
                "schemeId": schemeId,
                "memberId": memberId,
                "avcReceiptOption": "",
                "ageAtExit": ageAtExit,
                "returnRate": returnRate,
                "salaryEscalationRate": salaryEscalationRate,
                "projectedAvc": projectedAvc,
                "inflationRate": inflationRate,
                "targetPension": targetMonthlyPension
            };

            let uri = `${MssPhoenix.model.Session.baseUrl}/api/whatIfAnalysis/${MssPhoenix.model.Session.getUserId()}`;
            Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: uri,
                method: 'POST',
                params: me.encodeJson(params),
                success: function (response, opts) {
                    view.unmask();
                    let obj = Ext.decode(response.responseText);
                    // me.showProjections(obj.data, vm);
                    if (obj.success) {
                        me.showProjections(me.decodeJson(obj.data));
                        return;
                    }
                    me.showAlert("Error", "Please try again")
                },
                failure: function (response, opts) {
                    view.unmask();
                    try {
                        let obj = Ext.decode(response.responseText);
                        // vm.set('projection', `<center>${obj.msg}</center>`)
                        me.showAlert('Response', `<center>${obj.msg}</center>`)
                    } catch (e) {
                        let obj = Ext.decode(response.responseText);
                        // vm.set('projection', `<center>Error encountered, please try again</center>`)
                        me.showAlert('Response', `<center>Error encountered, please try again</center>`)
                    }

                }
            });
        }
    },

    showProjections: function (data) {
        let me = this;

        let content = me.styles;

        content += `<table style="width: 100%;"><tr>
                <th></th>
                <th></th>
              </tr>`;

        content +=
            `<tr>
            <td>Date of Exit</td>
            <td><b>` + (data.doe) + `</b></td>
            </tr>`;

        content +=
            `<tr>
            <td>Date of Bith</td>
            <td><b>` + (data.dob) + `</b></td>
            </tr>`;

        content +=
            `<tr>
            <td>Age at Exit</td>
            <td><b>` + (data.age_at_exit) + `</b></td>
            </tr>`;

        content +=
            `<tr>
            <td>Pensionable Service</td>
            <td><b>` + (data.pensionable_service) + `</b></td>
            </tr>`;

        // content +=
        //     `<tr>
        //     <td>Current Monthly Contribution</td>
        //     <td><b> ` + me.moneyFormatFunc(data.currentMonthlyContribution) + `</b></td>
        //     </tr>`;

        content +=
            `<tr>
            <td>Current Fund Credit</td>
            <td><b> ` + me.moneyFormatFunc(data.current_fund_credit) + `</b></td>
            </tr>`;

        content +=
            `<tr style="margin-top: 30px">
            <td>Projected Monthly Contribution:</td>
            <td><b> ` + me.moneyFormatFunc(data.projectedMonthlyTotalBal) + `</b></td>
            </tr>`;


        // content +=
        //     `<tr>
        //     <td>Expected Monthly Pension Payable</td>
        //     <td><span style="color: red"><b> ` + me.moneyFormatFunc(data.projectedGrossMonthlyPension) + `</b></span></td>
        //     </tr>`;

        content +=
            `<tr>
            <td>Expected Monthly Tax</td>
            <td><b> ` + me.moneyFormatFunc(data.taxOnProjectedMonthlyPension) + `</b></td>
            </tr>`;

        // content +=
        //     `<tr>
        //     <td>Expected Monthly Pension</td>
        //     <td><b> ` + me.moneyFormatFunc(data.projectedNetMonthlyPension) + `</b></td>
        //     </tr>`;

        content +=
            `<tr>
            <td>Expected Gross Lumpsum Payable</td>
            <td><b> ` + me.moneyFormatFunc(data.projectedGrossLumpsumPayable) + `</b></td>
            </tr>`;

        // content +=
        //     `<tr>
        //     <td>Expected Tax on Lumpsum:</td>
        //     <td><b> ` + me.moneyFormatFunc(data.projectedTaxLumpsumPayable) + `</b></td>
        //     </tr>`;

        content +=
            `<tr>
            <td></td>
            <td><span style="color: darkgreen"><b>` + (data.targetLabel) + `</b></span></td>
            </tr>`;

        content +=
            `<tr>
            <td>Additional monthly contribution amount required:</td>
            <td><b> ` + me.moneyFormatFunc(data.amountNeeded) + `</b></td>
            </tr>`;


        content += `</table>`
        // vm.set('projection', content)
        let winR = Ext.widget(me.isPhone ? 'memberphone-projectionresult' : 'memberprojectionresult');
        winR.show();
        let vm = winR.getViewModel();
        if (vm)
            vm.set('projection', content)
    },

    showBenefitsWindow: function () {
        Ext.widget('benefitswindow').show();
    }

});