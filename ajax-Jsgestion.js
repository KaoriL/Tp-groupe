// Fonctions utiles
function get(urlA, fonctSuccess, fonctError) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    fetch(urlA, requestOptions)
    .then((response) => response.json())
      .then(function (data) {
        console.log("La requête GET a abouti avec la réponse JSON : ", data);
        // alert("Après console");
        fonctSuccess(JSON.stringify(data));
        // alert("Après Success");
      })
      .catch(function (error) {
        console.log("La requête GET a échoué : ", error);
        fonctError(error);
      });
  }
  
  function post(urlA, donnees, fonctSuccess, fonctError) {
    var requestOptions = {
      method: "POST",
      body: donnees,
      redirect: "follow",
    };
  
    fetch(urlA, requestOptions)
      .then((response) => response.text())
      .then(function (data) {
        console.log("La requête POST a abouti avec la réponse JSON : ", data);
        fonctSuccess(data);
      })
      .catch(function (error) {
        console.log("La requête POST a échoué : ", error);
        fonctError(error);
      });
  }
  
  function put(urlA, donnees, fonctSuccess, fonctError) {
    var requestOptions = {
      method: "PUT",
      body: donnees,
      redirect: "follow",
    };
  
    fetch(urlA, requestOptions)
      .then((response) => response.text())
      .then(function (data) {
        console.log("La requête PUT a abouti avec la réponse JSON : ", data);
        fonctSuccess(data);
      })
      .catch(function (error) {
        console.log("La requête PUT a échoué : ", error);
        fonctError(error);
      });
   
  }
  
  function del(urlA, fonctSuccess, fonctError) {
    var urlencoded = new URLSearchParams();
   
    var requestOptions = {
      method: "DELETE",
      body: urlencoded,
      redirect: "follow",
    };
  
    fetch(urlA, requestOptions)
      .then((response) => response.text())
      .then(function (data) {
        console.log("La requête DELETE a abouti avec la réponse JSON : ", data);
        fonctSuccess(data);
      })
      .catch(function (error) {
        console.log("La requête DELETE a échoué : ", error);
        fonctError(error);
      });
  }