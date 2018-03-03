const theme = {
  breakpoints: [40, 52, 64],
  fonts: {
    body: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    heading: "Akrobat,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    button: "Roboto,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif"
  },
  fontSizes: [
    11, 13, 16, 22, 32, 36, 48, 72, 92, 118
  ],
  colors: {
    amber:'#FFC107',
    brown:'#795548',
    blueGray:'#394a5a',
    blueDark:'#2c4176',
    blue:'#24335a',
    blueLight:'#84cfcd',
    blueLighter:'#108fd0',
    charcoal: '#4a4a4a',
    cyan:'#00BCD4',
    grayLight: '#f6f6f6',
    gray: '#9E9E9E',
    green:'#68bc50',
    greenLight:'#8BC34A',
    indigo:'#3F51B5',
    lime:'#CDDC39',
    grayBlue: '#607D8B',
    orange:'#f47e58',
    orangeDeep:'#e66734',
    pink:'#e3318d',
    purple:'#5c50ca',
    purpleMuted:'#9391ef',
    purpleDeep:'#673AB7',
    red: '#FA5050',
    sand: '#fffbdc',
    teal:'#009688',
    turquoise: '#05b090',
    yellow:'#FFD200',
    
    white: '#ffffff',
  },
  borderImage: {
    blue: 'linear-gradient(to right, #24335a, #31477e)',
    cherry: 'linear-gradient(to right, #EB3349, #F45C43)',
    red: 'linear-gradient(to right, #d96868, #d96868)',
    green: 'linear-gradient(to right, #56ab2f,#a8e063)',
    colorBase: 'linear-gradient(to right, #F4D03F,  #16A085, #e35d5b)',
    rainbowSimple: 'linear-gradient(to right, #e53935,#56ab2f, #7F00FF)',
  },
  gradient: {
    black: ['#232526', '#414345'],
    blue: ['#183682', '#0d023b'],
    charcoal: ['#283048', '#859398'],
    gray: ['#e7dfdf', '#f3f8fa'],
    crimson: ['#642B73', '#C6426E'],
    kashmir: ['#614385', '#516395'],
    orange: ['#E44D26', '#F16529'],
    red: ['#cb2d3e', '#ef473a'],
    pink: ['#e3318d', '#d02d81'],
    purple: ['#5c50ca', '#3a2daa'],
    turqoise: ['#136a8a', '#267871'],
    violet: ['#4776E6', '#8E54E9'],
    whiteTransparent: 'transparent, transparent 20%, #FFF 92.50%, #FFF 100%',
    purpleTransparent: 'transparent, transparent 20%, rgba(109,93,157, 1) 50% , rgba(96,101,157,1) 100%',
    blackTransparent: 'rgba(2, 2, 2, 0.3), rgba(56, 56, 56, 0.87) 20%, #000000 80%, #1d1d1d 100%',
  },

  palette: {
    white: ['#ffffff', '#ffffff'],
    charcoal: ['#4a4a4a', '#636363'],
    grayscale: ['#616161', '#9e9e9e', '#dbdbdb', '#bdbdbd', '#3e3e3e', '#ffffff'],
    primary: ['#1565C0', '#1976D2', '#1E88E5', '#c61a1a'],
    secondary: ['#2389d0', '#247fbe', '#1A96FE', '#1A96FE'],
    danger: ['#D32F2F', '#F44336', '#F8877F', '#FFCDD2'],
    alert: ['#D32F2F', '#F44336', '#F8877F', '#FFCDD2'],
    success: ['#D32F2F', '#F44336', '#F8877F', '#FFCDD2'],
    red: ['#c61a1a', '#c61a1a', '#c61a1a', '#c61a1a'],
    blue: ['#1d5a7a', '#104a68', '#2d3f45', '#005caa'],
    orange: ['#d46134', '#d8531e', '#f8a800', '#f8a800'],
    purple: ['#a837b9', '#a837b9', '#a837b9', '#a837b9'],
    haze: ['#c1c1c1', '#d2d2d2', '#d2d2d2', '#d2d2d2'],
  },
  textShadows: {
    0: [
      '1px 2px 1px rgba(93, 93, 93, 0.35)',
      '2px 1px 9px rgba(0,0,0, 0.0125)',
      '1px 2px 5px rgba(0,0,0, 0.05)', 
      '2px 2px 1px rgba(93,93,93, 0.15)'
    ],
    light:[
      '0 4px 6px rgba(50,50,93, .08)', 
      '0 1px 3px rgba(0,0,0, .20)',
      '0 1px 5px rgba(93,93,93, .1)'
    ],
    lightHazy: [
      '0px 2px 7px rgba(50,50 , 93, 0.08)',
      '0px 1px 9px rgba(0,0,0, 0.05)',
      '1px 2px 5px rgba(0,0,0, 0.15)', 
      '0px 2px 0px rgba(93,93,93, 0.15)'
    ],
    1:[
      '1px 2px 1px rgba(93', '93', '93', '0.35)', '2px 1px 4px rgba(0,0,0', '0.05)',
      '1px 2px 4px rgba(0,0,0', '0.05)', '2px 2px 1px rgba(20,20,20', '0.15)',
      '1px 1px 0px rgba(0', '0', '0', '0.05)', '1px 1px 2px rgba(93,93,93', '0.25)'
    ],
    dark:[
      '0 4px 6px rgba(50,50,93, .14)', 
      '0 1px 3px rgba(0,0,0, .275)',
      '1px 1px 2px rgba(0,0,0, .275)',
      '0 1px 5px rgba(93,93,93, .15)'
    ],
    darkHazy: [
      '0px 2px 7px rgba(50,50 , 93, 0.15)',
      '2px 1px 12px rgba(0,0,0, 0.15)',
      '1px 2px 7px rgba(0,0,0, 0.175)', 
      '0px 2px 0px rgba(93,93,93, 0.15)'
    ],
    darkPurple:[
      '0 4px 6px rgba(13, 13, 150, 0.068)',
      '0 1px 3px rgba(87, 28, 173, 0.25)', 
      '0 1px 5px rgba(72, 20, 222, 0.45)'
    ],
    
  },
  shadows: {
    0:[
      '0 1px 3px rgba(0,0,0,0.12)', 
      '0 1px 2px rgba(0,0,0,0.24)'
    ],
    1:[
      '0 15px 35px rgba(50,50,93,.1)', 
      '0 5px 15px rgba(0,0,0,.07)'
    ],
    2: [
      '0 3px 6px rgba(0,0,0,0.16)',
      '0 3px 6px rgba(0,0,0,0.23)'
      ],
    3: [
      '0 10px 20px rgba(0,0,0,0.19)',
      ' 0 6px 6px rgba(0,0,0,0.23)'
      ],
    4: [
      '0 14px 28px rgba(0,0,0,0.25)',
      '0 10px 10px rgba(0,0,0,0.22)'
    ],
    // Material 3
    insetBottomLight: [
      'inset 0 -10px 10px -10px rgba(0,0,0,0.19)',
      'inset 0 -10px 10px -10px rgba(0,0,0,0.23)'
    ],
    insetBottom: [
      'inset 0 -15px 15px -15px rgba(0,0,0,0.45)',
      'inset 0 -15px 15px -15px rgba(0,0,0,0.375)'
    ],
    insetBottomHeavy: [
      'inset 0 -15px 15px -15px rgba(0,0,0,0.79)',
      'inset 0 -15px 15px -15px rgba(0,0,0,0.73)'
    ],
    insetTopLight: [
      'inset 0 15px 15px -15px rgba(0,0,0,0.19)',
      'inset 0 15px 15px -15px rgba(0,0,0,0.23)'
    ],
    insetTop: [
      'inset 0 15px 15px -15px rgba(0,0,0,0.45)',
      'inset 0 15px 15px -15px rgba(0,0,0,0.375)'
    ],
    insetTopHeavy: [
      'inset 0 15px 15px -15px rgba(0,0,0,0.79)',
      'inset 0 15px 15px -15px rgba(0,0,0,0.73)'
    ],
    // Material 3
    5: [
      '0 10px 20px rgba(0,0,0,0.19)',
      '0 6px 6px rgba(0,0,0,0.23)'
    ],
    // Material 4
    6: [
      '0 14px 28px rgba(0,0,0,0.25)',
      '0 10px 10px rgba(0,0,0,0.22)'
    ],
    7: // Material 5
    [
      '0 19px 38px rgba(0,0,0,0.30)',
      '0 15px 12px rgba(0,0,0,0.22)'
    ]
  }
}

export default theme
