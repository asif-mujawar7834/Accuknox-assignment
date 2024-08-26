import { createSlice } from "@reduxjs/toolkit";
import { CloudAccountRiskAssessment } from "../../components/cspm/CloudAccountRiskAssessment";
import { CloudAccounts } from "../../components/cspm/CloudAccounts";
import { CSPMOverview } from "../../components/cspm/CSPMOverview";
import { CSWPTop5Alerts } from "../../components/cswpp/CSWPTop5Alerts";
import { dashboardInitialStateType } from "../../types";
import { CloudMisConfigurations } from "../../components/cspm/CloudMisConfigurations";
import { VulnerabilityAssessment } from "../../components/cspm/VulnerabilityAssessmen";
import { ComplianceCheck } from "../../components/cspm/ComplianceCheck";
import { Top5ComplianceIssues } from "../../components/cswpp/ComplianceData";
import { Top5IncidentTypes } from "../../components/cswpp/IncidentData";
import { Top5SecurityControlsEffectiveness } from "../../components/cswpp/Top5SecurityControlsEffectiveness";
import { Top5VulnerabilityTypes } from "../../components/cswpp/Top5Vulnerabilities";
import { Top5AffectedResources } from "../../components/cswpp/Top5AffectedResources";
import { ImageRiskAssessment } from "../../components/registryscan/ImageRiskAssessment";
import { ImageSecurityIssues } from "../../components/registryscan/ImageSecurityIssues";
import { ScanOverviewStatus } from "../../components/registryscan/ScanOverview";
import { RecentScan } from "../../components/registryscan/RecentScan";
import { VulnerabilitySummary } from "../../components/registryscan/VulnerabilitySummary";
import { RegistryComplianceIssues } from "../../components/registryscan/RegistryComplianceIssues";

const initialState: dashboardInitialStateType = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: 1,
          name: "Cloud Accunt Risk Assessement",
          Component: CloudAccountRiskAssessment,
          isActive: true,
        },
        {
          id: 2,
          name: "Cloud Accounts",
          Component: CloudAccounts,
          isActive: true,
        },
        {
          id: 3,
          name: "CSPM Overview",
          Component: CSPMOverview,
          isActive: true,
        },
        {
          id: 4,
          name: "Vulnerability Assessment",
          Component: VulnerabilityAssessment,
          isActive: true,
        },
        {
          id: 5,
          name: "Cloud Resource Misconfiguration",
          Component: CloudMisConfigurations,
          isActive: true,
        },
        {
          id: 6,
          name: "Compliance Check",
          Component: ComplianceCheck,
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
          Component: CSWPTop5Alerts,
          isActive: true,
        },
        {
          id: 2,
          name: "Top 5 Compliance Issues",
          Component: Top5ComplianceIssues,
          isActive: true,
        },
        {
          id: 3,
          name: "Top 5 Incident Types",
          Component: Top5IncidentTypes,
          isActive: true,
        },
        {
          id: 4,
          name: "Top 5 Security Controls Effectiveness",
          Component: Top5SecurityControlsEffectiveness,
          isActive: true,
        },
        {
          id: 5,
          name: "Top 5 Vulnerability Types",
          Component: Top5VulnerabilityTypes,
          isActive: true,
        },
        {
          id: 6,
          name: "Top 5 Affected Resources",
          Component: Top5AffectedResources,
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
          Component: ImageRiskAssessment,
          isActive: true,
        },
        {
          id: 2,
          name: "Image Security Issues",
          Component: ImageSecurityIssues,
          isActive: true,
        },
        {
          id: 3,
          name: "Total Scan Status",
          Component: ScanOverviewStatus,
          isActive: true,
        },
        {
          id: 4,
          name: "Vulerability Summary",
          Component: VulnerabilitySummary,
          isActive: true,
        },
        {
          id: 5,
          name: "Recent Scan",
          Component: RecentScan,
          isActive: true,
        },
        {
          id: 6,
          name: "Registry Compliance Issue",
          Component: RegistryComplianceIssues,
          isActive: true,
        },
      ],
    },
  ],
  isCanvasOpen: false,
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
  },
});

export const { addOrRemoveWidget, hideOrShowCanvas } = dashboardslice.actions;

export default dashboardslice.reducer;
