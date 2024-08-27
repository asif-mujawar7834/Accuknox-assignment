import { createSlice } from "@reduxjs/toolkit";
import { dashboardInitialStateType } from "../../types";

const initialState: dashboardInitialStateType = {
  searchQuery: "",
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: 1,
          name: "Cloud Account Risk Assessment",
          Component: "CloudAccountRiskAssessment",
          isActive: true,
        },
        {
          id: 2,
          name: "Cloud Account",
          Component: "CloudAccounts",
          isActive: true,
        },
        {
          id: 3,
          name: "CSPM Overview",
          Component: "CSPMOverview",
          isActive: true,
        },
        {
          id: 4,
          name: "Vulnerability Assessment",
          Component: "VulnerabilityAssessment",
          isActive: true,
        },
        {
          id: 5,
          name: "Cloud Resource Misconfiguration",
          Component: "CloudMisConfigurations",
          isActive: true,
        },
        {
          id: 6,
          name: "Compliance Check",
          Component: "ComplianceCheck",
          isActive: true,
        },
      ],
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [
        {
          id: 1,
          name: "CSWP Top 5 Alerts",
          Component: "CSWPTop5Alerts",
          isActive: true,
        },
        {
          id: 2,
          name: "Top 5 Compliance Issues",
          Component: "Top5ComplianceIssues",
          isActive: true,
        },
        {
          id: 3,
          name: "Top 5 Incident Types",
          Component: "Top5IncidentTypes",
          isActive: true,
        },
        {
          id: 4,
          name: "Top 5 Security Controls Effectiveness",
          Component: "Top5SecurityControlsEffectiveness",
          isActive: true,
        },
        {
          id: 5,
          name: "Top 5 Vulnerability Types",
          Component: "Top5VulnerabilityTypes",
          isActive: true,
        },
        {
          id: 6,
          name: "Top 5 Affected Resources",
          Component: "Top5AffectedResources",
          isActive: true,
        },
      ],
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [
        {
          id: 1,
          name: "Image Risk Assessment",
          Component: "ImageRiskAssessment",
          isActive: true,
        },
        {
          id: 2,
          name: "Image Security Issues",
          Component: "ImageSecurityIssues",
          isActive: true,
        },
        {
          id: 3,
          name: "Total Scan Status",
          Component: "ScanOverviewStatus",
          isActive: true,
        },
        {
          id: 4,
          name: "Vulerability Summary",
          Component: "VulnerabilitySummary",
          isActive: true,
        },
        {
          id: 5,
          name: "Recent Scan",
          Component: "RecentScan",
          isActive: true,
        },
        {
          id: 6,
          name: "Registry Compliance Issue",
          Component: "RegistryComplianceIssues",
          isActive: true,
        },
      ],
    },
  ],
  isCanvasOpen: false,
  widgetsToBeRemoved: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: 1,
          name: "Cloud Account Risk Assessment",
          Component: "CloudAccountRiskAssessment",
          isActive: true,
        },
        {
          id: 2,
          name: "Cloud Account",
          Component: "CloudAccounts",
          isActive: true,
        },
        {
          id: 3,
          name: "CSPM Overview",
          Component: "CSPMOverview",
          isActive: true,
        },
        {
          id: 4,
          name: "Vulnerability Assessment",
          Component: "VulnerabilityAssessment",
          isActive: true,
        },
        {
          id: 5,
          name: "Cloud Resource Misconfiguration",
          Component: "CloudMisConfigurations",
          isActive: true,
        },
        {
          id: 6,
          name: "Compliance Check",
          Component: "ComplianceCheck",
          isActive: true,
        },
      ],
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [
        {
          id: 1,
          name: "CSWP Top 5 Alerts",
          Component: "CSWPTop5Alerts",
          isActive: true,
        },
        {
          id: 2,
          name: "Top 5 Compliance Issues",
          Component: "Top5ComplianceIssues",
          isActive: true,
        },
        {
          id: 3,
          name: "Top 5 Incident Types",
          Component: "Top5IncidentTypes",
          isActive: true,
        },
        {
          id: 4,
          name: "Top 5 Security Controls Effectiveness",
          Component: "Top5SecurityControlsEffectiveness",
          isActive: true,
        },
        {
          id: 5,
          name: "Top 5 Vulnerability Types",
          Component: "Top5VulnerabilityTypes",
          isActive: true,
        },
        {
          id: 6,
          name: "Top 5 Affected Resources",
          Component: "Top5AffectedResources",
          isActive: true,
        },
      ],
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [
        {
          id: 1,
          name: "Image Risk Assessment",
          Component: "ImageRiskAssessment",
          isActive: true,
        },
        {
          id: 2,
          name: "Image Security Issues",
          Component: "ImageSecurityIssues",
          isActive: true,
        },
        {
          id: 3,
          name: "Total Scan Status",
          Component: "ScanOverviewStatus",
          isActive: true,
        },
        {
          id: 4,
          name: "Vulerability Summary",
          Component: "VulnerabilitySummary",
          isActive: true,
        },
        {
          id: 5,
          name: "Recent Scan",
          Component: "RecentScan",
          isActive: true,
        },
        {
          id: 6,
          name: "Registry Compliance Issue",
          Component: "RegistryComplianceIssues",
          isActive: true,
        },
      ],
    },
  ],
  toast: null,
};

const dashboardslice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addOrRemoveWidget: (state, action) => {
      state.categories = state.categories.map((category) => {
        if (category.id == action.payload.categoryId) {
          category.widgets = category.widgets.map((widget) => {
            if (widget.id == action.payload.widgetId) {
              return {
                ...widget,
                isActive: action.payload.isActive,
              };
            }
            return widget;
          });
        }
        return category;
      });
    },

    hideOrShowCanvas: (state, action) => {
      state.isCanvasOpen = action.payload;
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    setWidgetsToBeRemoved: (state, action) => {
      state.widgetsToBeRemoved = state.widgetsToBeRemoved.map((category) => {
        if (category.id == action.payload.categoryId) {
          category.widgets = category.widgets.map((widget) => {
            if (widget.id == action.payload.widgetId) {
              return {
                ...widget,
                isActive: action.payload.isActive,
              };
            }
            return widget;
          });
        }
        return category;
      });
    },

    resetWidgetsToBeRemoved: (state) => {
      state.widgetsToBeRemoved = state.categories;
    },

    updateWidgets: (state, action) => {
      state.categories = action.payload;
      state.isCanvasOpen = false;
    },

    setToast: (state, action) => {
      state.toast = action.payload;
    },
  },
});

export const {
  addOrRemoveWidget,
  hideOrShowCanvas,
  setSearchQuery,
  setWidgetsToBeRemoved,
  updateWidgets,
  resetWidgetsToBeRemoved,
  setToast,
} = dashboardslice.actions;

export default dashboardslice.reducer;
