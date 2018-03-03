import { svg, icons } from 'assets'

export default [
{
  title: 'Bounties',
  to: '/bounties',
  svg: icons.uiCode,
  childrenItems: QuestChildren
},
{
  title: 'Quests',
  to: '/quests',
  svg: icons.uiMoon,
},
{
  title: 'Tokens',
  to: '/quests',
  svg: icons.uiChartPie,
},
{
  title: 'Community',
  to: '/community',
  svg: icons.uiPulse,
},
]

const QuestChildren = [
  {
    title: 'Map',
    to: '/quests/map',
    svg: svg.brain,
    gradient: 'crimson',
    gradientDir: '90deg',
    titleWrap: {
      bg:'white',
      px: [10,15],
    },
      wrapper: {
      display: 'flex',
      align: 'center',
    },
  },
  {
    title: 'Add',
    to: '/dashboard/person/add',
    svg: svg.holePuzzle,
    gradient: 'crimson',
    gradientDir: '150deg',
    titleWrap: {
      bg:'white',
      px: [10,15],
    },
      wrapper: {
      display: 'flex',
      align: 'center',
    },
  },
]