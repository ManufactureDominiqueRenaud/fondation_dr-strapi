import type { Schema, Struct } from '@strapi/strapi';

export interface FooterBlocContact extends Struct.ComponentSchema {
  collectionName: 'components_footer_bloc_contacts';
  info: {
    description: '';
    displayName: 'blocContact';
    icon: 'arrowDown';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'general.button', true>;
    links: Schema.Attribute.Component<'general.link', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterBloc1 extends Struct.ComponentSchema {
  collectionName: 'components_footer_bloc1s';
  info: {
    description: '';
    displayName: 'blocTeam';
    icon: 'arrowDown';
  };
  attributes: {
    members: Schema.Attribute.Component<'footer.members', true> &
      Schema.Attribute.Required;
    membersZoneHeading: Schema.Attribute.String & Schema.Attribute.Required;
    presidentName: Schema.Attribute.String & Schema.Attribute.Required;
    presidentZoneHeading: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterMembers extends Struct.ComponentSchema {
  collectionName: 'components_footer_members';
  info: {
    displayName: 'members';
    icon: 'user';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralButton extends Struct.ComponentSchema {
  collectionName: 'components_general_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'attachment';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['primary', 'black', 'white']>;
    externalLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    font: Schema.Attribute.Enumeration<['serif', 'sans']>;
    label: Schema.Attribute.Text;
    link: Schema.Attribute.Text;
    size: Schema.Attribute.Enumeration<['sm', 'base', 'lg']>;
    weight: Schema.Attribute.Enumeration<
      ['light', 'nomal', 'semibold', 'bold']
    >;
  };
}

export interface GeneralHeading extends Struct.ComponentSchema {
  collectionName: 'components_general_headings';
  info: {
    description: '';
    displayName: 'heading';
    icon: 'feather';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['black', 'white']>;
    content: Schema.Attribute.Text;
    font: Schema.Attribute.Enumeration<['serif', 'sans']>;
    size: Schema.Attribute.Enumeration<
      ['xs', 'sm', 'base', 'lg', 'xl', 'xl2', 'xl3', 'xl4', 'xl5', 'xl6']
    >;
    type: Schema.Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']>;
    weight: Schema.Attribute.Enumeration<
      ['light', 'nomal', 'semibold', 'bold']
    >;
  };
}

export interface GeneralLink extends Struct.ComponentSchema {
  collectionName: 'components_general_links';
  info: {
    description: '';
    displayName: 'link';
    icon: 'attachment';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['primary', 'black', 'white']>;
    externalLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    font: Schema.Attribute.Enumeration<['serif', 'sans']>;
    label: Schema.Attribute.Text & Schema.Attribute.Required;
    link: Schema.Attribute.Text & Schema.Attribute.Required;
    size: Schema.Attribute.Enumeration<
      ['xs', 'sm', 'base', 'lg', 'xl', 'xl2', 'xl3', 'xl4', 'xl5', 'xl6']
    >;
    weight: Schema.Attribute.Enumeration<
      ['light', 'nomal', 'semibold', 'bold']
    >;
  };
}

export interface GeneralParagraph extends Struct.ComponentSchema {
  collectionName: 'components_general_paragraphs';
  info: {
    description: '';
    displayName: 'paragraph';
    icon: 'feather';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['black', 'white']>;
    content: Schema.Attribute.Text;
    font: Schema.Attribute.Enumeration<['serif', 'sans']>;
    size: Schema.Attribute.Enumeration<
      ['xs', 'sm', 'base', 'lg', 'xl', 'xl2', 'xl3', 'xl4', 'xl5', 'xl6']
    >;
    weight: Schema.Attribute.Enumeration<
      ['light', 'nomal', 'semibold', 'bold']
    >;
  };
}

export interface GlobalHeader extends Struct.ComponentSchema {
  collectionName: 'components_global_headers';
  info: {
    description: '';
    displayName: 'header';
    icon: 'arrowUp';
  };
  attributes: {
    showLanguageSelector: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showLogo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SectionsHomepageHeroHeader extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_hero_headers';
  info: {
    description: '';
    displayName: 'heroHeader';
  };
  attributes: {
    heading: Schema.Attribute.Component<'general.heading', false>;
    image: Schema.Attribute.Media<'images'>;
    logoIcon: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.Component<'general.paragraph', true>;
    showHexagonPattern: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsHomepageSection2Model extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_section2_models';
  info: {
    displayName: 'section2-model';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    paragraphs: Schema.Attribute.Component<'general.paragraph', true>;
  };
}

export interface SectionsHomepageSection3Tradition
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_section3_traditions';
  info: {
    displayName: 'section3-tradition';
  };
  attributes: {
    heading: Schema.Attribute.Component<'general.heading', false>;
    paragraphs: Schema.Attribute.Component<'general.paragraph', true>;
    showTrianglesPattern: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsHomepageSection4APropos
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_section4_a_propos';
  info: {
    displayName: 'section4-a_propos';
  };
  attributes: {
    heading: Schema.Attribute.Component<'general.heading', false>;
    image: Schema.Attribute.Media<'images'>;
    paragraphs: Schema.Attribute.Component<'general.paragraph', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.bloc-contact': FooterBlocContact;
      'footer.bloc1': FooterBloc1;
      'footer.members': FooterMembers;
      'general.button': GeneralButton;
      'general.heading': GeneralHeading;
      'general.link': GeneralLink;
      'general.paragraph': GeneralParagraph;
      'global.header': GlobalHeader;
      'sections-homepage.hero-header': SectionsHomepageHeroHeader;
      'sections-homepage.section2-model': SectionsHomepageSection2Model;
      'sections-homepage.section3-tradition': SectionsHomepageSection3Tradition;
      'sections-homepage.section4-a-propos': SectionsHomepageSection4APropos;
    }
  }
}
