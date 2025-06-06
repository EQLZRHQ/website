import { Feature, Review, BlogPost, Step } from '../utils/types';
import UXOne from "../assets/1.png";
import UXTwo from "../assets/2.png"
import UXThree from "../assets/3.png"
import UXFour from "../assets/4.png"
import UXFive from "../assets/5.png"
import BlogOne from "../assets/Blogpost1.jpg"
import BlogTwo from "../assets/Blogpost2.jpg"
import { faBriefcase, faChartLine, faRecycle, faCoffee, faShuffle, faRobot, faBalanceScale, faHandshake, faCogs } from '@fortawesome/free-solid-svg-icons';

// Feature data
export const features: Feature[] = [
  {
    id: 1,
    title: 'Rich Underlying Assets',
    description: 'Volatile transaction fees in Ethereum and Bitcoin Mainnet are covered as underlyings.',
    icon: faBriefcase,
    // metric: '10+ chains supported'
  },
  {
    id: 2,
    title: 'Various Derivative Instruments',
    description: 'Underlyings wrapped with Simple Binary Predictions, Futures and Forwards',
    icon: faChartLine, 
    // metric: '40% cost reduction'
  },
  {
    id: 3,
    title: 'New Risk-Neutral Approach',
    description: 'Standard percentile positions and custom positions available to traders with inverse bonding curve effects',
    icon: faRecycle,
    // metric: 'Minimal slippage'
  },
  {
    id: 4,
    title: 'Cross-chain',
    description: 'Extended support for Ethereum Mainnet and Bitcoin Mainnet.',
    icon: faShuffle,
    // metric: '$7B market potential'
  },
  {
    id: 5,
    title: 'Multi-Agent Architecture',
    description: 'Multiple agents with roles across fundamentals, technicals, sentiments, trade and risk observers.',
    icon: faRobot,
    // metric: '10+ chains supported'
  },
  {
    id: 6,
    title: 'Risk-Neutral Decisions',
    description: 'With Personalized Risk Preferences and Custom Trading Strategies.',
    icon: faBalanceScale, 
    // metric: '40% cost reduction'
  },
  {
    id: 7,
    title: 'Collaborative Dynamics',
    description: 'With Structured and Unstructured Market Signals including Listed Market Feeds.',
    icon: faHandshake,
    // metric: 'Minimal slippage'
  },
  {
    id: 8,
    title: 'Advanced Learning Mechanisms',
    description: 'Using Adaptive `Reinforcement Learning and Composite Natural Language Processing.',
    icon: faCogs,
    // metric: '$7B market potential'
  }
];

// Mobile app demo steps
export const mobileAppSteps: Step[] = [
  {
    id: 1,
    title: 'Connect Wallet & Select a Round',
    description: 'Simply connect your preferred crypto wallet to access the EQLZR platform. We support MetaMask, Coinbase Wallet, WalletConnect and more.',
    image: UXOne
  },
  {
    id: 2,
    title: 'Take a Bullish or Bearish Position',
    description: 'Analyze the gas trends, gas percentiles, bull and bear positions before you take your own Bullish or Bearish position',
    image: UXTwo
  },
  {
    id: 3,
    title: 'Check the outcomes of your positions',
    description: 'Depending on whether you took a position on an hourly contract or a daily contract, you will soon be able to check whether you won or lost.',
    image: UXThree
  },
  {
    id: 4,
    title: 'Compare with other traders',
    description: 'Rank yourselves among other traders based on either the number of wins or the total size of winnings across all contracts and positions.',
    image: UXFour
  },
  {
    id: 5,
    title: 'Monitor your P&L',
    description: 'Track your performance over time with our comprehensive dashboard and analytics tools.',
    image: UXFive
  }
];

// Reviews
export const reviews: Review[] = [
  {
    id: 1,
    name: 'Alex Thompson',
    title: 'DeFi Researcher at Blockchain Capital',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    text: 'EQLZR\'s approach to blockchain fee optimization is revolutionary. Their GasFi primitive is exactly what the industry needs to make DeFi more accessible to mainstream users.'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    title: 'Crypto Fund Manager',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    text: 'We\'ve integrated EQLZR into our trading strategy and have seen significant reductions in our operational costs. The cross-chain capabilities are seamless and efficient.'
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    title: 'Lead Developer at Ethereum Foundation',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    text: 'From a technical perspective, EQLZR has implemented an elegant solution to a complex problem. Their approach to gas optimization doesn\'t compromise on security or decentralization.'
  },
  {
    id: 4,
    name: 'Emily Nakamoto',
    title: 'Blockchain Analyst',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    text: 'The user experience of EQLZR is unmatched in the DeFi space. Finally, a platform that focuses on making complex cross-chain transactions simple and cost-effective.'
  }
];

// Blog posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Analysis of Vitalik Buterin's Post on L1 Scaling",
    summary: 'GasFi presents an actionable solution that addresses immediate concerns surrounding gas fees while fostering innovation across the ecosystem as per scaling suggested by Vitalik.',
    image: BlogOne,
    link: 'https://mirror.xyz/0x34Bb644b688b4Ab5352FAAB009fe1e0fec45b97F/a-62MH9w0sVUsTww9lZmEZ-DZUmI_nFEVoNPt2l4cQQ'
  },
  {
    id: 2,
    title: 'Revolutionizing Bitcoin’s Fee Market with EQLZR',
    summary: "EQLZR's prediction Marketplace will empower all stakeholders with predictable fees, transparent insights, and tools to thrive in a volatile market.",
    image: BlogTwo,
    link: 'https://mirror.xyz/0x34Bb644b688b4Ab5352FAAB009fe1e0fec45b97F/LKqcyj6J3LreEiy2g1Gx6qp9EPay1mHgJDFhwgT5U0E'
  },
  // {
  //   id: 3,
  //   title: 'Risk-Neutral Trading: A New Paradigm',
  //   summary: 'Traditional DEXs suffer from impermanent loss and high slippage. Discover how risk-neutral models are changing the game.',
  //   image: 'https://images.pexels.com/photos/7876429/pexels-photo-7876429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  //   link: '#'
  // }
];