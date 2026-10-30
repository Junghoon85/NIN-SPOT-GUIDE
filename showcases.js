/* NIN SPOT GUIDE v0.0.0 — Edit this file to manage Showcase cards.
   Unknown values are deliberately left blank. Do not publish example settings as actual footage specifications.
   Editable fields: videoUrl, aspect, title, link, description, creator, difficulty (Easy, Moderate, Hard), location, contentUsed and Recipe steps.
   contentUsed entries use {type:'text|picture|drawing|object|video', name:'', url:''}. Only Object entries use a Store URL.
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
    contentUsed: [{type:'picture',name:'Picture',url:''},{type:'object',name:'humpback',url:''}],
    steps: [
      {title:'Choose a location',description:'Choose the stadium location.',settings:{},guideKey:'Search',guideTitle:'Search'},
      {title:'Install an image',description:'Place the image in the scene.',settings:{},guideKey:'Image',guideTitle:'Image'},
      {title:'Install an object',description:'Place the humpback object in the scene.',settings:{Object:'humpback'},guideKey:'Object',guideTitle:'Object'},
      {title:'Install a subobject',description:'Set a message that moves together with the object.',settings:{},guideTitle:'Install Subobject'},
      {title:'Capture in AR',description:'View and record the finished scene.',settings:{},guide:false}
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
    contentUsed: [{type:'object',name:'humpback',url:''}],
    steps: [
      {title:'Choose a location',description:'Prepare the seaside scene.',settings:{},guide:false},
      {title:'Install the humpback object',description:'Place the humpback object in the seaside scene.',settings:{Object:'humpback'},guideKey:'Object',guideTitle:'Object'},
      {title:'Capture in AR',description:'View and record the finished scene.',settings:{},guide:false}
    ]
  },
  {
    videoUrl: 'https://youtube.com/shorts/mxSmk1k0eQ4?si=QFhp9rTffGPsnen0',
    aspect: '9:16',
    link: '',
    title: 'Halloween Takes Over the Street',
    difficulty: 'Hard',
    description: 'Halloween objects take over the street in AR.',
    tags: ['3DObject','AR'], creator: 'NIN.Earth',
    location: {name:'the street',url:''},
    contentUsed: [{type:'object',name:'halloween_pumpkin',url:''},{type:'object',name:'Halloween ghost',url:''},{type:'object',name:'halloween_witch hat',url:''}],
    steps: [
      {title:'Choose a location',description:'Choose a street location.',settings:{Location:'the street'},guide:false},
      {title:'Install the Halloween objects',description:'Place halloween_pumpkin, Halloween ghost, and halloween_witch hat in the scene.',settings:{Objects:'halloween_pumpkin, Halloween ghost, halloween_witch hat'},guideKey:'Object',guideTitle:'Object'},
      {title:'Repeat the pumpkins',description:'Duplicate halloween_pumpkin and place it repeatedly.',settings:{Object:'halloween_pumpkin'},guideTitle:'반복 세우기'},
      {title:'Capture in AR',description:'View and record the finished scene.',settings:{},guide:false}
    ]
  },
  {
    videoUrl: 'https://youtube.com/shorts/VkntITHfdKc?si=6U29tp34hLy3dZor',
    aspect: '9:16',
    link: '',
    title: 'BTS Returns to Gwanghwamun',
    difficulty: 'Moderate',
    description: 'A humpback object appears at Gwanghwamun Square in Seoul.',
    tags: ['3DObject','AR'], creator: 'NIN.Earth',
    location: {name:'Gwanghwamun Square, Seoul',url:'https://www.google.com/maps/search/?api=1&query=Gwanghwamun+Square+Seoul'},
    contentUsed: [{type:'object',name:'humpback',url:''}],
    steps: [
      {title:'Choose a location',description:'Choose positions across Gwanghwamun Square.',settings:{Location:'Gwanghwamun Square, Seoul'},guide:false},
      {title:'Install the humpback object',description:'Place the humpback object in the scene.',settings:{Object:'humpback'},guideKey:'Object',guideTitle:'Object'},
      {title:'Capture in AR',description:'View and record the finished scene.',settings:{},guide:false}
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
      {title:'원하는 위치에 이미지를 배치합니다.',description:'',settings:{},guideKey:'Image',guideTitle:'이미지 올리기'},
      {title:'이미지를 복제하여 반복 배치합니다.',description:'',settings:{},guideTitle:'반복 세우기'},
      {title:'AR / 3D로 완성된 장면을 체험합니다.',description:'',settings:{},guideTitle:'AR/3D로 체험하기'}
    ]
  }
];
/* Paste official Basic Guide URLs here; each step may override guideUrl directly. */
window.NIN_BASIC_GUIDES = {
  Search:'https://youtu.be/7-3mghilrQI?si=U0XAM9r_4bvuMBdZ',
  Text:'https://youtu.be/stc-mUGexIk?si=9Bmy4TF2scDdnICR',
  Object:'https://youtu.be/zqifQrF4f28?si=qcVxWnI7e_DIG6uq',
  Image:'https://youtu.be/bOrCMQ9Jdcs?si=bmSpkl4X4slIXkN-',
  Drawing:'https://youtu.be/arKtYlJnaB4?si=BpHEMexzAMYJlbDE',
  Video:'https://youtu.be/W27RO2XbHGk?si=qXemP10DIxjeIlND',
  Tile:'', '3DObject':'', Motion:'', AR:'', VR:'', '3D':''
};
