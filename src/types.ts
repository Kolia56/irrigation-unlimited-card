export interface LovelaceCardConfig {
  index?: number;
  view_index?: number;
  type: string;
  [key: string]: any;
}
export interface IrrigationUnlimitedCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  show_controllers?: string;
  always_show_zones?: boolean;
  always_show_sequences?: boolean;
  show_timeline_history?: boolean;
  show_timeline_scheduled?: boolean;
}
