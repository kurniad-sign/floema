import localFont from 'next/font/local';

const suisse = localFont({
  src: [
    {
      path: '../public/fonts/SuisseBPIntl-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SuisseBPIntl-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/SuisseBPIntl-UltraLight.otf',
      weight: '200',
      style: 'normal',
    },
  ],
  display: 'swap',
});

const george = localFont({
  src: '../public/fonts/George-X.otf',
  weight: '400',
  style: 'normal',
  display: 'swap',
});

export { george, suisse };
