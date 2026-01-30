export interface SiteConfig {
  meta: {
    title: string;
    lang: string;
    dir: string;
    description: string;
  };
  theme: {
    mode: string;
    palette: {
      background_primary: string;
      background_secondary: string;
      text_primary: string;
      text_secondary: string;
      accent_main: string;
      accent_hover: string;
      border_color: string;
    };
    typography: {
      font_family_heading: string;
      font_family_body: string;
      heading_weight: string;
      body_weight: string;
    };
  };
  navigation: Array<{
    label: string;
    href: string;
    is_cta?: boolean;
  }>;
  sections: SectionConfig[];
  footer: {
    social_links: string[];
    copyright: string;
  };
}

export type SectionConfig =
  | SplitScreenHeroSection
  | CenteredStatementSection
  | BentoGridSection
  | MinimalCountersSection
  | SplitFormSection;

interface BaseSection {
  id: string;
  type: string;
}

export interface SplitScreenHeroSection extends BaseSection {
  type: "split_screen_hero";
  styles: { layout: string; bg_overlay: string };
  content: {
    headline: string;
    subheadline: string;
    cta_primary: { text: string; link: string; style: string };
    cta_secondary: { text: string; link: string; style: string };
    floating_card: {
      type: string;
      content: string;
      caption: string;
    };
  };
}

export interface CenteredStatementSection extends BaseSection {
  type: "centered_statement";
  styles: { bg_color: string; typography_size: string };
  content: {
    text: string;
    highlighted_words: string[];
  };
}

export interface BentoGridSection extends BaseSection {
  type: "bento_grid";
  headline: string;
  items: Array<{
    icon: string;
    title: string;
    description: string;
    grid_span: string;
  }>;
}

export interface MinimalCountersSection extends BaseSection {
  type: "minimal_counters";
  items: Array<{ label: string; value: string }>;
}

export interface SplitFormSection extends BaseSection {
  type: "split_form";
  content: {
    headline: string;
    subheadline: string;
    form_fields: Array<{
      name: string;
      placeholder: string;
      type: string;
      options?: string[];
    }>;
    button_text: string;
  };
}
