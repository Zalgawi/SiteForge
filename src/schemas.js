export const SCHEMAS = {
  navbar: {
    label: 'Navbar',
    category: 'Layout',
    icon: '≡',
    defaults: {
      logo: 'Brand',
      links: ['Home', 'About', 'Services', 'Contact'],
      ctaText: 'Get started',
      variant: 'light',
    },
    schema: [
      { key: 'logo', type: 'text', label: 'Logo name' },
      { key: 'links', type: 'array-string', label: 'Nav links' },
      { key: 'ctaText', type: 'text', label: 'CTA button text' },
      { key: 'variant', type: 'select', label: 'Style', options: ['light', 'dark'] },
    ],
  },

  hero: {
    label: 'Hero',
    category: 'Layout',
    icon: '★',
    defaults: {
      eyebrow: 'Introducing v2.0',
      headline: 'Build faster,\nship smarter.',
      subheadline: 'A modern design system for teams who care about quality, accessibility, and shipping at speed.',
      primaryCta: 'Start for free',
      secondaryCta: 'View docs',
      variant: 'dark',
      align: 'center',
    },
    schema: [
      { key: 'eyebrow', type: 'text', label: 'Eyebrow text' },
      { key: 'headline', type: 'textarea', label: 'Headline' },
      { key: 'subheadline', type: 'textarea', label: 'Subheadline' },
      { key: 'primaryCta', type: 'text', label: 'Primary CTA' },
      { key: 'secondaryCta', type: 'text', label: 'Secondary CTA' },
      { key: 'variant', type: 'select', label: 'Background', options: ['dark', 'light', 'brand'] },
      { key: 'align', type: 'select', label: 'Alignment', options: ['center', 'left'] },
    ],
  },

  carousel: {
    label: 'Carousel',
    category: 'Content',
    icon: '◫',
    defaults: {
      slides: [
        { title: 'Design with purpose', description: 'Every component starts with a why. Purpose-driven design that scales across your entire product.', badge: 'Design' },
        { title: 'Built for accessibility', description: 'WCAG 2.1 AA compliance built in from the ground up — not added as an afterthought.', badge: 'A11y' },
        { title: 'Ship with confidence', description: 'Full test coverage and TypeScript types so your team can move fast without breaking things.', badge: 'Quality' },
      ],
      variant: 'dark',
    },
    schema: [
      { key: 'variant', type: 'select', label: 'Style', options: ['dark', 'light'] },
      {
        key: 'slides', type: 'array-object', label: 'Slides',
        fields: [
          { key: 'title', type: 'text', label: 'Title' },
          { key: 'description', type: 'textarea', label: 'Description' },
          { key: 'badge', type: 'text', label: 'Badge' },
        ],
        itemDefault: { title: 'New Slide', description: 'Slide description.', badge: 'Label' },
      },
    ],
  },

  textSection: {
    label: 'Text Section',
    category: 'Content',
    icon: '¶',
    defaults: {
      eyebrow: 'Our approach',
      headline: 'Craft over convention',
      body: 'We believe great software is the result of intentional decisions, not accumulated shortcuts. Every component, every API, every interaction is considered from first principles — not copied from a template.',
      align: 'center',
      columns: '1',
    },
    schema: [
      { key: 'eyebrow', type: 'text', label: 'Eyebrow' },
      { key: 'headline', type: 'textarea', label: 'Headline' },
      { key: 'body', type: 'textarea', label: 'Body text' },
      { key: 'align', type: 'select', label: 'Alignment', options: ['center', 'left'] },
      { key: 'columns', type: 'select', label: 'Body columns', options: ['1', '2'] },
    ],
  },

  textImage: {
    label: 'Text + Image',
    category: 'Content',
    icon: '⊟',
    defaults: {
      eyebrow: 'Why us',
      headline: 'Built for real products, not demos',
      body: 'Every decision in this system came from shipping real products. No abstract patterns — just battle-tested components with clear APIs that your whole team will actually enjoy using day to day.',
      bullets: ['Figma-to-code in minutes', 'Full TypeScript support', 'Dark mode out of the box'],
      ctaText: 'Read the docs',
      imageSide: 'left',
      imageUrl: '',
    },
    schema: [
      { key: 'eyebrow', type: 'text', label: 'Eyebrow' },
      { key: 'headline', type: 'textarea', label: 'Headline' },
      { key: 'body', type: 'textarea', label: 'Body text' },
      { key: 'bullets', type: 'array-string', label: 'Bullet points' },
      { key: 'ctaText', type: 'text', label: 'CTA text' },
      { key: 'imageSide', type: 'select', label: 'Image side', options: ['left', 'right'] },
      { key: 'imageUrl', type: 'text', label: 'Image URL (optional)' },
    ],
  },

  cta: {
    label: 'CTA Banner',
    category: 'Content',
    icon: '→',
    defaults: {
      headline: 'Ready to get started?',
      body: 'Join thousands of teams building better products with Forge. Free forever plan available.',
      ctaText: 'Get early access',
      showEmailInput: true,
      note: 'No credit card required · Free forever plan',
      variant: 'dark',
    },
    schema: [
      { key: 'headline', type: 'textarea', label: 'Headline' },
      { key: 'body', type: 'textarea', label: 'Body text' },
      { key: 'ctaText', type: 'text', label: 'Button text' },
      { key: 'showEmailInput', type: 'toggle', label: 'Show email input' },
      { key: 'note', type: 'text', label: 'Fine print' },
      { key: 'variant', type: 'select', label: 'Style', options: ['dark', 'light', 'brand'] },
    ],
  },

  formElements: {
    label: 'Form Elements',
    category: 'UI Components',
    icon: '⊞',
    defaults: {
      headline: 'Form Elements',
      selectLabel: 'Preferred framework',
      selectOptions: ['React', 'Vue', 'Angular', 'Svelte'],
      radioLabel: 'Experience level',
      radioOptions: ['Junior', 'Mid-level', 'Senior', 'Lead'],
      checkboxLabel: 'Areas of interest',
      checkboxOptions: ['TypeScript', 'Testing', 'Accessibility', 'Performance'],
    },
    schema: [
      { key: 'headline', type: 'text', label: 'Section headline' },
      { key: 'selectLabel', type: 'text', label: 'Select label' },
      { key: 'selectOptions', type: 'array-string', label: 'Select options' },
      { key: 'radioLabel', type: 'text', label: 'Radio group label' },
      { key: 'radioOptions', type: 'array-string', label: 'Radio options' },
      { key: 'checkboxLabel', type: 'text', label: 'Checkbox group label' },
      { key: 'checkboxOptions', type: 'array-string', label: 'Checkbox options' },
    ],
  },

  pagination: {
    label: 'Pagination',
    category: 'UI Components',
    icon: '⟩',
    defaults: {
      headline: 'Pagination',
      totalPages: 7,
      currentPage: 3,
      variant: 'default',
    },
    schema: [
      { key: 'headline', type: 'text', label: 'Section headline' },
      { key: 'totalPages', type: 'number', label: 'Total pages', min: 3, max: 20 },
      { key: 'currentPage', type: 'number', label: 'Active page', min: 1, max: 20 },
      { key: 'variant', type: 'select', label: 'Style', options: ['default', 'minimal', 'rounded'] },
    ],
  },

  tabs: {
    label: 'Tabs',
    category: 'UI Components',
    icon: '⊡',
    defaults: {
      headline: 'Tabs',
      variant: 'underline',
      tabs: [
        { label: 'Overview', content: 'This is the overview tab. Use it to introduce your product, feature, or content section with a clear and concise summary.' },
        { label: 'Features', content: 'Highlight the key features and capabilities here. Use bullet points or short descriptions for scannability.' },
        { label: 'Pricing', content: 'Outline your pricing tiers, what\'s included, and any free tier details. Keep it simple and transparent.' },
        { label: 'FAQ', content: 'Answer the most common questions your users have. This builds trust and reduces support load.' },
      ],
    },
    schema: [
      { key: 'headline', type: 'text', label: 'Section headline' },
      { key: 'variant', type: 'select', label: 'Tab style', options: ['underline', 'pill', 'box'] },
      {
        key: 'tabs', type: 'array-object', label: 'Tabs',
        fields: [
          { key: 'label', type: 'text', label: 'Tab label' },
          { key: 'content', type: 'textarea', label: 'Content' },
        ],
        itemDefault: { label: 'New Tab', content: 'Tab content goes here.' },
      },
    ],
  },

  breadcrumbs: {
    label: 'Breadcrumbs',
    category: 'UI Components',
    icon: '›',
    defaults: {
      headline: 'Breadcrumbs',
      items: ['Home', 'Products', 'Design System', 'Components'],
      separator: '/',
    },
    schema: [
      { key: 'headline', type: 'text', label: 'Section headline' },
      { key: 'items', type: 'array-string', label: 'Breadcrumb items' },
      { key: 'separator', type: 'select', label: 'Separator', options: ['/', '›', '→', '·'] },
    ],
  },

  cards: {
    label: 'Cards',
    category: 'Content',
    icon: '▦',
    defaults: {
      eyebrow: 'Case studies',
      headline: 'What teams are building',
      columns: '3',
      cards: [
        { title: 'Streamlined checkout', description: 'Reduced cart abandonment by 40% by redesigning the checkout flow using accessible form components.', badge: 'E-commerce', link: 'Read more' },
        { title: 'Accessible dashboard', description: 'Built a WCAG 2.1 AA compliant analytics dashboard that works for every user, including keyboard and screen reader users.', badge: 'SaaS', link: 'Read more' },
        { title: 'Design system rollout', description: 'Adopted Forge across 6 product teams in 8 weeks, cutting UI inconsistencies by 90%.', badge: 'Enterprise', link: 'Read more' },
      ],
    },
    schema: [
      { key: 'eyebrow', type: 'text', label: 'Eyebrow' },
      { key: 'headline', type: 'textarea', label: 'Headline' },
      { key: 'columns', type: 'select', label: 'Columns', options: ['2', '3', '4'] },
      {
        key: 'cards', type: 'array-object', label: 'Cards',
        fields: [
          { key: 'title', type: 'text', label: 'Title' },
          { key: 'description', type: 'textarea', label: 'Description' },
          { key: 'badge', type: 'text', label: 'Badge text' },
          { key: 'link', type: 'text', label: 'Link text' },
        ],
        itemDefault: { title: 'Card Title', description: 'Card description.', badge: 'Category', link: 'Read more' },
      },
    ],
  },

  modal: {
    label: 'Modal',
    category: 'UI Components',
    icon: '⊡',
    defaults: {
      headline: 'Modal',
      triggerText: 'Open modal',
      title: 'Confirm action',
      body: 'Are you sure you want to proceed? This action cannot be undone and will permanently delete the selected data.',
      confirmText: 'Confirm',
      cancelText: 'Cancel',
      variant: 'default',
    },
    schema: [
      { key: 'headline', type: 'text', label: 'Section headline' },
      { key: 'triggerText', type: 'text', label: 'Trigger button' },
      { key: 'title', type: 'text', label: 'Modal title' },
      { key: 'body', type: 'textarea', label: 'Modal body' },
      { key: 'confirmText', type: 'text', label: 'Confirm button' },
      { key: 'cancelText', type: 'text', label: 'Cancel button' },
      { key: 'variant', type: 'select', label: 'Variant', options: ['default', 'danger', 'success'] },
    ],
  },

  accordion: {
    label: 'Accordion',
    category: 'UI Components',
    icon: '⊜',
    defaults: {
      eyebrow: 'FAQ',
      headline: 'Frequently asked questions',
      items: [
        { question: 'Is there a free tier available?', answer: 'Yes — our free tier includes 20 components, unlimited projects, and community support. No credit card required to get started.' },
        { question: 'Does this support TypeScript?', answer: 'Absolutely. Every component ships with full TypeScript type definitions. Auto-complete just works out of the box.' },
        { question: 'How is accessibility handled?', answer: 'WCAG 2.1 AA compliance is built in at the component level. All interactive elements are keyboard navigable and announced correctly by screen readers.' },
        { question: 'What frameworks are supported?', answer: 'React, Vue 3, and Svelte are fully supported with official adapters. Angular adapter is currently in beta.' },
      ],
    },
    schema: [
      { key: 'eyebrow', type: 'text', label: 'Eyebrow' },
      { key: 'headline', type: 'textarea', label: 'Headline' },
      {
        key: 'items', type: 'array-object', label: 'FAQ items',
        fields: [
          { key: 'question', type: 'text', label: 'Question' },
          { key: 'answer', type: 'textarea', label: 'Answer' },
        ],
        itemDefault: { question: 'New question?', answer: 'Answer goes here.' },
      },
    ],
  },

  badges: {
    label: 'Badges & Toasts',
    category: 'UI Components',
    icon: '◉',
    defaults: {
      headline: 'Badges & Notifications',
      showBadges: true,
      showToasts: true,
    },
    schema: [
      { key: 'headline', type: 'text', label: 'Section headline' },
      { key: 'showBadges', type: 'toggle', label: 'Show badges' },
      { key: 'showToasts', type: 'toggle', label: 'Show toasts' },
    ],
  },
};

export const BLOCK_ORDER = [
  'navbar', 'hero', 'carousel',
  'textSection', 'textImage', 'cards', 'cta',
  'formElements', 'pagination', 'tabs', 'breadcrumbs', 'modal', 'accordion', 'badges',
];

export const CATEGORIES = ['Layout', 'Content', 'UI Components'];
