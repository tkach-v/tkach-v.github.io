export type Tab = {
  id: string;
  label: string;
  icon: string;
  component: () => React.JSX.Element;
};

export type PlatformType = {
  label: string;
  value: string;
  icon: string;
};

export type Platform = {
  platform: string;
  value: string;
  icon: string;
  color: string;
  types: PlatformType[];
};
