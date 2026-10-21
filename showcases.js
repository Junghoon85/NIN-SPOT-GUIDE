/* NIN SPOT GUIDE v0.0.0 — Edit this file to manage Showcase cards.
   Unknown values are deliberately left blank. Do not publish example settings as actual footage specifications.
   Editable fields: videoUrl, aspect, title, link, description, creator, difficulty (Easy, Moderate, Hard), location, objects (up to 2) and Recipe steps.
   Location and objects each keep their display name and URL together. Each Recipe step has its own settings and Basic Guide.
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
    objects: [{name:'Humpback Whale',url:''},{name:'',url:''}],
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
    objects: [{name:'Whale Balloon',url:''},{name:'',url:''}],
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
    objects: [{name:'Humpback Whale',url:''},{name:'',url:''}],
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
    objects: [{name:'BTS Letters',url:''},{name:'ARMY Letters',url:''}],
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
    difficulty: '',
    description: '하늘공원에 억새축제 포스터를 Picture 오브젝트로 배치한 AR 쇼케이스입니다.',
    tags: ['AR'], creator: 'NIN.Earth',
    location: {name:'하늘공원, 서울',url:'https://www.google.com/maps/search/?api=1&query=Haneul+Park+Seoul'},
    objects: [{name:'Picture',url:''},{name:'',url:''}],
    steps: [
      {title:'장소 선택',description:'서울 하늘공원을 선택합니다.',settings:{Location:'하늘공원, 서울'},guideKey:'Tile',guideTitle:'Select a Tile'},
      {title:'Picture 오브젝트 설치',description:'억새축제 포스터를 장소에 배치합니다.',settings:{Object:'Picture'},guideKey:'3DObject',guideTitle:'Install 3D Objects'},
      {title:'AR로 확인',description:'완성된 포스터를 현장에서 확인합니다.',settings:{},guideKey:'AR',guideTitle:'View in AR'}
    ]
  }
];
/* Paste official Basic Guide URLs here; each step may override guideUrl directly. */
window.NIN_BASIC_GUIDES = {
  Tile:'', '3DObject':'', Motion:'', AR:'', VR:'', '3D':''
};
