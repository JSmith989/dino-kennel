const dinoArray = [
  {
    id: 'dino1',
    name: 'Rex',
    type: 'T Rex',
    age: 100,
    owner: 'Jacob',
    adventures: [],
    health: 92,
    imageUrl:
      'https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png',
  },
  {
    id: 'dino2',
    name: 'Steve',
    type: 'Velociraptor',
    age: 1,
    owner: 'Jacob',
    adventures: [],
    health: 1,
    imageUrl: 'https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png',
  },
  {
    id: 'dino3',
    name: 'Susan',
    type: 'stegosaurus',
    age: 55,
    owner: 'Jacob',
    adventures: [],
    health: 0,
    imageUrl:
      'https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg',
  },
  {
    id: 'dino4',
    name: 'Barry',
    type: 'Brontosaurus',
    age: 100,
    owner: 'Abbey',
    adventures: [],
    health: 100,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF2dDXzeJS-XOVA-JdrWqAMQ5xNPBwuL87IA&usqp=CAU',
  },
  {
    id: 'dino5',
    name: 'Steph',
    type: 'Spinosaurus',
    age: 100,
    owner: 'Dr. T',
    adventures: [],
    health: 75,
    imageUrl:
      'https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2',
  },
  {
    id: 'dino6',
    name: 'Tim',
    type: 'Talarurus',
    age: 100,
    owner: 'Dr. T',
    adventures: [],
    health: 55,
    imageUrl:
      'https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226',
  },
  {
    id: 'dino7',
    name: 'Tracy',
    type: 'Triceratops',
    age: 100,
    owner: 'Abbey',
    adventures: [],
    health: 0,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg',
  },
  {
    id: 'dino8',
    name: 'Percy',
    type: 'Pterodactyl',
    age: 10,
    owner: 'Jacob',
    adventures: [],
    health: 10,
    imageUrl: 'https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg',
  },
  {
    id: 'dino9',
    name: 'Betty',
    type: 'brontosaurus',
    age: 22,
    owner: 'Dr. T',
    adventures: [],
    health: 22,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD',
  },
];

const adventureArray = [
  {
    id: 'adventure1',
    title: 'BRAWL',
    healthHit: 50,
  },
  {
    id: 'adventure2',
    title: 'Cave exploration',
    healthHit: 10,
  },
  {
    id: 'adventure3',
    title: 'Ropes course',
    healthHit: 13,
  },
  {
    id: 'adventure4',
    title: 'Playing in traffic',
    healthHit: 3,
  },
  {
    id: 'adventure5',
    title: 'Baking',
    healthHit: 70,
  },
  {
    id: 'adventure6',
    title: 'Welding',
    healthHit: 4,
  },
  {
    id: 'adventure7',
    title: 'Underwater Basket Weaving',
    healthHit: 99,
  },
  {
    id: 'adventure8',
    title: 'Surfing',
    healthHit: 39,
  },
  {
    id: 'adventure9',
    title: 'Fishing',
    healthHit: 23,
  },
  {
    id: 'adventure10',
    title: 'Shot from a cannon',
    healthHit: 60,
  },
];

const makeDinoCards = (item, index) => {
  let domString = `
  <div id="entireCard">
  <div class="modal fade" id="dino-${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Dino Info</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src="${item.imageUrl}" class="card-img-top" alt="dino">
      <h5 class="dino-name">${item.name}</h5>
            <p>Type: ${item.type}</p>
            <p>Owner: ${item.owner}</p>
             <p>Age: ${item.age}</p>
            <p>Health: ${item.health}%</p> <div class="progress">
             <div id="prog-${index}" class="progress-bar progress-bar-striped" role="progressbar" style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100"></div>
           </div>
           <div class="adventLog">
           <h5 class="date">Adventure Log</h5>
          <p id="adventureLog-${index}"></p>
        </div>
      </div>
        
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div id="yourDino" class="card" style="width: 18rem;">
     <img src="${item.imageUrl}" class="card-img-top" alt="dino">
     <div class="card-body">
       <h5 class="dino-name">${item.name}</h5>
       <p>Health: ${item.health}% <div class="progress">
       <div id="prog-${index}"class="progress-bar progress-bar-striped" role="progressbar" style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100"></div>
    </div></p>
     <button id="feed-${index}" type="button" class="btn btn-outline-success">Feed</button>
     <button id="adventure-${index}" type="button" class="btn btn-outline-warning">Adventure</button>
     <button id="pet-${index}" type="button" class="btn btn-outline-success">Pet</button>
     <button id="delete-${index}" type="button" class="btn btn-outline-danger">Delete</button>
     <button id="infoModal-${index}" type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#dino-${item.id}">Info</button>
     </div>
   </div>
</div>
  `;
  return domString;
};

