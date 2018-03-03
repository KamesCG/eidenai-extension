export default {
// Begin Dashboard
dashboard: {
  zones: {
  header: true,
  aside: true,
  main: true,
  mainContent: true,
  panelLeft: true,
  panelRight: true,
},
regions: {
  tabs: false,
  tray: false,
  panelRight: true,
},
/*--- Header ---*/
header: {
  layout: {
    height: [100,100, 100],
    ml: [0],
    mt: [0],
    w: [1, 0.8, 0.75 ]
  },
},
/*--- Aside ---*/
aside: {
  layout: {
    br: ['0 15px 0 0'],
    color: ['white'],
    mt: 0,
    w: [0, 0.3, 0.2],
  },
  meta: {
    mr: 0
  }
},
/*--- Main ---*/
main: {
  layout: {
    bg: 'white',
    borderRadius: '0 20px 0 0',
    boxShadow: 4,
    height: ['calc(100vh - 80px)'],
    direction: ['column', 'row'],
    mt: [80],
    mb: [0],
    mr: [0, 170, 250],
    p: [0],
    w: [1, 0.7, 0.8]
  },
  regions: {
    /*--- Tabs ---*/
    tabs: {
      layout: {
        p: ['5px 10px', '10px 15px']
      },
      meta: {
        h: [40,80],
        mb: [0, 20]
      }
    },
    /*--- Panel Left ---*/
    panelLeft: {
      layout: {
        display: ['block', 'inherit', 'inherit'],
        gradient: 'gray',
        mh: [50, 1],
        mt: [0],
        mb:[0],
        flex: ['0 0 auto'],
      },
      meta: {
        mr: [0]
      }
    },
    /*--- Panel Right ---*/
    panelRight: {
      layout: {
        color: 'white',
        gradient: 'blue',
        mh: [100, 1],
        h: [100, 1],
        mt: [0],
        mb:[0],
        flex: ['0 0 auto'],
        // w: [0, 120, 180]
      },
      meta: {
        mr: [0]
      }
    },
    /*--- Content ---*/
    content: {
      layout: {
        bs: 0,
        display: ['block', 'absolute', 'absolute'],
        h: [300, 1],
        mt: [0],
        mb: [0],
        flex: ['3 5 auto'],
      }
    },
  }
}
}
}