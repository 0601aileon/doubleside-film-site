import { Application } from '@/types/application';

export const applications: Application[] = [
  {
    slug: 'foam-dressing',
    title: 'Foam Dressing Manufacturing',
    titleZh: '泡沫敷料制造',
    subtitle: 'The essential adhesive layer for composite foam dressings',
    subtitleZh: '复合泡沫敷料的关键粘合层',
    description:
      'Our double-sided silicone gel perforated film serves as the critical adhesive layer in foam dressing construction. It bonds the polyurethane foam layer to the wound contact layer while providing a breathable, moisture-managing interface. The micro-perforation pattern ensures controlled fluid handling and optimal wound healing environment.',
    descriptionZh:
      '我们的双面有机硅凝胶涂布微孔膜是泡沫敷料结构中关键的粘合层，将聚氨酯泡沫层与伤口接触层粘合在一起，同时提供透气的湿气管理界面。微孔图案确保可控的渗液处理能力和最佳的伤口愈合环境。',
    image: '/images/applications/foam-dressing.jpg',
    processSteps: [
      { title: 'Substrate Preparation', titleZh: '基材准备', description: 'PU foam is prepared and surface-treated for optimal bonding.', descriptionZh: '聚氨酯泡沫经过准备和表面处理，以达到最佳粘合效果。' },
      { title: 'Film Lamination', titleZh: '薄膜复合', description: 'The silicone gel film is laminated onto the foam substrate under controlled pressure.', descriptionZh: '有机硅凝胶膜在受控压力下复合到泡沫基材上。' },
      { title: 'Perforation Alignment', titleZh: '微孔对准', description: 'The perforation pattern is aligned to ensure consistent breathability across the dressing.', descriptionZh: '微孔图案对准以确保敷料整体透气性均匀一致。' },
      { title: 'Die Cutting', titleZh: '模切', description: 'The composite material is die-cut into final dressing shapes and sizes.', descriptionZh: '复合材料模切成最终的敷料形状和尺寸。' },
      { title: 'Sterilization & Packaging', titleZh: '灭菌与包装', description: 'Finished dressings are sterilized and packaged in medical-grade packaging.', descriptionZh: '成品敷料经过灭菌并以医用级包装封装。' },
    ],
  },
  {
    slug: 'wound-care',
    title: 'Advanced Wound Care Products',
    titleZh: '高级伤口护理产品',
    subtitle: 'Creating next-generation wound management solutions',
    subtitleZh: '打造下一代伤口管理解决方案',
    description:
      'Our high-breathability silicone gel films are ideal for advanced wound care products including hydrocolloid alternatives, silver-infused dressings, and negative pressure wound therapy (NPWT) interfaces. The silicone gel provides atraumatic wound contact while the perforation pattern enables controlled exudate management.',
    descriptionZh:
      '我们的高透气性有机硅凝胶膜是高级伤口护理产品的理想选择，包括水胶体替代品、银离子敷料和负压伤口治疗界面。有机硅凝胶提供无创伤的伤口接触，微孔图案实现可控的渗液管理。',
    image: '/images/applications/wound-care.jpg',
    processSteps: [
      { title: 'Material Selection', titleZh: '材料选择', description: 'Appropriate film grade selected based on wound type and exudate level.', descriptionZh: '根据伤口类型和渗液水平选择相应的薄膜等级。' },
      { title: 'Active Ingredient Integration', titleZh: '活性成分整合', description: 'Optional incorporation of antimicrobial agents or growth factors.', descriptionZh: '可选择性地加入抗菌剂或生长因子。' },
      { title: 'Composite Assembly', titleZh: '复合材料组装', description: 'Multi-layer wound dressing assembly with the silicone gel film as the wound contact layer.', descriptionZh: '以有机硅凝胶膜作为伤口接触层的多层敷料组装。' },
      { title: 'Packaging', titleZh: '包装', description: 'Sterile packaging with controlled moisture barrier properties.', descriptionZh: '具有可控防潮性能的无菌包装。' },
    ],
  },
  {
    slug: 'medical-tape',
    title: 'Medical Tape & Fixation Devices',
    titleZh: '医用胶带与固定器械',
    subtitle: 'Reliable, skin-friendly fixation for medical devices',
    subtitleZh: '可靠、亲肤的医疗器械固定方案',
    description:
      'Our silicone gel film is the ideal adhesive component for medical tapes and fixation devices. It provides secure attachment of dressings, catheters, tubing, and monitoring sensors while enabling pain-free removal. The breathable design reduces skin maceration risk even with extended wear.',
    descriptionZh:
      '我们的有机硅凝胶膜是医用胶带和固定器械的理想粘合组件，可牢固固定敷料、导管、管线和监测传感器，同时实现无痛移除。透气性设计即使在长时间佩戴时也能降低皮肤浸渍风险。',
    image: '/images/applications/medical-tape.jpg',
    processSteps: [
      { title: 'Backing Selection', titleZh: '基材选择', description: 'Non-woven, film, or fabric backing selected based on application.', descriptionZh: '根据应用场景选择无纺布、薄膜或织物基材。' },
      { title: 'Film Application', titleZh: '薄膜涂布', description: 'Silicone gel film is applied to the backing material.', descriptionZh: '将有机硅凝胶膜涂布到基材上。' },
      { title: 'Slitting & Converting', titleZh: '分切加工', description: 'Master rolls are slit to customer-specified widths.', descriptionZh: '母卷按客户指定的宽度进行分切。' },
      { title: 'Packaging', titleZh: '包装', description: 'Individual rolls or sheets packaged for medical use.', descriptionZh: '单卷或片材包装为医用规格。' },
    ],
  },
  {
    slug: 'transdermal-patch',
    title: 'Transdermal Drug Delivery Patches',
    titleZh: '透皮给药贴片',
    subtitle: 'Ultra-thin adhesive layer for drug-in-adhesive patch systems',
    subtitleZh: '适用于药物-粘合剂贴片系统的超薄粘合层',
    description:
      'Our ultra-thin silicone gel film provides an excellent adhesive matrix for transdermal drug delivery systems. The medical-grade silicone is compatible with a wide range of drug compounds and provides consistent skin adhesion throughout the wear period. Custom release liners are available for automated manufacturing.',
    descriptionZh:
      '我们的超薄有机硅凝胶膜为透皮给药系统提供了优良的粘合基质。医用级有机硅与多种药物化合物兼容，并在整个佩戴期间提供稳定的皮肤粘附力。可提供定制离型膜以满足自动化生产需求。',
    image: '/images/applications/transdermal-patch.jpg',
    processSteps: [
      { title: 'Drug Formulation', titleZh: '药物配制', description: 'Drug compound is prepared and incorporated into the adhesive matrix.', descriptionZh: '药物化合物经配制后加入粘合基质中。' },
      { title: 'Film Coating', titleZh: '薄膜涂布', description: 'Drug-loaded silicone gel is coated onto the release liner.', descriptionZh: '载药有机硅凝胶涂布到离型膜上。' },
      { title: 'Lamination', titleZh: '复合', description: 'The backing membrane is laminated onto the adhesive layer.', descriptionZh: '背衬膜与粘合层复合。' },
      { title: 'Die Cutting', titleZh: '模切', description: 'Patches are die-cut to the specified shape and size.', descriptionZh: '贴片模切成指定的形状和尺寸。' },
      { title: 'Primary Packaging', titleZh: '初级包装', description: 'Individual patches are sealed in child-resistant packaging.', descriptionZh: '单片贴片密封在防儿童开启的包装中。' },
    ],
  },
  {
    slug: 'industrial-bonding',
    title: 'Industrial Bonding & Assembly',
    titleZh: '工业粘接与装配',
    subtitle: 'High-performance bonding solutions for demanding industrial applications',
    subtitleZh: '满足严苛工业应用的高性能粘接方案',
    description:
      'Our industrial-grade silicone gel film provides reliable bonding solutions for electronic device assembly, automotive component mounting, and general industrial lamination. The high-tack formulation and wide temperature tolerance make it suitable for demanding manufacturing environments.',
    descriptionZh:
      '我们的工业级有机硅凝胶膜为电子设备组装、汽车部件安装和一般工业复合提供可靠的粘接方案。高粘性配方和宽广的温度耐受范围使其适用于严苛的生产环境。',
    image: '/images/applications/industrial-bonding.jpg',
  },
  {
    slug: 'electronics-protection',
    title: 'Electronics & Sensor Protection',
    titleZh: '电子与传感器保护',
    subtitle: 'Protective bonding for sensitive electronic components',
    subtitleZh: '敏感电子元件的保护性粘接',
    description:
      'Our silicone gel film provides shock-absorbing, moisture-resistant bonding for electronic components and sensors. The gel properties help dampen vibration while maintaining secure attachment. The perforated design allows for pressure equalization during assembly.',
    descriptionZh:
      '我们的有机硅凝胶膜为电子元件和传感器提供减震、防潮的粘接。凝胶特性有助于抑制振动，同时保持牢固附着。微孔设计可在装配过程中实现压力平衡。',
    image: '/images/applications/electronics-protection.jpg',
  },
];

export async function getApplications(): Promise<Application[]> {
  return applications;
}

export async function getApplicationBySlug(slug: string): Promise<Application | undefined> {
  return applications.find((a) => a.slug === slug);
}