const deleteDino = (index, array) => {
  $(`#delete-${index}`).click(() => {
    array.splice(index, 1);
    dinoCards(array);
  });
};

const feedButton = (index, item, array) => {
  $(`#feed-${index}`).click(() => {
    if (item.health > 0) {
      item.health += 7;
    }
    if (item.health > 100) {
      return window.alert('Too much energy, I need an adventure');
    }
    dinoCards(array);
  });
};

const petButton = (index, item, array) => {
  $(`#pet-${index}`).click(() => {
    if (item.health > 0) {
      item.health += 3;
    }
    if (item.health > 100) {
      return window.alert('Too much energy, I need an adventure');
    }
    dinoCards(array);
  });
};

const adventureButton = (index, item, array) => {
  $(`#adventure-${index}`).click(() => {
    if (item.health > 0) {
      item.health -= 8;

      item.adventures.push({
        timeStamp: new Date(),
        adventure: randoAdventure(adventureArray).title,
      });
    };
    dinoCards(array);
  });
};

const randoAdventure = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const adventureLog = (item, index) => {
  item.adventures.forEach((adventure, i) => {
    $(`#adventureLog-${index}`).append(`
      <body>
          <p>${adventure.timeStamp}</p>
          <p><b>Adventure Type:</b> ${adventure.adventure}</p>
      </body>
      `);
  });
};

const dinoCards = (array) => {
  $('#dino-kennel').html('');
  $('#dino-hospital').html('');
  $('#dino-dead').html('');
  dinoArray.forEach((item, index) => {
    if (item.health >= 35) {
      $('#dino-kennel').append(makeDinoCards(item, index));
    } else if (item.health < 35 && item.health > 0) {
      $('#dino-hospital').append(makeDinoCards(item, index));
    } else {
      $('#dino-dead').append(makeDinoCards(item, index));
    }
    adventureLog(item, index);
    petButton(index, item, array);
    adventureButton(index, item, array);
    feedButton(index, item, array);
    deleteDino(index, array);
  });
};

const dinoForm = () => {
  $('#addDino').click(() => {
    $('#dinoForm').html(`
        <form id="your-dino">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" id="dinoName" placeholder="Name">
                </div>
                <div class="col">
                  <input type="text" class="form-control" id="dinoOwner" placeholder="Owner">
                </div>
                <div class="col">
                  <input type="number" class="form-control" id="dinoAge" placeholder="Age">
                </div>
                <div class="col">
                  <input type="text" class="form-control" id="dinoType" placeholder="Type">
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="dinoIMG" placeholder="Dino URL">
              </div>
              <input type="button" id="submitDino" class="btn btn-info" value="Add My Dino"></input>
            </form>
        `);
    addDino();
  });
};

const addDino = () => {
  $('#submitDino').click(() => {
    let dinoInfo = {};
    dinoInfo.name = $('#dinoName').val();
    dinoInfo.type = $('#dinoType').val();
    dinoInfo.age = $('#dinoAge').val();
    dinoInfo.owner = $('#dinoOwner').val();
    dinoInfo.adventures = [];
    dinoInfo.health = 50;
    dinoInfo.imageUrl = $('#dinoIMG').val();
    dinoArray.push(dinoInfo);
    dinoCards(dinoArray);
    clearForm();
  });
  $('#addDino').click(() => {
    $('#dinoForm').toggle();
  });
};

const clearForm = () => {
  $('#dinoName').val('');
  $('#dinoType').val('');
  $('#dinoAge').val('');
  $('#dinoOwner').val('');
  $('#dinoIMG').val('');
};

const init = () => {
  dinoCards(dinoArray);
  dinoForm();
};

init();
