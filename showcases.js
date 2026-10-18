/* NIN SPOT GUIDE v4.0 — Edit this file to manage Showcase cards.
   Unknown values are deliberately left blank. Do not publish example settings as actual footage specifications.
   Location has a name and URL. Up to 2 linked objects. Each Recipe step has its own settings and Basic Guide.
*/
window.NIN_SHOWCASES = [
  {
    videoUrl: 'https://youtu.be/txphnstGcUw?si=ewhY60p96GYlDaW4',
    title: 'World Cup on NIN.Earth',
    description: 'A football-inspired experience brought into the real world.',
    tags: ['3DObject', 'AR'], creator: 'NIN.Earth',
    location: {name:'',url:''},
    objects: [{name:'',url:''},{name:'',url:''}],
    steps: [
      {title:'Prepare the scene',description:'Choose the location and prepare the content.',settings:{},guideKey:'Tile',guideTitle:'Select a Tile'},
      {title:'Install the objects',description:'Place the football-themed objects in the scene.',settings:{},guideKey:'3DObject',guideTitle:'Install 3D Objects'},
      {title:'View in AR',description:'Experience the result through your phone.',settings:{},guideKey:'AR',guideTitle:'View in AR'}
    ]
  },
  {
    videoUrl: 'https://youtube.com/shorts/meMevpicXaw?si=XrYLU7Euy7YCQl4',
    title: 'A Whale Balloon by the Sea',
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
    title: 'A Whale Above Seokchon Lake',
    description: 'A humpback whale glides above Seokchon Lake in Seoul, blending a digital object with a real place.',
    tags: ['Tile','3DObject','AR'], creator: 'NIN.Earth',
    location: {name:'Seokchon Lake, Seoul',url:'https://www.google.com/maps/search/?api=1&query=Seokchon+Lake+Seoul'},
    objects: [{name:'Humpback Whale',url:''},{name:'',url:''}],
    steps: [
      {title:'Select a Tile',description:'Choose a Tile near Seokchon Lake.',settings:{Location:'Seokchon Lake, Seoul', 'Tile ID':''},guideKey:'Tile',guideTitle:'Select a Tile'},
      {title:'Install the 3D Object',description:'Place the humpback whale above the lake.',settings:{Object:'Humpback Whale',Scale:'',Altitude:'',Rotation:''},guideKey:'3DObject',guideTitle:'Install 3D Objects'},
      {title:'Set the Motion',description:'Configure the whale’s movement. Enter the values actually used in the video.',settings:{Speed:'',Path:'',Orientation:'',Playback:''},guideKey:'Motion',guideTitle:'Set Motion'},
      {title:'View in AR',description:'Visit the location and experience the result.',settings:{},guideKey:'AR',guideTitle:'View in AR'}
    ]
  },
  {
    videoUrl: 'https://youtube.com/shorts/VkntITHfdKc?si=6U29tp34hLy3dZor',
    title: 'BTS Returns to Gwanghwamun',
    description: 'BTS and ARMY letter objects appear at Gwanghwamun Square in Seoul.',
    tags: ['3DObject','AR'], creator: 'NIN.Earth',
    location: {name:'Gwanghwamun Square, Seoul',url:'https://www.google.com/maps/search/?api=1&query=Gwanghwamun+Square+Seoul'},
    objects: [{name:'BTS Letters',url:''},{name:'ARMY Letters',url:''}],
    steps: [
      {title:'Select a location',description:'Choose positions across Gwanghwamun Square.',settings:{Location:'Gwanghwamun Square, Seoul'},guideKey:'Tile',guideTitle:'Select a Tile'},
      {title:'Install the lettering',description:'Place the BTS and ARMY objects.',settings:{Objects:'BTS Letters, ARMY Letters',Scale:'',Altitude:''},guideKey:'3DObject',guideTitle:'Install 3D Objects'},
      {title:'View in AR',description:'Experience the finished arrangement.',settings:{},guideKey:'AR',guideTitle:'View in AR'}
    ]
  }
];
/* Paste official Basic Guide URLs here; each step may override guideUrl directly. */
window.NIN_BASIC_GUIDES = {
  Tile:'', '3DObject':'', Motion:'', AR:'', VR:'', '3D':''
};
