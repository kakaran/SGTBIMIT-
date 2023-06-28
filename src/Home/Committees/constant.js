import pdf from '../../Assets/anti_ragging_poster.pdf'
import female from '../../Assets/female.pdf'
import sexual_harrass from '../../Assets/sexual_harras.pdf'
import policy from '../../Assets/policy.pdf'
import antiRagging from '../../images/anti-ragging.png'
import qualityPolicy from '../../images/quality-policy.png'
import sexualHarrass from '../../images/sexual-harrassment.png'
import femaleFoeticie from '../../images/foeticide.png'


export const committees = [
  {
    name: "ANTI-RAGGING",
    image: antiRagging,
    pdf: pdf,
    detail: "Ragging is a punishable offence as per Hon'ble Supreme Court order.",
    id: "1",
  },
  {
    name: "QUALITY POLICY",
    image: qualityPolicy,
    pdf: policy,
    detail: "Top Recruiters having placement drives at SGTBIMIT.",
    id: "2",
  },
  {
    name: "SEXUAL HARRASMENT",
    image: sexualHarrass,
    pdf: sexual_harrass,
    detail: "Ragging is a punishable offence as per Hon'ble Supreme Court order.",
    id: "3",
  },
  {
    name: "FEMALE FOETICIDE COMMITTEE",
    image: femaleFoeticie,
    pdf: female,
    detail: "Caste Discrimination Complaint.",
    id: "4",
  }

]