import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/Simbagio.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';
import AirplaneImg from '../images/Aircraftand.png';

const projects = [
  {
    id: uuidv4(),
    name:
      'EN: Non-Destructive Testing (NDT) NL: Niet-destructief onderzoek (NDO)',
    desc:
      'EN: Non-destructive testing (NDT) is a testing and analysis technique without causing damage to the original part. I have a level 2 certificate. NL:Niet-destructief testen (NDO) is een test- en analysetechniek zonder het originele onderdeel te beschadigen. Ik heb een niveau 2 certificaat.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Certificate composite',
    desc:
      'EN: Getting the certificate composite maintenance and repair. NL: Certificaat composiet onderhoud en reparatie',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Samco Aircraft Mainenance',
    desc:
      'EN: Internship of 9 months at Samco Aircraft Mainenance at Maastricht airport and 4 weeks in Switserland (this picture was made in Switserland. NL: Stage van 9 maanden bij Samco Aircraft Mainenance op Maastricht airport en 4 weken in Zwitserland (deze foto is gemaakt in Zwitserland',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Diploma ceremony',
    desc:
      'EN: My diploma aircraft mechanic ceremony after a postponement of a few months due to the corona virus. NL: Mijn diploma uitreiking vliegtuigmonteur na een uitstel van enkele maanden vanwege het corona virus.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Certificate Drones',
    desc:
      'EN: I also have a certificate drones, set up GPS, fly and handle a drone camera. NL: Ook heb ik een certificaat drones, GPS opzetten, vliegen en een drone camera bedienen.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'EN: Next Internship. NL: Volgende stage',
    desc:
      'EN: This will be my Internship at Aircraft & Components, i am starting in Juli 2021. NL: Dit wordt mijn stage bij Aircraft & Components, ik start in juli 2021.',
    img: AirplaneImg,
  },
];

export default projects;
