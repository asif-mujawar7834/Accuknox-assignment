import { ComponentType } from "react";

interface widgetType {
  id: number;
  name: string;
  Component: string;
  isActive: boolean;
}

interface categoryType {
  id: number;
  name: string;
  widgets: widgetType[];
}

interface dashboardInitialStateType {
  searchQuery: string;
  categories: categoryType[];
  isCanvasOpen: boolean;
}

type CustomLabelProps = LabelProps & {
  viewBox: {
    cx: number;
    cy: number;
  };
  count: string;
};

interface PieChartWithLegendProps {
  data: { name: string; value: number; bg: string }[];
  colors: string[];
  total: number;
  title: string;
}

interface BarChartWithTitleProps {
  title: string;
  data: { name: string; count: number }[];
  barColor: string;
}

interface SingleLineIndicatorProps {
  data: {
    name: string;
    id: number;
    count: number;
  }[];
}

interface WidgetComponents {
  [key: string]: ComponentType;
}
