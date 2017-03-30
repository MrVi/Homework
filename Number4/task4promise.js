
var randomButtonElement = document.getElementById('randomize');
var randomUserElement = document.getElementById('user');
var errorElement = document.getElementById('error');

randomButtonElement.onclick = function () {
    makePromiseGetRequest('https://api.github.com/users')
        .then(data => JSON.parse)
        .then(user => {
            return user = data[Math.floor(Math.random() * data.length)];
        })
        .then(user => loadImagePromise(user))
        .then (user => {
            hideError();
            drawUser(user);
        })
        .catch(showError);
};

function makePromiseGetRequest(url) {
    return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

function showError(err) {
    errorElement.textContent = err;
    errorElement.classList.remove('hidden');
    randomUserElement.classList.add('hidden');
}

function hideError() {
    errorElement.classList.add('hidden');
    randomUserElement.classList.remove('hidden');
}


function loadImagePromise(user) {
    return new Promise (function(resolve, reject) {
        var img = new Image();
        img.onload = function () {
          resolve(user);
        };
        img.onerror = function () {
            reject(new Error('Что-то пошло не так'));
        };
        img.src = imageUrl;});
}

function drawUser(data) {
    var img = randomUserElement.querySelector('img');
    var link = randomUserElement.querySelector('a');
    img.src = data.avatar_url;
    img.alt = data.login;
    link.href = data.html_url;
    link.textContent = data.login;
}

 /*
  var randomButtonElement = document.getElementById('randomize');
  var randomUserElement = document.getElementById('user');
  var errorElement = document.getElementById('error');

  randomButtonElement.onclick = function () {
  makeGetRequest('https://api.github.com/users',
  function (request) {
  var data;
  try {
  data = JSON.parse(request)
  } catch (err) {
  showError(new Error('Ошибка при чтении из json'));
  }
  if (data) {
  var user = data[Math.floor(Math.random() * data.length)];
  loadImage(user.avatar_url, function() {
  hideError();
  drawUser(user);
  }, showError);
  }
  }, showError);
  };

  function makeGetRequest(url, successCallback, errorCallback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
  if (xhr.readyState != 4) return;

  if (xhr.status != 200) {
  var error = new Error('Ошибка ' + xhr.status);
  error.code = xhr.statusText;
  errorCallback(error);
  } else {
  successCallback(xhr.responseText);
  }

  };

  xhr.send();
  }

  function showError(err) {
  errorElement.textContent = err;
  errorElement.classList.remove('hidden');
  randomUserElement.classList.add('hidden');
  }

  function hideError() {
  errorElement.classList.add('hidden');
  randomUserElement.classList.remove('hidden');
  }


  function loadImage(imageUrl, successCallback, errorCallback) {
  var img = new Image();

  img.onload = function () {
  successCallback(img);
  };

  img.onerror = function () {
  errorCallback(new Error('Что-то пошло не так'));
  };
  img.src = imageUrl;
  }

  function drawUser(data) {
  var img = randomUserElement.querySelector('img');
  var link = randomUserElement.querySelector('a');
  img.src = data.avatar_url;
  img.alt = data.login;
  link.href = data.html_url;
  link.textContent = data.login;
  }

  */