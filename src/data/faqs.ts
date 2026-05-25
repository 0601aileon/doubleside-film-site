export interface FAQ {
  id: number;
  category: 'product' | 'ordering' | 'technical' | 'company';
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    category: 'product',
    question: 'What is double-sided silicone gel perforated film?',
    answer: 'It is a thin silicone gel film coated with medical-grade adhesive on both sides, with uniform micro-perforations. It is used as the adhesive layer in foam dressings, medical tapes, transdermal patches, and various industrial applications. The perforations allow for breathability and moisture vapor transmission.',
  },
  {
    id: 2,
    category: 'product',
    question: 'What are the standard specifications available?',
    answer: 'Our standard films range from 0.15 mm to 0.5 mm in thickness and 50 mm to 1500 mm in width. Perforation sizes from 0.3 mm to 3.0 mm are available. We also offer custom specifications to meet your exact requirements.',
  },
  {
    id: 3,
    category: 'product',
    question: 'Is your silicone gel film medical-grade?',
    answer: 'Yes, our medical-grade silicone gel films are manufactured in an ISO 13485 certified facility and are biocompatible per ISO 10993 standards. They are suitable for wound contact applications.',
  },
  {
    id: 4,
    category: 'product',
    question: 'What certifications do your products have?',
    answer: 'Our manufacturing facility is ISO 13485:2016 certified for medical device quality management. Our medical-grade products are biocompatible (ISO 10993), and we can provide CE marking documentation and FDA registration information upon request.',
  },
  {
    id: 5,
    category: 'ordering',
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'Our standard MOQ is 100 square meters for stock specifications. Custom specifications may require a larger MOQ depending on complexity. We also offer sample rolls (minimum charge applies) for evaluation purposes.',
  },
  {
    id: 6,
    category: 'ordering',
    question: 'What are your payment terms?',
    answer: 'We accept T/T (wire transfer) and L/C for international orders. Standard payment terms are 30% deposit with 70% balance before shipment. Long-term partners may qualify for more favorable terms.',
  },
  {
    id: 7,
    category: 'ordering',
    question: 'What is your typical lead time?',
    answer: 'Standard products typically ship within 15-20 working days from order confirmation. Custom specifications may require 25-35 working days. Rush orders can be accommodated upon request.',
  },
  {
    id: 8,
    category: 'ordering',
    question: 'Do you provide free samples?',
    answer: 'Yes, we provide free samples for qualified manufacturers and distributors. Sample quantities are typically A4-sized sheets or small rolls. The customer bears the shipping cost. Contact our sales team to request samples.',
  },
  {
    id: 9,
    category: 'ordering',
    question: 'How do you ship internationally?',
    answer: 'We ship worldwide via air freight, sea freight, and express courier (DHL, FedEx, UPS). We can arrange shipping or you can use your own freight forwarder. We have experience exporting to over 50 countries.',
  },
  {
    id: 10,
    category: 'technical',
    question: 'Can you customize the thickness and width?',
    answer: 'Yes, we offer full customization of thickness (0.1 mm - 1.0 mm), width (10 mm - 1600 mm), and perforation patterns. Our engineering team will work with you to develop the optimal specification for your application.',
  },
  {
    id: 11,
    category: 'technical',
    question: 'What liner options are available?',
    answer: 'We offer PET, PE, and release paper liners in various thicknesses and release levels. Custom liner printing is also available. The choice of liner depends on your converting process and application requirements.',
  },
  {
    id: 12,
    category: 'technical',
    question: 'How should the film be stored?',
    answer: 'Store in a cool, dry place at 15-25°C and 40-60% relative humidity. Keep away from direct sunlight and heat sources. Under proper storage conditions, the shelf life is 24 months from the date of manufacture.',
  },
  {
    id: 13,
    category: 'company',
    question: 'Where is your factory located?',
    answer: 'Our manufacturing facility is located in Shenzhen, Guangdong Province, China. We welcome factory audits and visits from qualified customers.',
  },
  {
    id: 14,
    category: 'company',
    question: 'Can you provide OEM/ODM services?',
    answer: 'Yes, we offer comprehensive OEM and ODM services including custom formulations, custom perforation patterns, custom packaging (private label), and custom slitting/kitting. Our R&D team can develop bespoke solutions for your specific requirements.',
  },
  {
    id: 15,
    category: 'company',
    question: 'Do you have a quality control system?',
    answer: 'Yes, we operate under a comprehensive quality management system certified to ISO 13485:2016. Our QC process includes raw material inspection, in-process monitoring, and final product testing. Each batch is tested for adhesive strength, thickness uniformity, perforation quality, and dimensional accuracy.',
  },
];
