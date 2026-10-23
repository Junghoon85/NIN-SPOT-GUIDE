/* NIN SPOT GUIDE v0.0.0 — Edit this file to manage Showcase cards.
   Unknown values are deliberately left blank. Do not publish example settings as actual footage specifications.
   Editable fields: videoUrl, aspect, title, link, description, creator, difficulty (Easy, Moderate, Hard), location, contentUsed and Recipe steps.
   contentUsed entries use {type:'text|picture|drawing|object|video', name:'', url:''}. Only Object entries use a Store URL (up to 2 objects).
   Each Recipe step has its own settings and Basic Guide.
*/
window.NIN_SHOWCASES = [
  {
    videoUrl: 'https://youtu.be/txphnstGcUw?si=ewhY60p96GYlDaW4',
    aspect: '16:9',
    link: '',
    title: 'World Cup on NIN.Earth',
    difficulty: 'Moderate',
    description: 'A football-inspired experience brought into the real world.',
    tags: ['3DObject', 'AR'], creator: 'NIN.Earth',
    location: {name:'Monterrey Stadium (Estadio BBVA) · Av. Pablo Livas 2011, La Pastora, 67140 Guadalupe, Nuevo León, Mexico',url:'https://www.google.com/maps/search/?api=1&query=Estadio+BBVA+Av.+Pablo+Livas+2011+Guadalupe+Nuevo+Leon+Mexico'},
    contentUsed: [{type:'object',name:'Humpback Whale',url:''}],
    steps: [
      {title:'Prepare the scene',description:'Choose the location and prepare the content.',settings:{},guideKey:'Tile',guideTitle:'Select a Tile'},
      {title:'Install the humpback whale',description:'Place the humpback whale in the stadium scene.',settings:{Object:'Humpback Whale'},guideKey:'3DObject',guideTitle:'Install 3D Objects'},
      {title:'View in AR',description:'Experience the result through your phone.',settings:{},guideKey:'AR',guideTitle:'View in AR'}
    ]
  },
  {
    videoUrl: 'https://youtube.com/shorts/meMevpicXaw?si=XrYLU7Euy7YCQl4',
    aspect: '9:16',
    link: '',
    title: 'A Whale Balloon by the Sea',
    difficulty: 'Easy',
    description: 'A playful seaside moment with a giant whale balloon in AR.',
    tags: ['3DObject','AR'], creator: 'NIN.Earth',
    location: {name:'',url:''},
    contentUsed: [{type:'object',name:'Whale Balloon',url:''}],
    steps: [
      {title:'Choose a location',description:'Prepare the seaside scene.',settings:{},guideKey:'Tile',guideTitle:'Select a Tile'},
      {title:'Position the whale balloon',description:'Align the object with the camera composition.',settings:{Scale:'',Altitude:'',Rotation:''},guideKey:'3DObject',guideTitle:'Install 3D Objects'},
      {title:'Capture in AR',description:'View and record the finished scene.',settings:{},guideKey:'AR',guideTitle:'View in AR'}
    ]
  },
  {
    videoUrl: 'https://youtu.be/Z90LKF64kKM?si=8QDTZOVZFXXsPYjG',
    aspect: '16:9',
    link: '',
    title: 'A Whale Above Seokchon Lake',
    difficulty: 'Hard',
    description: 'A humpback whale glides above Seokchon Lake in Seoul, blending a digital object with a real place.',
    tags: ['Tile','3DObject','AR'], creator: 'NIN.Earth',
    location: {name:'Seokchon Lake, Seoul',url:'https://www.google.com/maps/search/?api=1&query=Seokchon+Lake+Seoul'},
    contentUsed: [{type:'object',name:'Humpback Whale',url:''}],
    steps: [
      {title:'Select a Tile',description:'Select a Tile near Seokchon Lake.',settings:{Location:'Seokchon Lake, Seoul'},guideKey:'Tile',guideTitle:'How to Purchase Tiles'},
      {title:'Install a 3D Object',description:'Place a humpback whale above the lake.',settings:{Object:'Humpback Whale',Scale:'To be specified',Altitude:'To be specified'},guideKey:'3DObject',guideTitle:'How to Install 3D Objects'},
      {title:'Set the Motion',description:'Make the whale move through the sky.',example:true,settings:{Speed:'3',Path:'Curved',Orientation:'Follow Path',Playback:'Repeat'},guideKey:'Motion',guideTitle:'How to Set Motion'},
      {title:'View in AR',description:'Visit the location and experience the result.',settings:{},guideKey:'AR',guideTitle:'How to View in AR'}
    ]
  },
  {
    videoUrl: 'https://youtube.com/shorts/VkntITHfdKc?si=6U29tp34hLy3dZor',
    aspect: '9:16',
    link: '',
    title: 'BTS Returns to Gwanghwamun',
    difficulty: 'Moderate',
    description: 'BTS and ARMY letter objects appear at Gwanghwamun Square in Seoul.',
    tags: ['3DObject','AR'], creator: 'NIN.Earth',
    location: {name:'Gwanghwamun Square, Seoul',url:'https://www.google.com/maps/search/?api=1&query=Gwanghwamun+Square+Seoul'},
    contentUsed: [{type:'object',name:'BTS Letters',url:''},{type:'object',name:'ARMY Letters',url:''}],
    steps: [
      {title:'Select a location',description:'Choose positions across Gwanghwamun Square.',settings:{Location:'Gwanghwamun Square, Seoul'},guideKey:'Tile',guideTitle:'Select a Tile'},
      {title:'Install the lettering',description:'Place the BTS and ARMY objects.',settings:{Objects:'BTS Letters, ARMY Letters',Scale:'',Altitude:''},guideKey:'3DObject',guideTitle:'Install 3D Objects'},
      {title:'View in AR',description:'Experience the finished arrangement.',settings:{},guideKey:'AR',guideTitle:'View in AR'}
    ]
  },
  {
    videoUrl: 'https://youtube.com/shorts/Ej7OAKhgYdI?feature=share',
    aspect: '9:16',
    link: '',
    title: '하늘공원에 억새축제 포스터를 띄워봤어요!',
    difficulty: 'Easy',
    description: '하늘공원에 억새축제 포스터를 Picture 오브젝트로 배치한 AR 쇼케이스입니다.',
    tags: ['AR'], creator: 'NIN.Earth',
    location: {name:'하늘공원, 서울',url:'https://www.google.com/maps/search/?api=1&query=Haneul+Park+Seoul'},
    contentUsed: [{type:'picture',name:'Picture',url:''}],
    recipeIntro: '이 장면을 만든 단계와 설정을 따라 해보세요.',
    steps: [
      {title:'원하는 위치에 이미지를 배치합니다.',description:'',settings:{},guideUrl:'https://youtube.com/shorts/bOrCMQ9Jdcs',guideTitle:'이미지 올리기'},
      {title:'이미지를 복제하여 반복 배치합니다.',description:'',settings:{},guideTitle:'반복 세우기'},
      {title:'AR / 3D로 완성된 장면을 체험합니다.',description:'',settings:{},guideTitle:'AR/3D로 체험하기'}
    ]
  }
];
/* Paste official Basic Guide URLs here; each step may override guideUrl directly. */
window.NIN_BASIC_GUIDES = {
  Tile:'', '3DObject':'', Motion:'', AR:'', VR:'', '3D':''
};
