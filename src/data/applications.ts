export interface Application {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  processSteps?: Array<{ title: string; description: string }>;
}

export const applications: Application[] = [
  {
    slug: 'foam-dressing',
    title: 'Foam Dressing Manufacturing',
    subtitle: 'The essential adhesive layer for composite foam dressings',
    description:
      'Our double-sided silicone gel perforated film serves as the critical adhesive layer in foam dressing construction. It bonds the polyurethane foam layer to the wound contact layer while providing a breathable, moisture-managing interface. The micro-perforation pattern ensures controlled fluid handling and optimal wound healing environment.',
    image: '/images/applications/foam-dressing.jpg',
    processSteps: [
      { title: 'Substrate Preparation', description: 'PU foam is prepared and surface-treated for optimal bonding.' },
      { title: 'Film Lamination', description: 'The silicone gel film is laminated onto the foam substrate under controlled pressure.' },
      { title: 'Perforation Alignment', description: 'The perforation pattern is aligned to ensure consistent breathability across the dressing.' },
      { title: 'Die Cutting', description: 'The composite material is die-cut into final dressing shapes and sizes.' },
      { title: 'Sterilization & Packaging', description: 'Finished dressings are sterilized and packaged in medical-grade packaging.' },
    ],
  },
  {
    slug: 'wound-care',
    title: 'Advanced Wound Care Products',
    subtitle: 'Creating next-generation wound management solutions',
    description:
      'Our high-breathability silicone gel films are ideal for advanced wound care products including hydrocolloid alternatives, silver-infused dressings, and negative pressure wound therapy (NPWT) interfaces. The silicone gel provides atraumatic wound contact while the perforation pattern enables controlled exudate management.',
    image: '/images/applications/wound-care.jpg',
    processSteps: [
      { title: 'Material Selection', description: 'Appropriate film grade selected based on wound type and exudate level.' },
      { title: 'Active Ingredient Integration', description: 'Optional incorporation of antimicrobial agents or growth factors.' },
      { title: 'Composite Assembly', description: 'Multi-layer wound dressing assembly with the silicone gel film as the wound contact layer.' },
      { title: 'Packaging', description: 'Sterile packaging with controlled moisture barrier properties.' },
    ],
  },
  {
    slug: 'medical-tape',
    title: 'Medical Tape & Fixation Devices',
    subtitle: 'Reliable, skin-friendly fixation for medical devices',
    description:
      'Our silicone gel film is the ideal adhesive component for medical tapes and fixation devices. It provides secure attachment of dressings, catheters, tubing, and monitoring sensors while enabling pain-free removal. The breathable design reduces skin maceration risk even with extended wear.',
    image: '/images/applications/medical-tape.jpg',
    processSteps: [
      { title: 'Backing Selection', description: 'Non-woven, film, or fabric backing selected based on application.' },
      { title: 'Film Application', description: 'Silicone gel film is applied to the backing material.' },
      { title: 'Slitting & Converting', description: 'Master rolls are slit to customer-specified widths.' },
      { title: 'Packaging', description: 'Individual rolls or sheets packaged for medical use.' },
    ],
  },
  {
    slug: 'transdermal-patch',
    title: 'Transdermal Drug Delivery Patches',
    subtitle: 'Ultra-thin adhesive layer for drug-in-adhesive patch systems',
    description:
      'Our ultra-thin silicone gel film provides an excellent adhesive matrix for transdermal drug delivery systems. The medical-grade silicone is compatible with a wide range of drug compounds and provides consistent skin adhesion throughout the wear period. Custom release liners are available for automated manufacturing.',
    image: '/images/applications/transdermal-patch.jpg',
    processSteps: [
      { title: 'Drug Formulation', description: 'Drug compound is prepared and incorporated into the adhesive matrix.' },
      { title: 'Film Coating', description: 'Drug-loaded silicone gel is coated onto the release liner.' },
      { title: 'Lamination', description: 'The backing membrane is laminated onto the adhesive layer.' },
      { title: 'Die Cutting', description: 'Patches are die-cut to the specified shape and size.' },
      { title: 'Primary Packaging', description: 'Individual patches are sealed in child-resistant packaging.' },
    ],
  },
  {
    slug: 'industrial-bonding',
    title: 'Industrial Bonding & Assembly',
    subtitle: 'High-performance bonding solutions for demanding industrial applications',
    description:
      'Our industrial-grade silicone gel film provides reliable bonding solutions for electronic device assembly, automotive component mounting, and general industrial lamination. The high-tack formulation and wide temperature tolerance make it suitable for demanding manufacturing environments.',
    image: '/images/applications/industrial-bonding.jpg',
  },
  {
    slug: 'electronics-protection',
    title: 'Electronics & Sensor Protection',
    subtitle: 'Protective bonding for sensitive electronic components',
    description:
      'Our silicone gel film provides shock-absorbing, moisture-resistant bonding for electronic components and sensors. The gel properties help dampen vibration while maintaining secure attachment. The perforated design allows for pressure equalization during assembly.',
    image: '/images/applications/electronics-protection.jpg',
  },
];

export async function getApplications(): Promise<Application[]> {
  return applications;
}

export async function getApplicationBySlug(slug: string): Promise<Application | undefined> {
  return applications.find((a) => a.slug === slug);
}
