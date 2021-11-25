sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.nttdata.academy.kumarapp.controller.MainView", {
            onInit: function () {

            },
            onPressAddStudent: function (oEvent) {
              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
              oRouter.navTo("RouteAddStudentView");
            },

            onPressViewStudent: function (oEvent) {
              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
              oRouter.navTo("RouteViewStudentView");
            }
        });
    });
