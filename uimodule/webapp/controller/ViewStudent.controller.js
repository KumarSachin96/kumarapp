sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, History) {
      "use strict";

      return Controller.extend("com.nttdata.academy.kumarapp.controller.ViewStudent", {
          onInit: function () {

          },
          GoToBack: function (oEvent) {
            var oHistory, sPreviousHash;
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined && sPreviousHash !== "") {
              window.history.go(-1);
            } else {
              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
              oRouter.navTo("RouteMainView", true);
            }
          }
      });
  });
