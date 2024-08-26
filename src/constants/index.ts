import { CloudAccountRiskAssessment } from "../components/cspm/CloudAccountRiskAssessment";
import { CloudAccounts } from "../components/cspm/CloudAccounts";
import { CloudMisConfigurations } from "../components/cspm/CloudMisConfigurations";
import { ComplianceCheck } from "../components/cspm/ComplianceCheck";
import { CSPMOverview } from "../components/cspm/CSPMOverview";
import { VulnerabilityAssessment } from "../components/cspm/VulnerabilityAssessmen";
import { Top5ComplianceIssues } from "../components/cswpp/ComplianceData";
import { CSWPTop5Alerts } from "../components/cswpp/CSWPTop5Alerts";
import { Top5IncidentTypes } from "../components/cswpp/IncidentData";
import { Top5AffectedResources } from "../components/cswpp/Top5AffectedResources";
import { Top5SecurityControlsEffectiveness } from "../components/cswpp/Top5SecurityControlsEffectiveness";
import { Top5VulnerabilityTypes } from "../components/cswpp/Top5Vulnerabilities";
import { ImageRiskAssessment } from "../components/registryscan/ImageRiskAssessment";
import { ImageSecurityIssues } from "../components/registryscan/ImageSecurityIssues";
import { RecentScan } from "../components/registryscan/RecentScan";
import { RegistryComplianceIssues } from "../components/registryscan/RegistryComplianceIssues";
import { ScanOverviewStatus } from "../components/registryscan/ScanOverview";
import { VulnerabilitySummary } from "../components/registryscan/VulnerabilitySummary";
import { WidgetComponents } from "../types";

export const componentMapping: WidgetComponents = {
  CloudAccountRiskAssessment: CloudAccountRiskAssessment,
  CloudAccounts: CloudAccounts,
  CSPMOverview: CSPMOverview,
  VulnerabilityAssessment: VulnerabilityAssessment,
  CloudMisConfigurations: CloudMisConfigurations,
  ComplianceCheck: ComplianceCheck,
  CSWPTop5Alerts: CSWPTop5Alerts,
  Top5ComplianceIssues: Top5ComplianceIssues,
  Top5IncidentTypes: Top5IncidentTypes,
  Top5SecurityControlsEffectiveness: Top5SecurityControlsEffectiveness,
  Top5VulnerabilityTypes: Top5VulnerabilityTypes,
  Top5AffectedResources: Top5AffectedResources,
  ImageRiskAssessment: ImageRiskAssessment,
  ImageSecurityIssues: ImageSecurityIssues,
  ScanOverviewStatus: ScanOverviewStatus,
  VulnerabilitySummary: VulnerabilitySummary,
  RecentScan: RecentScan,
  RegistryComplianceIssues: RegistryComplianceIssues,
};
